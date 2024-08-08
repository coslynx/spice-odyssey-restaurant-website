import Head from 'next/head';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import GalleryImage from '../components/galleryImage';
import Header from '../components/header';
import Footer from '../components/footer';
import styles from '../styles/gallery.module.css';

export default function Gallery() {
  const [galleryImages, setGalleryImages] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchGalleryImages = async () => {
      try {
        const response = await fetch('/api/galleryImages');
        const data = await response.json();
        setGalleryImages(data);
      } catch (error) {
        console.error('Error fetching gallery images:', error);
      }
    };

    fetchGalleryImages();
  }, []);

  return (
    <>
      <Head>
        <title>Spice Odyssey - Gallery</title>
        <meta name="description" content="View images of Spice Odyssey and our delicious dishes." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <section className={styles.gallerySection}>
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Our Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {galleryImages.map((image) => (
                <GalleryImage key={image.id} image={image} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}