import styles from "../Styles/Video.module.css";
import project from "../assets/project.mp4";
const Video = () => {
    return (
      <article className={styles.article}>
        <video className={styles.video} src={project} alt="background" autoPlay muted loop/>
        <h3 className={styles.header}>WONDER WORKS <p className="jus">4 SHIRTS OR POLOS FOR $199 <p>SAVE UP TO $277</p>
</p></h3>
      </article>
    );
  };
  
  export default Video;