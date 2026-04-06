import {
  Button,
  Grid,
  Heading,
  GridItem,
  Box,
  Text,
  HStack,
  Icon,
  useDisclosure,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { BiEnvelope } from "react-icons/bi";
import { ResumeModal } from "./ResumeModal";

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);

export function HeroSection() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Shripad_Deshpande_Resume.pdf";
    link.download = "Shripad_Deshpande_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <Grid
        paddingTop={"140px"}
        paddingBottom="80px"
        maxW={"1100px"}
        id="hero"
        margin={"auto"}
        minH="100vh"
        alignItems="center"
        gridTemplateColumns={{
          lg: "repeat(2,1fr)",
          md: "repeat(1,1fr)",
          sm: "repeat(1,1fr)",
        }}
        gap="40px"
        px="24px"
        data-section="hero section"
      >
      <GridItem display={"flex"} textAlign="left" alignItems={"center"}>
        <Box>
          <MotionText
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            fontSize="16px"
            fontFamily="'Fira Code', monospace"
            color="#6c63ff"
            marginBottom="12px"
            letterSpacing="2px"
          >
            Hi, I am
          </MotionText>

          <MotionHeading
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            fontSize={{ lg: "56px", md: "48px", sm: "40px", base: "36px" }}
            color="white"
            marginBottom="8px"
            fontWeight="800"
            lineHeight="1.1"
          >
            Shripad Deshpande
          </MotionHeading>

          <MotionHeading
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            fontSize={{ lg: "36px", md: "28px", sm: "24px", base: "22px" }}
            fontWeight="600"
            marginBottom="24px"
            className="gradient-text"
          >
            Full Stack Developer
          </MotionHeading>

          <MotionText
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            fontSize={{ lg: "18px", md: "16px", base: "15px" }}
            color="#94a3b8"
            lineHeight="1.8"
            marginBottom="32px"
            maxW="500px"
          >
            I build real-world products with strong UI, scalable architecture,
            and great user experience. 3+ years specializing in React.js & MERN stack.
          </MotionText>

          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <HStack spacing="12px" marginBottom="32px">
              <Button
                bg="#6c63ff"
                _hover={{ bg: "#7b73ff", transform: "translateY(-2px)" }}
                color="white"
                height="48px"
                px="32px"
                borderRadius="8px"
                fontSize="15px"
                fontWeight="600"
                transition="all 0.3s ease"
                boxShadow="0 4px 20px rgba(108, 99, 255, 0.3)"
                onClick={handleDownloadResume}
              >
                Download Resume
              </Button>
              <Button
                bg="transparent"
                border="1px solid rgba(108, 99, 255, 0.5)"
                _hover={{
                  bg: "rgba(108, 99, 255, 0.1)",
                  borderColor: "#6c63ff",
                  transform: "translateY(-2px)",
                }}
                color="#6c63ff"
                height="48px"
                px="32px"
                borderRadius="8px"
                fontSize="15px"
                fontWeight="600"
                transition="all 0.3s ease"
                onClick={onOpen}
              >
                View Resume
              </Button>
            </HStack>

            <HStack spacing="16px">
              <a href="https://github.com/Shrideshpande1" target="_blank" rel="noreferrer">
                <Icon
                  as={BsGithub}
                  w="22px"
                  h="22px"
                  color="#64748b"
                  _hover={{ color: "#6c63ff" }}
                  transition="color 0.3s ease"
                  cursor="pointer"
                />
              </a>
              <a href="https://www.linkedin.com/in/deshpandeshripad/" target="_blank" rel="noreferrer">
                <Icon
                  as={BsLinkedin}
                  w="22px"
                  h="22px"
                  color="#64748b"
                  _hover={{ color: "#6c63ff" }}
                  transition="color 0.3s ease"
                  cursor="pointer"
                />
              </a>
              <a href="mailto:shrideshpande9175@gmail.com">
                <Icon
                  as={BiEnvelope}
                  w="24px"
                  h="24px"
                  color="#64748b"
                  _hover={{ color: "#6c63ff" }}
                  transition="color 0.3s ease"
                  cursor="pointer"
                />
              </a>
            </HStack>
          </MotionBox>
        </Box>
      </GridItem>

      <GridItem display="flex" justifyContent="center" alignItems="center">
        <MotionBox
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          position="relative"
          w={{ lg: "400px", md: "350px", base: "280px" }}
          h={{ lg: "400px", md: "350px", base: "280px" }}
        >
          {/* Decorative code block */}
          <Box
            position="absolute"
            top="0"
            left="0"
            right="0"
            bottom="0"
            borderRadius="24px"
            bg="rgba(108, 99, 255, 0.05)"
            border="1px solid rgba(108, 99, 255, 0.15)"
            overflow="hidden"
            p="32px"
            fontFamily="'Fira Code', monospace"
            fontSize={{ lg: "14px", base: "11px" }}
          >
            <Text color="#6c63ff" mb="4px">{"const"} <Text as="span" color="#00d4aa">developer</Text> = {"{"}</Text>
            <Text color="#94a3b8" pl="20px" mb="2px">name: <Text as="span" color="#fbbf24">"Shripad Deshpande"</Text>,</Text>
            <Text color="#94a3b8" pl="20px" mb="2px">role: <Text as="span" color="#fbbf24">"Full Stack Developer"</Text>,</Text>
            <Text color="#94a3b8" pl="20px" mb="2px">experience: <Text as="span" color="#f472b6">"3+ years"</Text>,</Text>
            <Text color="#94a3b8" pl="20px" mb="2px">skills: [</Text>
            <Text color="#fbbf24" pl="40px" mb="2px">"React.js", "Node.js",</Text>
            <Text color="#fbbf24" pl="40px" mb="2px">"MongoDB", "Express",</Text>
            <Text color="#fbbf24" pl="40px" mb="2px">"Tailwind", "Redux"</Text>
            <Text color="#94a3b8" pl="20px" mb="2px">],</Text>
            <Text color="#94a3b8" pl="20px" mb="2px">passion: <Text as="span" color="#fbbf24">"Building great UI's"</Text>,</Text>
            <Text color="#94a3b8" pl="20px" mb="2px">
              <Text as="span" color="#6c63ff">hireable</Text>: <Text as="span" color="#00d4aa">true</Text>
            </Text>
            <Text color="#6c63ff">{"}"}</Text>

            {/* Blinking cursor */}
            <Box
              display="inline-block"
              w="8px"
              h="18px"
              bg="#6c63ff"
              ml="4px"
              animation="blink 1s step-end infinite"
              sx={{
                "@keyframes blink": {
                  "0%, 100%": { opacity: 1 },
                  "50%": { opacity: 0 },
                },
              }}
            />
          </Box>
        </MotionBox>
      </GridItem>
      </Grid>

      <ResumeModal isOpen={isOpen} onClose={onClose} />
    </>
  );
}
