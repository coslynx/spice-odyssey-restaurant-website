import Head from 'next/head';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'react-toastify';
import api from '../utils/api';
import Header from '../components/header';
import Footer from '../components/footer';
import ContactForm from '../components/contactForm';
import styles from '../styles/contact.module.css';

export default function Contact() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await api.sendMessage(data);
      toast.success('Message sent successfully!');
      router.push('/');
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error('An error occurred while sending your message.');
    }
  };

  return (
    <>
      <Head>
        <title>Spice Odyssey - Contact</title>
        <meta name="description" content="Get in touch with Spice Odyssey." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <section className={styles.contactSection}>
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col items-start gap-4">
                <h3 className="text-2xl font-medium">Spice Odyssey</h3>
                <p className="text-gray-600">
                  [Restaurant Address]
                </p>
                <p className="text-gray-600">
                  Phone: [Restaurant Phone Number]
                </p>
                <p className="text-gray-600">
                  Email: [Restaurant Email Address]
                </p>
              </div>
              <ContactForm onSubmit={handleSubmit(onSubmit)} register={register} errors={errors} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}