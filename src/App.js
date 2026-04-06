import { Box } from "@chakra-ui/react";
import "./App.css";
import { AboutSection } from "./Components/AboutSection";
import { ContactSection } from "./Components/ContactSection";
import Contact from "./Components/Contact";
import GithubStats from "./Components/GithubStats";
import { HeroSection } from "./Components/HeroSection";
import Navbar from "./Components/Navbar";
import { ProjectsSection } from "./Components/ProjectSection";
import { SkillsSection } from "./Components/SkillSection";
import { CustomCursor } from "./Components/CustomCursor";

function App() {
  return (
    <Box className="App" position="relative">
      <CustomCursor />

      {/* Animated background orbs */}
      <div className="bg-orb bg-orb-1" />
      <div className="bg-orb bg-orb-2" />
      <div className="bg-orb bg-orb-3" />

      <Contact />
      <Navbar />
      <HeroSection />
      <div data-section="about">
        <AboutSection />
      </div>
      <div data-section="skills">
        <SkillsSection />
      </div>
      <div data-section="projects">
        <ProjectsSection />
      </div>
      <div data-section="github">
        <GithubStats />
      </div>
      <div data-section="contact">
        <ContactSection />
      </div>
    </Box>
  );
}

export default App;
