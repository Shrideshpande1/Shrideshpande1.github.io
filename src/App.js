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

function App() {
  return (
    <Box className="App" position="relative">
      {/* Animated background orbs */}
      <div className="bg-orb bg-orb-1" />
      <div className="bg-orb bg-orb-2" />
      <div className="bg-orb bg-orb-3" />

      <Contact />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <GithubStats />
      <ContactSection />
    </Box>
  );
}

export default App;
