"use client"; // Chỉ thị rằng đây là một Client Component
import styles from '../../app/styles/scss/_CategoryMenu.module.scss'; // Import SCSS

import { useRef } from 'react';
const categories = [
  'Graphics & Design', 'Programming & Tech', 'Digital Marketing', 
  'Video & Animation', 'Writing & Translation', 'Music & Audio',
  'Business', 'Finance', 'AI Services', 'Personal Growth','Consulting', 'Photography'
];

export default function CategoryMenu() {
  const menuRef = useRef(null);

  const scrollLeft = () => {
    menuRef.current.scrollBy({
      left: -200, // Scroll 200px to the left
      behavior: 'smooth'
    });
  };

  const scrollRight = () => {
    menuRef.current.scrollBy({
      left: 200, // Scroll 200px to the right
      behavior: 'smooth'
    });
  };

  return (
    <div className={styles.categoryWrapper}>
      <button className={styles.scrollButton} onClick={scrollLeft}>
        &lt;
      </button>

      <div className={styles.categoryMenu} ref={menuRef}>
        <ul>
          {categories.map((category, index) => (
            <li key={index}>
              <a href="#">{category}</a>
            </li>
          ))}
        </ul>
      </div>

      <button className={styles.scrollButton} onClick={scrollRight}>
        &gt;
      </button>
    </div>
  );
}

