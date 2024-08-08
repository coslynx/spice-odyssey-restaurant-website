import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'react-toastify';
import { AiOutlineCalendar } from 'react-icons/ai';
import { IoIosTime } from 'react-icons/io';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { formatDate } from '../utils/formatDate';
import api from '../utils/api';
import styles from '../styles/reservationForm.module.css';

const reservationSchema = z.object({
  date: z.string().nonempty(),
  time: z.string().nonempty(),
  guests: z.number().int().positive(),
  name: z.string().nonempty(),
  email: z.string().email(),
  phone: z.string().optional(),
});

const ReservationForm = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(reservationSchema),
  });

  const onSubmit = async (data) => {
    try {
      const formattedDate = formatDate(data.date);
      await api.createReservation({
        ...data,
        date: formattedDate,
      });
      toast.success('Reservation successfully created!');
    } catch (error) {
      console.error('Error creating reservation:', error);
      toast.error('An error occurred while creating your reservation.');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <label
            htmlFor="date"
            className="block text-lg font-medium text-gray-700"
          >
            Date
          </label>
          <div className="relative">
            <AiOutlineCalendar className={styles.calendarIcon} />
            <DatePicker
              id="date"
              {...register('date')}
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              className={styles.datePicker}
            />
          </div>
          {errors.date && (
            <p className="text-red-500 text-sm mt-1">
              {errors.date.message}
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="time"
            className="block text-lg font-medium text-gray-700"
          >
            Time
          </label>
          <input
            type="time"
            id="time"
            {...register('time')}
            className={styles.input}
          />
          {errors.time && (
            <p className="text-red-500 text-sm mt-1">
              {errors.time.message}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div>
          <label
            htmlFor="guests"
            className="block text-lg font-medium text-gray-700"
          >
            Number of Guests
          </label>
          <input
            type="number"
            id="guests"
            {...register('guests')}
            className={styles.input}
          />
          {errors.guests && (
            <p className="text-red-500 text-sm mt-1">
              {errors.guests.message}
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="name"
            className="block text-lg font-medium text-gray-700"
          >
            Your Name
          </label>
          <input
            type="text"
            id="name"
            {...register('name')}
            className={styles.input}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">
              {errors.name.message}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div>
          <label
            htmlFor="email"
            className="block text-lg font-medium text-gray-700"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            {...register('email')}
            className={styles.input}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">
              {errors.email.message}
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-lg font-medium text-gray-700"
          >
            Phone Number (Optional)
          </label>
          <input
            type="tel"
            id="phone"
            {...register('phone')}
            className={styles.input}
          />
        </div>
      </div>

      <button
        type="submit"
        className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded mt-8"
      >
        Book Now
      </button>
    </form>
  );
};

export default ReservationForm;