import {
  Container,
  Heading,
  Text,
  Box,
  VStack,
  HStack,
  Icon,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import React from "react";
import { BiPhoneCall, BiEnvelope } from "react-icons/bi";
import { BsGithub, BsLinkedin, BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

const contactLinks = [
  {
    label: "Email",
    value: "shrideshpande9175@gmail.com",
    href: "mailto:shrideshpande9175@gmail.com",
    icon: BiEnvelope,
    color: "#ff6b9d",
  },
  {
    label: "Phone",
    value: "+91 9284149182",
    href: "https://wa.me/+919284149182",
    icon: BiPhoneCall,
    color: "#00d4aa",
  },
  {
    label: "GitHub",
    value: "Shrideshpande1",
    href: "https://github.com/Shrideshpande1",
    icon: BsGithub,
    color: "#e2e8f0",
  },
  {
    label: "LinkedIn",
    value: "deshpandeshripad",
    href: "https://www.linkedin.com/in/deshpandeshripad/",
    icon: BsLinkedin,
    color: "#0077b5",
  },
];

export function ContactSection() {
  return (
    <Container maxW={"1100px"} id="contact" paddingTop={"120px"} paddingBottom="80px" px="24px">
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
          GET IN TOUCH
        </Text>
        <Heading
          textAlign="center"
          fontSize={{ lg: "42px", md: "36px", base: "30px" }}
          color="white"
          mb="16px"
        >
          Let's <Text as="span" className="gradient-text">Connect</Text>
        </Heading>
        <Text
          textAlign="center"
          fontSize="16px"
          color="#94a3b8"
          maxW="500px"
          margin="auto"
          mb="48px"
        >
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of something great.
        </Text>
      </MotionBox>

      <Grid
        gridTemplateColumns={{
          lg: "repeat(2, 1fr)",
          md: "repeat(2, 1fr)",
          base: "repeat(1, 1fr)",
        }}
        gap="16px"
        maxW="700px"
        margin="auto"
        mb="48px"
      >
        {contactLinks.map((link, idx) => (
          <GridItem key={link.label}>
            <MotionBox
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={idx + 1}
              variants={fadeInUp}
            >
              <a href={link.href} target="_blank" rel="noreferrer">
                <HStack
                  p="20px"
                  bg="rgba(255, 255, 255, 0.02)"
                  border="1px solid rgba(108, 99, 255, 0.1)"
                  borderRadius="12px"
                  transition="all 0.3s ease"
                  _hover={{
                    borderColor: `${link.color}50`,
                    bg: "rgba(255, 255, 255, 0.04)",
                    transform: "translateY(-2px)",
                  }}
                  cursor="pointer"
                  spacing="16px"
                >
                  <Box
                    p="10px"
                    borderRadius="10px"
                    bg={`${link.color}10`}
                  >
                    <Icon as={link.icon} w="20px" h="20px" color={link.color} />
                  </Box>
                  <VStack align="flex-start" spacing="2px" flex="1">
                    <Text fontSize="12px" color="#64748b" fontWeight="500">
                      {link.label}
                    </Text>
                    <Text fontSize="14px" color="#e2e8f0" fontWeight="500">
                      {link.value}
                    </Text>
                  </VStack>
                  <Icon as={BsArrowUpRight} color="#64748b" w="14px" h="14px" />
                </HStack>
              </a>
            </MotionBox>
          </GridItem>
        ))}
      </Grid>

      {/* Brand statement */}
      <MotionBox
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={5}
        variants={fadeInUp}
      >
        <Box
          textAlign="center"
          p="32px"
          bg="rgba(108, 99, 255, 0.05)"
          border="1px solid rgba(108, 99, 255, 0.1)"
          borderRadius="16px"
          maxW="700px"
          margin="auto"
        >
          <Text
            fontSize={{ lg: "18px", base: "16px" }}
            color="#94a3b8"
            fontStyle="italic"
            lineHeight="1.8"
          >
            "I build real-world products with strong UI, scalable architecture,
            and great user experience."
          </Text>
        </Box>
      </MotionBox>

      {/* Footer */}
      <Box textAlign="center" mt="60px" pt="32px" borderTop="1px solid rgba(108, 99, 255, 0.1)">
        <Text fontSize="14px" color="#475569" fontFamily="'Fira Code', monospace">
          Designed & Built by Shripad Deshpande
        </Text>
      </Box>
    </Container>
  );
}
