"use client";

import styles from "./page.module.css"; // use simple styles for demonstration purposes
import Chat from "../../components/chat";

// assistantNo for roleplay
const assistantNo = "assistant5";
const welcomeMessage = "Lad os træne hverdagssituationer. Hvilket emne, som du ønsker at træne?";

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