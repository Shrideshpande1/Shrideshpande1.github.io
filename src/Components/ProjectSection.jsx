import { ProjectCard } from "./ProjectCard";
// import styles from "./Styles/ProjectsSection.module.css";
import styles from "../Styles/ProjectsSection.module.css"
import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiRedux,
  SiChakraui,
} from "react-icons/si";
import { Container, Grid, GridItem, Heading } from "@chakra-ui/react";
const projects = [
  {
    name: "Greekbuying Clone",
    img: "/project1.png",
    link: "https://6371ebf512789d75d605c3fe--extraordinary-lokum-e2535c.netlify.app/",
    git: "https://github.com/Shrideshpande1/-obscene-clam-8417/tree/main/brand_and_i",
    about:
      "Greekbuying is e-commerce website used for buying electronic devices in India. This was a Individual Project ",
     
    stacks: [
      <SiReact className={styles.stackIcon} />,
      <SiRedux className={styles.stackIcon} />,
      <SiChakraui className={styles.stackIcon} />,
      <SiJavascript className={styles.stackIcon} />,
      <SiCss3 className={styles.stackIcon} />,
    ],
  },
  {
    name: "Tripvillas clone",
    img: "/project2.png",
    link: "https://acceptable-popcorn.netlify.app/",
    git: "https://github.com/soumitra-dey/Tripvillas-Clone",
    about:
      " Tripvillas is e-commerce website used for Booking hotel rooms in India. This was a Team Project",
    stacks: [
      <SiJavascript className={styles.stackIcon} />,
      <SiHtml5 className={styles.stackIcon} />,
      <SiCss3 className={styles.stackIcon} />,
    ],
  },

  {
    name: "Beauty Bebo Clone",
    img: "/project3.png",
    link: "https://venerable-sprinkles-c615f7.netlify.app/",
    git: "https://github.com/Shrideshpande1/main-destruction-7732/tree/main/projectunit2",
    about:
      "Beauty Bebo is a E-commerce website which sells beauty and cosmetic products",
    stacks: [
      <SiJavascript className={styles.stackIcon} />,
      <SiHtml5 className={styles.stackIcon} />,
      <SiCss3 className={styles.stackIcon} />,
    ],
  },
];
export function ProjectsSection() {
  return (
    <Container maxW={"80%"} paddingTop={"180px"} id="projects">
      <Heading textAlign={"center"} marginBottom='100px' size={"2xl"} color="rgb(14, 36, 49)">
        Projects
      </Heading>
      <Grid gap={"60px"}>
        {projects.map((project) => (
          <GridItem>
            <ProjectCard {...project} />
          </GridItem>
        ))}
      </Grid>
    </Container>
  );
}