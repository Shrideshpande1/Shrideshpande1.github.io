import { Container, Icon, VStack } from "@chakra-ui/react";
import React from "react";
import { BiPhoneCall, BiEnvelope } from "react-icons/bi";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { motion } from "framer-motion";

const MotionContainer = motion(Container);

const Contact = () => {
  const links = [
    {
      href: "mailto:shrideshpande9175@gmail.com",
      icon: BiEnvelope,
      hoverColor: "#ff6b9d",
    },
    {
      href: "https://wa.me/+919284149182",
      icon: BiPhoneCall,
      hoverColor: "#00d4aa",
    },
    {
      href: "https://github.com/Shrideshpande1",
      icon: BsGithub,
      hoverColor: "#e2e8f0",
    },
    {
      href: "https://www.linkedin.com/in/deshpandeshripad/",
      icon: BsLinkedin,
      hoverColor: "#0077b5",
    },
  ];

  return (
    <MotionContainer
      maxW="50px"
      position="fixed"
      right={{ lg: "24px", base: "12px" }}
      top="50%"
      transform="translateY(-50%)"
      zIndex="50"
      display={{ base: "none", md: "block" }}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      <VStack
        spacing="16px"
        p="12px 8px"
        bg="rgba(10, 10, 15, 0.6)"
        backdropFilter="blur(10px)"
        border="1px solid rgba(108, 99, 255, 0.1)"
        borderRadius="12px"
      >
        {links.map(({ href, icon, hoverColor }) => (
          <a key={href} href={href} target="_blank" rel="noreferrer">
            <Icon
              as={icon}
              w="20px"
              h="20px"
              color="#64748b"
              _hover={{ color: hoverColor }}
              transition="all 0.3s ease"
              cursor="pointer"
            />
          </a>
        ))}
      </VStack>
    </MotionContainer>
  );
};

export default Contact;
