import {
  Container,
  Heading,
  Text,
  Box,
  Grid,
  GridItem,
  Icon,
  HStack,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";
import {
  BsLightningCharge,
  BsLayoutWtf,
  BsBarChartLine,
  BsBriefcase,
  BsCodeSlash,
  BsCheckCircle,
} from "react-icons/bs";
import { MdOutlineTravelExplore, MdTwoWheeler, MdDevices } from "react-icons/md";

const MotionBox = motion(Box);

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

const strengths = [
  {
    icon: BsLayoutWtf,
    title: "UI/UX Design Sense",
    desc: "Intuitive, clean interfaces that users love",
    color: "#6c63ff",
  },
  {
    icon: BsBarChartLine,
    title: "Dashboard Development",
    desc: "Data-rich analytics & visualization dashboards",
    color: "#00d4aa",
  },
  {
    icon: BsCodeSlash,
    title: "Scalable Architecture",
    desc: "Reusable components & clean code patterns",
    color: "#ff6b9d",
  },
  {
    icon: BsBriefcase,
    title: "Product Experience",
    desc: "5+ real-world products shipped & deployed",
    color: "#fbbf24",
  },
  {
    icon: BsLightningCharge,
    title: "Performance Optimized",
    desc: "Fast, responsive & mobile-first approach",
    color: "#06b6d4",
  },
  {
    icon: BsCheckCircle,
    title: "Clean Code",
    desc: "Maintainable, well-structured & documented",
    color: "#a78bfa",
  },
];

const interests = [
  { icon: MdOutlineTravelExplore, label: "Travelling", color: "#00d4aa" },
  { icon: MdTwoWheeler, label: "Riding Bikes", color: "#fbbf24" },
  { icon: MdDevices, label: "Exploring New Tech", color: "#6c63ff" },
];

const GithubStats = () => {
  return (
    <Container maxW={"1100px"} paddingTop="120px" paddingBottom="40px" px="24px">
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
          WHY ME
        </Text>
        <Heading
          textAlign={"center"}
          fontSize={{ lg: "42px", md: "36px", base: "30px" }}
          color="white"
          mb="48px"
        >
          Core <Text as="span" className="gradient-text">Strengths</Text>
        </Heading>
      </MotionBox>

      <Grid
        templateColumns={{
          lg: "repeat(3, 1fr)",
          md: "repeat(2, 1fr)",
          base: "repeat(1, 1fr)",
        }}
        gap="20px"
        mb="60px"
      >
        {strengths.map((item, idx) => (
          <GridItem key={item.title}>
            <MotionBox
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={idx + 1}
              variants={fadeInUp}
            >
              <Box
                p="28px"
                bg="rgba(255, 255, 255, 0.02)"
                border="1px solid rgba(108, 99, 255, 0.1)"
                borderRadius="14px"
                transition="all 0.3s ease"
                _hover={{
                  borderColor: `${item.color}40`,
                  bg: "rgba(255, 255, 255, 0.04)",
                  transform: "translateY(-4px)",
                  boxShadow: `0 8px 30px ${item.color}15`,
                }}
                h="100%"
              >
                <Box
                  w="44px"
                  h="44px"
                  borderRadius="10px"
                  bg={`${item.color}12`}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  mb="16px"
                >
                  <Icon as={item.icon} w="22px" h="22px" color={item.color} />
                </Box>
                <Text
                  fontSize="16px"
                  fontWeight="600"
                  color="white"
                  mb="6px"
                >
                  {item.title}
                </Text>
                <Text fontSize="14px" color="#94a3b8" lineHeight="1.6">
                  {item.desc}
                </Text>
              </Box>
            </MotionBox>
          </GridItem>
        ))}
      </Grid>

      {/* Interests */}
      <MotionBox
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={7}
        variants={fadeInUp}
      >
        <Box
          p="28px"
          bg="rgba(255, 255, 255, 0.02)"
          border="1px solid rgba(108, 99, 255, 0.1)"
          borderRadius="14px"
          maxW="600px"
          margin="auto"
        >
          <Text
            fontSize="12px"
            fontFamily="'Fira Code', monospace"
            color="#64748b"
            letterSpacing="2px"
            mb="16px"
            textTransform="uppercase"
            textAlign="center"
          >
            Beyond Code
          </Text>
          <HStack justifyContent="center" spacing={{ lg: "40px", base: "24px" }} flexWrap="wrap">
            {interests.map((item) => (
              <VStack key={item.label} spacing="8px">
                <Icon as={item.icon} w="28px" h="28px" color={item.color} />
                <Text fontSize="13px" color="#94a3b8" fontWeight="500">
                  {item.label}
                </Text>
              </VStack>
            ))}
          </HStack>
        </Box>
      </MotionBox>
    </Container>
  );
};

export default GithubStats;
