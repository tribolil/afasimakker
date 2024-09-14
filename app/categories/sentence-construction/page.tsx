"use client";

import styles from "./page.module.css"; // use simple styles for demonstration purposes
import Chat from "../../components/chat";

// assistantNo for roleplay
const assistantNo = "assistant4";
const welcomeMessage = "Lad os træne at lave sætninger. Hvilket emne, som du ønsker at træne?";

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
