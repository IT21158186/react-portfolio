import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import landingImage1 from "../../images/me1.jpg";
import landingImage2 from "../../images/me2.jpg";
import landingImage3 from "../../images/me3.jpg";
import SocialIcons from "../../components/SocialIcons";

const Landing = ({ name, tagline }) => {
  const styles = {
    landing: {
      height: "calc(100% - 93px)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },

    landingImage1: {
      position: "absolute",
      bottom: "0",
      opacity: "0.3",
      mixBlendMode: "lighten",
      height: "80%",
    },

    landingImage2: {
      position: "absolute",
      bottom: "0",
      opacity: "0.3",
      mixBlendMode: "lighten",
      height: "80%",
    },

    landingImage3: {
      position: "absolute",
      bottom: "0",
      opacity: "0.3",
      mixBlendMode: "lighten",
      height: "80%",
    },

    textContainer: {
      display: "flex",
      flexDirection: "column",
      letterSpacing: "1px",
      textAlign: "center",
      zIndex: "1",
      color: "#fff",
      textShadow: "1px 1px 3px #000",
    },

    name: {
      color: "#fff",
      fontWeight: "700",
      marginTop: "-100px",
      paddingBottom: "28px",
    },
  };

  // Create separate refs for each image
const [ref1, inView1] = useInView({
  threshold: 0, // Set threshold to 0 for immediate trigger
  triggerOnce: true,
});

const [ref2, inView2] = useInView({
  threshold: 0,
  triggerOnce: true,
});

const [ref3, inView3] = useInView({
  threshold: 0,
  triggerOnce: true,
});


  return (
    <section className="landing" style={styles.landing}>
      <div className="textContainer" style={styles.textContainer}>
        <motion.h1
          className="name"
          style={styles.name}
          ref={ref1} // Use ref1 for the first motion element
          initial={{ y: "-10vw", opacity: 0 }}
          animate={inView1 ? { y: 0, opacity: 1 } : { y: "-10vw", opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {name}
        </motion.h1>
        <motion.p
          className="description"
          ref={ref1} // Use ref1 for the second motion element
          initial={{ y: "10vw", opacity: 0 }}
          animate={inView1 ? { y: 0, opacity: 1 } : { y: "10vw", opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {tagline}
        </motion.p>
      </div>

      <div className="image-container1">
        <motion.img
          className="landingImage1"
          ref={ref1} // Use ref1 for the first image
          initial={{ y: "10vw", opacity: 0 }}
          animate={inView1 ? { y: 0, opacity: 0.4 } : { y: "10vw", opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          style={styles.landingImage1}
          src={landingImage1}
          alt=""
        />
      </div>
      <div className="image-container2">
        <motion.img
          className="landingImage2"
          ref={ref2} // Use ref2 for the second image
          initial={{ y: "10vw", opacity: 0 }}
          animate={inView2 ? { y: 0, opacity: 0.4 } : { y: "10vw", opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          style={styles.landingImage2}
          src={landingImage2}
          alt=""
        />
      </div>
      <div className="image-container3">
        <motion.img
          className="landingImage3"
          ref={ref3} // Use ref3 for the third image
          initial={{ y: "10vw", opacity: 0 }}
          animate={inView3 ? { y: 0, opacity: 0.4 } : { y: "10vw", opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          style={styles.landingImage3}
          src={landingImage3}
          alt=""
        />
      </div>

      <SocialIcons />
    </section>
  );
};

export default Landing;
