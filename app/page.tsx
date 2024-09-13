"use client";

import React from "react";
import styles from "./page.module.css";

const Home = () => {
  const categories = {
    "Samtale": "conversation",
    "Ord": "word-naming",
    "Forståelse": "comprehension",
    "Sætning": "sentence-construction",
    "Rollespil": "roleplay",
    
  };

  return (
    <main className={styles.main}>
      <div className={styles.title}>
        Tryk på den sprogøvelse, du ønsker at træne
      </div>
      <div className={styles.container}>
        {Object.entries(categories).map(([name, url], index) => (
          <a key={name} className={`${styles.category} ${styles[`category${index}`]}`}  href={`/categories/${url}`}>
            {name}
          </a>
        ))}
      </div>
    </main>
  );
};

export default Home;
