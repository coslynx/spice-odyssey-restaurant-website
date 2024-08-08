import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '../styles/home.module.css';
import Hero from '../components/hero';
import About from '../components/about';
import MenuSection from '../components/menuSection';
import { useEffect, useState } from 'react';
import api from '../utils/api';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [menuData, setMenuData] = useState([]);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await api.getDishes();
        setMenuData(response.data);
      } catch (error) {
        console.error('Error fetching menu data:', error);
      }
    };

    fetchMenu();
  }, []);

  return (
    <>
      <Head>
        <title>Spice Odyssey - Indian Restaurant</title>
        <meta name="description" content="Spice Odyssey: Experience Authentic Indian Flavors" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Hero />
        <About />
        <section className="py-16">
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
    </>
  );
}