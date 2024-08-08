import React from 'react';
import Image from 'next/image';
import styles from '../styles/galleryImage.module.css';

const GalleryImage = ({ image }) => {
  return (
    <div className={styles.galleryImageContainer}>
      <Image
        src={image.imageUrl}
        alt={image.altText}
        width={300}
        height={200}
        layout="responsive"
        objectFit="cover"
        className={styles.galleryImage}
      />
    </div>
  );
};

export default GalleryImage;