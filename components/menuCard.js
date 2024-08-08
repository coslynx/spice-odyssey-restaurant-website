import React from 'react';
import Image from 'next/image';
import styles from '../styles/menuCard.module.css';

const MenuCard = ({ dish }) => {
  return (
    <div className={styles.menuCard}>
      <Image
        src={dish.imageUrl}
        alt={dish.name}
        width={200}
        height={150}
        layout="responsive"
        objectFit="cover"
        className={styles.menuImage}
      />
      <div className={styles.menuCardContent}>
        <h4 className={styles.menuCardTitle}>{dish.name}</h4>
        <p className={styles.menuCardDescription}>{dish.description}</p>
        <p className={styles.menuCardPrice}>₹{dish.price}</p>
        {dish.spiceLevel && (
          <p className={styles.menuCardSpiceLevel}>Spice Level: {dish.spiceLevel}</p>
        )}
      </div>
    </div>
  );
};

export default MenuCard;