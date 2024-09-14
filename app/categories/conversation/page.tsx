"use client";

import styles from "./page.module.css";
import Chat from "../../components/chat";

// assistantNo for conversation
const assistantNo = "assistant1";
const welcomeMessage = "Lad os træne samtale. Hvilket emne, ønsker du at træne?";

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
