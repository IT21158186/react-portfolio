import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  const personalDetails = {
    name: "Deneth Pinsara",
    location: "Malabe ,Sri Lanka",
    tagline: "I'm a Full Stack Developer",
    tagline2: "(Most Interest in Web Developing)",
    email: "deneth.official1@gmail.com",
    availability: "Open to work",
    brand:
      "As a full-stack software developer, my comprehensive technical skill set combined with my ability to think creatively and my background in psychology enables me to approach each project with a user-centric mindset. With a keen focus on user experience, I strive to deliver efficient and effective digital solutions that not only meet but exceed client expectations. I am passionate about leveraging cutting-edge technologies and frameworks to build scalable and robust web applications that are tailored to meet the unique needs of each client.",
  };

  return (
    <>
      <Header />
      <AnimatedRoutes personalDetails={personalDetails} />
    </>
  );
}

export default App;
