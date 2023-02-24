import profilePhoto from "@/assets/images/ProfilePhoto.svg";
import styles from "@/styles/HeroSection.module.css";
import IconButton from "@mui/material/IconButton";
import Image from "next/image";
import { FiGithub, FiLinkedin } from "react-icons/fi";

const HeroSection: React.FC = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.textContainer}>
        <h6>Hey, I&apos;m Akeem</h6>
        <h1>
          A Software Developer with a <span>Front-End Lean</span>
        </h1>
        <p>
          I adore being able to create seamless and interesting user experiences
          alongside robust front-end infrastructure
        </p>
        <div className={styles.actionContainer}>
          <button className={styles.contactButton}>Contact Me</button>
          <IconButton
            sx={{
              backgroundColor: "white",
              width: 40,
              height: 40,
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)",
            }}
          >
            <FiGithub />
          </IconButton>
          <IconButton
            sx={{
              backgroundColor: "white",
              width: 40,
              height: 40,
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)",
            }}
          >
            <FiLinkedin />
          </IconButton>
        </div>
      </div>
      <div className={styles.neatImage}>
        <Image src={profilePhoto} alt="Profile" width={500} />
      </div>
    </section>
  );
};

export default HeroSection;
