import BlurText from "../components/BlurText/BlurText";
import TiltedCard from "../components/TiltedCard/TiltedCard";
import ScrollVelocity from '../components/ScrollVelocity/ScrollVelocity';
import ScrollReveal from '../components/ScrollReveal/ScrollReveal';
import SplashCursor from "../components/SplashCursor/SplashCursor";
import ExperienceCard from "../components/ExperienceCard/ExperienceCard";
import CertificationCard from "../components/CertificationCard/CertificationCard";
import ScrollingCards from "../components/ScrollingCards/ScrollingCards";

const Home = () => {
  const certifications = [
    {
      title: "React - The Complete Guide 2024",
      issuer: "Udemy",
      date: "Jan 2024",
      credentialLink: "#"
    },
    {
      title: "JavaScript From The Beginning",
      issuer: "Udemy",
      date: "Dec 2023",
      credentialLink: "#"
    },
    {
      title: "Advanced CSS and Sass",
      issuer: "Udemy",
      date: "Nov 2023",
      credentialLink: "#"
    },
    {
      title: "TypeScript Development",
      issuer: "Coursera",
      date: "Oct 2023",
      credentialLink: "#"
    },
    {
      title: "UI/UX Design Fundamentals",
      issuer: "Google",
      date: "Sep 2023",
      credentialLink: "#"
    }
  ];

  return (
    <main className="bg-black text-white overflow-x-hidden">
      <SplashCursor />
      {/* === Hero Section === */}
      <section className="relative flex items-center justify-center h-screen overflow-hidden">
        {/* Avatar */}
        <div className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] sm:-translate-y-1/2">
          <TiltedCard
            imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
            altText="Nur Aditiya Ramadhani"
            captionText="Nur Aditiya Ramadhani"
            containerHeight="130px"
            containerWidth="130px"
            imageHeight="130px"
            imageWidth="130px"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={<p className="tilted-card-demo-text">Ramsy</p>}
          />
        </div>

        {/* Stack Text */}
        <div className="text-center leading-none font-extrabold text-[9vw] sm:text-[11vw] uppercase z-10 space-y-1 flex flex-col items-center">
          <BlurText text="Nur Aditiya" delay={200} animateBy="words" direction="top" />
          <BlurText text="Rama dhani" delay={300} animateBy="words" direction="top" />
        </div>

        {/* Scroll Text */}
        <div className="absolute bottom-10 sm:bottom-6 w-full px-2">
          <ScrollVelocity
            texts={['IT Enthusiast']}
            velocity={100}
            className="custom-scroll-text"
          />
        </div>
      </section>

      {/* === About Section === */}
      <section id="about" className="pt-20 pb-40 bg-black">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-white text-4xl font-bold mb-8 text-center">About Me</h2>
          <ScrollReveal
            containerClassName="text-left"
            textClassName="text-lg leading-relaxed tracking-wide"
          >
            {"Hi there! 👋🏻 I'm Nur Aditiya Ramadhani, a dedicated student based in Tegal, Indonesia, with an unwavering passion for Information Technology and UI Design. Throughout my academic journey, I've been constantly exploring the fascinating intersection of technology and creative design. My enthusiasm for coding and creating intuitive user interfaces drives me to continuously learn and improve my skills. I find joy in solving complex technical challenges while ensuring the end result is both functional and aesthetically pleasing. As a student, I'm always eager to embrace new technologies and design trends, believing that the perfect blend of IT and UI design can create meaningful and impactful digital experiences for users."}
          </ScrollReveal>
        </div>
      </section>

      {/* === Experience Section === */}
      <section id="experience" className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ExperienceCard
              title="M2M Fullstack Developer"
              company="PT. Tricada Intronik"
              period="Oct, 2022 - Dec, 2022 · 3 months"
              description="Internship as a M2M Fullstack Developer, working on machine-to-machine communication systems and developing full-stack solutions for industrial automation."
            />
            <ExperienceCard
              title="Frontend Developer"
              company="Freelance"
              period="2021 - Present"
              description="Working on various web development projects, specializing in creating responsive and interactive user interfaces using modern frontend technologies like React, TypeScript, and Tailwind CSS."
            />
            {/* Add more ExperienceCard components as needed */}
          </div>
        </div>
      </section>

      {/* === Certification Section === */}
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center px-4">Certifications</h2>
          <div className="relative">
            <div className="absolute left-0 w-20 h-full bg-gradient-to-r from-black to-transparent z-10"></div>
            <div className="absolute right-0 w-20 h-full bg-gradient-to-l from-black to-transparent z-10"></div>
            <ScrollingCards direction="left" speed={1}>
              {certifications.map((cert, index) => (
                <div key={index} className="w-[300px] flex-shrink-0">
                  <CertificationCard {...cert} />
                </div>
              ))}
            </ScrollingCards>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
