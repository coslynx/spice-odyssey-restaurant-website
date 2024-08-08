import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'react-toastify';
import styles from '../styles/contactForm.module.css';

const contactSchema = z.object({
  name: z.string().nonempty(),
  email: z.string().email(),
  message: z.string().nonempty(),
});

const ContactForm = ({ onSubmit, register, errors }) => {
  const { handleSubmit } = useForm({
    resolver: zodResolver(contactSchema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className="grid grid-cols-1 gap-4">
        <div>
          <label htmlFor="name" className="block text-lg font-medium text-gray-700">
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
        <div>
          <label htmlFor="email" className="block text-lg font-medium text-gray-700">
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
          <label htmlFor="message" className="block text-lg font-medium text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            rows="5"
            {...register('message')}
            className={styles.textarea}
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">
              {errors.message.message}
            </p>
          )}
        </div>
        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded mt-4"
        >
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;