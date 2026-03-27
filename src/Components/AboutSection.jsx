import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
  VStack,
  HStack,
  Icon,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { BsBriefcase, BsGeoAlt, BsEnvelope } from "react-icons/bs";

const MotionBox = motion(Box);

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

export function AboutSection() {
  return (
    <Container maxW={"1100px"} id="about" paddingTop={"120px"} px="24px">
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
          WHO I AM
        </Text>
        <Heading
          textAlign={"center"}
          fontSize={{ lg: "42px", md: "36px", base: "30px" }}
          color="white"
          mb="60px"
        >
          About <Text as="span" className="gradient-text">Me</Text>
        </Heading>
      </MotionBox>

      <Grid
        margin={"auto"}
        gridTemplateColumns={{
          lg: "repeat(2,1fr)",
          md: "repeat(1,1fr)",
          sm: "repeat(1,1fr)",
        }}
        gap={"60px"}
        alignItems="center"
      >
        <GridItem>
          <MotionBox
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={fadeInUp}
          >
            <Box
              position="relative"
              maxW="350px"
              margin="auto"
            >
              <Box
                position="absolute"
                top="-8px"
                left="-8px"
                right="8px"
                bottom="8px"
                border="2px solid #6c63ff"
                borderRadius="16px"
                opacity="0.3"
              />
              <Image
                position="relative"
                zIndex="1"
                borderRadius={"16px"}
                src="/profile.jpg"
                width="100%"
                objectFit="cover"
                filter="grayscale(20%)"
                _hover={{ filter: "grayscale(0%)" }}
                transition="filter 0.5s ease"
              />
            </Box>
          </MotionBox>
        </GridItem>

        <GridItem>
          <VStack align="flex-start" spacing="20px">
            <MotionBox
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
              variants={fadeInUp}
            >
              <Heading
                fontSize={{ lg: "24px", md: "22px", base: "20px" }}
                color="white"
                mb="8px"
              >
                Full Stack Developer at{" "}
                <Text as="span" color="#6c63ff">SkyOvi</Text>
              </Heading>
              <Text
                fontSize={{ lg: "16px", base: "15px" }}
                color="#94a3b8"
                lineHeight="1.8"
              >
                I am a Full Stack Developer with 3+ years of experience specializing
                in React.js, MERN stack, and modern UI/UX development. I have worked
                on real-world scalable platforms including call center systems,
                AI-based interview platforms, and project management tools.
              </Text>
            </MotionBox>

            <MotionBox
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={3}
              variants={fadeInUp}
            >
              <Text
                fontSize={{ lg: "16px", base: "15px" }}
                color="#94a3b8"
                lineHeight="1.8"
              >
                My core strength lies in building clean, responsive, and
                performance-optimized dashboards and user interfaces. I enjoy
                solving real problems through code and continuously improving
                user experience.
              </Text>
            </MotionBox>

            <MotionBox
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={4}
              variants={fadeInUp}
              w="100%"
            >
              <VStack
                align="flex-start"
                spacing="12px"
                mt="12px"
                p="20px"
                bg="rgba(108, 99, 255, 0.05)"
                border="1px solid rgba(108, 99, 255, 0.1)"
                borderRadius="12px"
              >
                <HStack spacing="12px">
                  <Icon as={BsBriefcase} color="#6c63ff" w="18px" h="18px" />
                  <Text color="#e2e8f0" fontSize="15px">
                    Full Stack Developer at SkyOvi
                  </Text>
                </HStack>
                <HStack spacing="12px">
                  <Icon as={BsGeoAlt} color="#00d4aa" w="18px" h="18px" />
                  <Text color="#e2e8f0" fontSize="15px">
                    Latur, Maharashtra
                  </Text>
                </HStack>
                <HStack spacing="12px">
                  <Icon as={BsEnvelope} color="#ff6b9d" w="18px" h="18px" />
                  <Text color="#e2e8f0" fontSize="15px">
                    shrideshpande9175@gmail.com
                  </Text>
                </HStack>
              </VStack>
            </MotionBox>
          </VStack>
        </GridItem>
      </Grid>
    </Container>
  );
}
