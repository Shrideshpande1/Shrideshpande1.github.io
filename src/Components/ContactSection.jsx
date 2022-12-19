// import styles from "./Styles/ContactSection.module.css";
import { Container, Flex, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { BiPhoneCall, BiEnvelope } from "react-icons/bi";
import { BsGithub, BsLinkedin } from "react-icons/bs";
export function ContactSection() {
  return (
    <Container
      borderTop={"1px solid grey"}
      maxW={"80%"}
      textAlign={"center"}
      id="contact"
      paddingTop={"100px"}
      paddingBottom="100px"
    >
      <Text fontSize={"30px"}>Liked my work? Want to get in touch?</Text>
      <Text fontSize={"30px"}>You can reach out to me at</Text>
      <br />
      <Flex justifyContent="center" gap="20px" width={"100%"} height="80px">
        <a
          href="https://mail.google.com/mail/u/0/?fs=1&to=shrideshpande9175@gmail.com&tf=cm"
          target={"_blank"}
        >
          <Icon
            _hover={{ color: "rgb(234,67,53)", cursor: "pointer" }}
            width={"70%"}
            height="70%"
            as={BiEnvelope}
          />
        </a>
        <a href="https://wa.me/+919284149182" target={"_blank"}>
          <Icon
            _hover={{ color: "rgb(47,230,100)", cursor: "pointer" }}
            width={"70%"}
            height="70%"
            as={BiPhoneCall}
          />
        </a>
        <a href="https://github.com/Shrideshpande1" target={"_blank"}>
          <Icon
            _hover={{ color: "grey", cursor: "pointer" }}
            width={"70%"}
            height="70%"
            as={BsGithub}
          />
        </a>
        <a href="https://www.linkedin.com/in/deshpandeshripad/" target={"_blank"}>
          <Icon
            _hover={{ color: "rgb(9,97,184)", cursor: "pointer" }}
            width={"70%"}
            height="70%"
            as={BsLinkedin}
          />
        </a>
      </Flex>
      <Text>Phone Number: +91 9284149182</Text>
      <Text>Email: shrideshpande9175@gmail</Text>
    </Container>
  );
}