import { ProjectCard } from "./ProjectCard";
import { Container, Grid, GridItem, Heading, Text, Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.15 },
  }),
};

const projects = [
  {
    name: "Simulex",
    subtitle: "TTS Call Center Platform",
    about:
      "A call center conversation platform powered by Text-to-Speech (TTS) technology. Enables real-time communication using voice-driven systems.",
    role: "UI/UX Designer & Frontend Developer",
    stacks: ["React.js", "JavaScript", "Tailwind CSS"],
    highlights: [
      "Designed intuitive UI for TTS-based communication",
      "Built reusable and scalable frontend components",
      "Focused on real-time conversation experience",
    ],
    link: "https://simulex.skyovi.com/simulations",
    color: "#6c63ff",
  },
  {
    name: "ZipLink",
    subtitle: "Project Management Platform",
    about:
      "A project management platform designed to manage tasks, workflows, and team productivity with rich analytics dashboards.",
    role: "Frontend Developer",
    stacks: ["MERN Stack", "Chart Libraries", "Tailwind CSS", "Bootstrap"],
    highlights: [
      "Developed dashboards for tracking projects and analytics",
      "Built UI for task management and workflow systems",
      "Integrated charts and data visualization features",
    ],
    link: "https://ziplink.skyovi.com/dashboards/project-portfolio",
    color: "#00d4aa",
  },
  {
    name: "Interveo",
    subtitle: "AI Interview Platform",
    about:
      "An AI-powered interview platform that helps recruiters automate the hiring process using AI-driven question generation and evaluation.",
    role: "Frontend Lead",
    stacks: ["MERN Stack", "Redux", "Tailwind CSS"],
    highlights: [
      "Designed complete frontend architecture",
      "Built recruiter dashboards and interview flows",
      "Developed subscription-based UI system",
    ],
    link: "https://interveo.in/",
    color: "#ff6b9d",
  },
  {
    name: "Flexlync",
    subtitle: "AT&T Call Center Platform",
    about:
      "A call center management system built for AT&T to monitor and manage operations with real-time analytics.",
    role: "Frontend Developer",
    stacks: ["CodeIgniter", "JavaScript", "HTML", "CSS", "Bootstrap"],
    highlights: [
      "Developed analytics dashboards",
      "Built UI for agent monitoring and call tracking",
      "Integrated real-time data visualization",
    ],
    link: "https://www.flexlync.com/",
    color: "#fbbf24",
  },
  {
    name: "Maha Marketplace",
    subtitle: "Cross-border E-commerce",
    about:
      "An e-commerce platform enabling Indian sellers to sell products to US customers with seamless buyer and seller experience.",
    role: "Frontend Developer (UI/UX)",
    stacks: ["MERN Stack", "Tailwind CSS"],
    highlights: [
      "Designed complete UI/UX for buyers and sellers",
      "Built responsive and scalable frontend",
      "Improved user flow and usability",
    ],
    link: "https://www.mahamarketplace.com/",
    color: "#06b6d4",
  },
];

export function ProjectsSection() {
  return (
    <Container maxW={"1100px"} paddingTop={"120px"} id="projects" px="24px">
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
          WHAT I BUILT
        </Text>
        <Heading
          textAlign={"center"}
          fontSize={{ lg: "42px", md: "36px", base: "30px" }}
          color="white"
          mb="60px"
        >
          Professional <Text as="span" className="gradient-text">Projects</Text>
        </Heading>
      </MotionBox>

      <Grid gap={"32px"}>
        {projects.map((project, idx) => (
          <GridItem key={project.name}>
            <MotionBox
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              custom={idx}
              variants={fadeInUp}
            >
              <ProjectCard {...project} />
            </MotionBox>
          </GridItem>
        ))}
      </Grid>
    </Container>
  );
}
