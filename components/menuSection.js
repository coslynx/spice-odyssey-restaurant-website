import React from 'react';
import MenuCard from './menuCard';
import styles from '../styles/menuSection.module.css';

const MenuSection = ({ category }) => {
  return (
    <div className={styles.menuSection}>
      <h3 className="text-2xl font-bold mb-4">{category.name}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {category.dishes.map((dish) => (
          <MenuCard key={dish.id} dish={dish} />
        ))}
      </div>
    </div>
  );
};

export default MenuSection;