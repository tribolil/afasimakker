"use client";

import styles from "./page.module.css"; // use simple styles for demonstration purposes
import Chat from "../../components/chat";

// assistantNo for word-naming
const assistantNo = "assistant2";
const welcomeMessage = "Lad os træne ord. Hvilket emne, ønsker du at træne?";

const Home = () => {
  
  return (
    <main className={styles.main}>
      <div className={styles.container}>
      <Chat assistantNo={assistantNo} welcomeMessage={welcomeMessage} /> 
      </div>
    </main>
  );
};

export default Home;
