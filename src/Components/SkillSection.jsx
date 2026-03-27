import { SkillCard } from "./Skillcard";
import { GrReactjs } from "react-icons/gr";
import {
  SiRedux,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiBootstrap,
  SiGit,
  SiLaravel,
  SiCodeigniter,
} from "react-icons/si";
import { FaCode } from "react-icons/fa";
import { MdApi } from "react-icons/md";
import { motion } from "framer-motion";
import {
  Container,
  Grid,
  GridItem,
  Heading,
  Text,
  Box,
} from "@chakra-ui/react";

const MotionBox = motion(Box);

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.05 },
  }),
};

const frontendSkills = [
  { skill: "React.js", icon: GrReactjs, color: "#61dafb" },
  { skill: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
  { skill: "Redux", icon: SiRedux, color: "#764abc" },
  { skill: "HTML5", icon: SiHtml5, color: "#e34f26" },
  { skill: "CSS3", icon: SiCss3, color: "#264de4" },
  { skill: "Tailwind CSS", icon: SiTailwindcss, color: "#06b6d4" },
  { skill: "Bootstrap", icon: SiBootstrap, color: "#7952b3" },
];

const backendSkills = [
  { skill: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { skill: "Express.js", icon: SiExpress, color: "#ffffff" },
  { skill: "MongoDB", icon: SiMongodb, color: "#47a248" },
  { skill: "REST APIs", icon: MdApi, color: "#00d4aa" },
  { skill: "Git", icon: SiGit, color: "#f05032" },
];

const otherSkills = [
  { skill: "Laravel", icon: SiLaravel, color: "#ff2d20" },
  { skill: "CodeIgniter", icon: SiCodeigniter, color: "#ef4223" },
  { skill: "Charts", icon: FaCode, color: "#6c63ff" },
];

function SkillCategory({ title, skills, startIndex }) {
  return (
    <Box mb="40px">
      <Text
        fontSize="14px"
        fontFamily="'Fira Code', monospace"
        color="#6c63ff"
        letterSpacing="2px"
        mb="20px"
        textTransform="uppercase"
      >
        {title}
      </Text>
      <Grid
        gridTemplateColumns={{
          lg: "repeat(4, 1fr)",
          md: "repeat(3, 1fr)",
          sm: "repeat(2, 1fr)",
          base: "repeat(2, 1fr)",
        }}
        gap="16px"
      >
        {skills.map((s, idx) => (
          <GridItem key={s.skill}>
            <MotionBox
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={startIndex + idx}
              variants={fadeInUp}
            >
              <SkillCard
                skill={s.skill}
                icon={s.icon}
                color={s.color}
              />
            </MotionBox>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
}

export function SkillsSection() {
  return (
    <Container maxW={"1100px"} id="skills" paddingTop={"120px"} px="24px">
      <MotionBox
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        custom={0}
        variants={fadeInUp}
      >
        <Text
          textAlign="center"
          fontFamily="'Fira Code', monospace"
          color="#6c63ff"
          fontSize="14px"
          letterSpacing="3px"
          mb="8px"
        >
          WHAT I USE
        </Text>
        <Heading
          textAlign={"center"}
          fontSize={{ lg: "42px", md: "36px", base: "30px" }}
          color="white"
          mb="60px"
        >
          Technical <Text as="span" className="gradient-text">Skills</Text>
        </Heading>
      </MotionBox>

      <SkillCategory title="// Frontend" skills={frontendSkills} startIndex={0} />
      <SkillCategory title="// Backend & Tools" skills={backendSkills} startIndex={7} />
      <SkillCategory title="// Additional" skills={otherSkills} startIndex={12} />
    </Container>
  );
}
