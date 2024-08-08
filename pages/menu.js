import Head from 'next/head';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'react-toastify';
import api from '../utils/api';
import Header from '../components/header';
import Footer from '../components/footer';
import MenuSection from '../components/menuSection';
import styles from '../styles/menu.module.css';

export default function Menu() {
  const [menuData, setMenuData] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await api.getDishes();
        setMenuData(response.data);
      } catch (error) {
        console.error('Error fetching menu data:', error);
        toast.error('An error occurred while fetching the menu.');
      }
    };

    fetchMenu();
  }, []);

  return (
    <>
      <Head>
        <title>Spice Odyssey - Menu</title>
        <meta name="description" content="Explore the delicious menu at Spice Odyssey." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <section className={styles.menuSection}>
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Our Menu</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {menuData.map((category) => (
                <MenuSection key={category.name} category={category} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}