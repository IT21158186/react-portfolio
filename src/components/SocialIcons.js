const SocialIcons = () => {
  const styles = {
    icon: {
      textDecoration: "none",
      fontSize: "30px",
      padding: "15px",
      transition: "0.2s ease-in",
    },
  };

  return (
    <div className="socialIcons" style={styles.socialIcons}>
      <a className="icon" style={styles.icon} href="https://github.com/IT21158186">
        <i className="fa-brands fa-github" aria-hidden="true" title="Michael Yeates' GitHub Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://www.linkedin.com/in/denet">
        <i className="fa-brands fa-linkedin" aria-hidden="true" title="Michael Yeates' LinkedIn Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://www.instagram.com/iam_deneth/">
        <i className="fa-brands fa-instagram" aria-hidden="true" title="Michael Yeates' Instagram Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://twitter.com/DenethOfficial">
        <i className="fa-brands fa-twitter" aria-hidden="true" title="Michael Yeates' Twitter Profile"></i>
      </a>
    </div>
  );
};

export default SocialIcons;
