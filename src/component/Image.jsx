import styles from "../Styles/Image.module.css";
import newimg from "../assets/newimg.jpg";


const Image = () => {
  return (
    <article className={styles.article}>
      <img className={styles.image} src={newimg} alt="background" />
      <h3 className={styles.header}>Let's make it personal <p>Order our custom fabric</p></h3>
    </article>
  );
};

export default Image;