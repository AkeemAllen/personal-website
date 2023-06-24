import styles from "@/styles/TechStack.module.css";
import { MdMonitor } from "react-icons/md";

const TechStack = () => {
  return (
    <div className={styles.techStack}>
      <h4>
        Frontend <MdMonitor size={40} />
      </h4>
      <p>
        As a React developer with over 5 years of experience, I have a deep
        understanding of React's core concepts and have built numerous
        applications using React, Redux, and related tools.
      </p>
    </div>
  );
};
export default TechStack;
