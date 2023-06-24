import styles from "@/styles/ExperienceSection.module.css";

import DotArt from "@/assets/images/DotArt.svg";
import TechStack from "@/components/TechStack";
import Image from "next/image";

const ExperienceSection = () => {
  return (
    <section className={styles.expSection}>
      <Image src={DotArt} alt="Profile" width={51} className={styles.dotArt} />
      <div className={styles.myExperience}>
        <h1>My Experience</h1>
        <div className={styles.techStackList}>
          <TechStack />
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
