// components/AboutMe.tsx
import ScrollReveal from '../ScrollReveal/ScrollReveal';

const Aboutme = () => {
  return (
    <div id="about" className="mt-20 px-6 max-w-3xl mx-auto">
      <ScrollReveal
        baseOpacity={0}
        enableBlur={true}
        baseRotation={5}
        blurStrength={10}
      >
        I am an Information Technology student with a deep passion for both software development and UI design.
        My journey in tech has led me to explore various aspects of web development, from crafting elegant user interfaces to building robust backend systems.
        I particularly enjoy creating intuitive and visually appealing designs while maintaining clean, efficient code.
        As someone who values both functionality and aesthetics, I constantly strive to bridge the gap between technical excellence and beautiful design.
        When I'm not coding or designing, I enjoy keeping up with the latest tech trends and finding inspiration in various design resources.
        My goal is to become a versatile developer who can create seamless, user-centered digital experiences that make a real impact.

      </ScrollReveal>
    </div>
  );
};

export default Aboutme;
