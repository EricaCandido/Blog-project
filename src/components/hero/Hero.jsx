import styles from "./hero.module.scss";
import Image from "next/image";
import djImage from "../../assets/dj.jpg";
import orangeImage from "../../assets/orange.jpg";
import spotifyImage from "../../assets/spotify.jpg";

const Hero = () => {
  return (
    <div className={styles.Hero}>
      <div className={styles.djDiv}>
        <Image
          className={styles.djImage}
          src={djImage}
          width={400}
          height={450}
          alt="hero_image"
        />
        <h2 className={styles.title}>Music is life</h2>
        <h2 className={styles.subtitle}>
          "Elettronica Esplosiva": Entra nel mondo della musica elettronica, dai
          suoi umili inizi fino alla sua esplosione globale. Esplora i generi
          come la techno, la house, il trance e l'EDM, e copri i festival di
          musica elettronica più famosi, i DJ di tendenza e le innovazioni
          tecnologiche che hanno trasformato la musica.
        </h2>
      </div>
      <div className={styles.rightDiv}>
        <Image
          className={styles.orangeImage}
          src={orangeImage}
          width={200}
          height={300}
          alt="hero_image"
        />
        <h2 className={styles.orangeSubtitle}>
          "Ritmi Selvaggi": Esplora l'epoca dei movimenti musicali
          rivoluzionari, dagli anni '60 agli anni '80.
        </h2>

        <Image
          className={styles.spotifyImage}
          src={spotifyImage}
          width={200}
          height={450}
          alt="hero_image"
        />
        <h2 className={styles.spotifySubtitle}>
          "Festival Frenetici": Esplora l'effervescenza dei festival musicali,
          dai grandi nomi.
        </h2>
      </div>
    </div>
  );
};

export default Hero;
