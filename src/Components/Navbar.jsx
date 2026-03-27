import { Link } from "react-scroll";
import {
  Button,
  Container,
  Heading,
  Text,
  Flex,
  Box,
  useMediaQuery,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Navmenu from "./Navmenu";

const MotionFlex = motion(Flex);

export default function Navbar() {
  const [isLargerThan800] = useMediaQuery("(min-width: 1050px)");
  const name = "<Shripad/>";

  return (
    <Container
      maxW={"100%"}
      position="fixed"
      bg="rgba(10, 10, 15, 0.8)"
      backdropFilter={"blur(20px)"}
      borderBottom="1px solid rgba(108, 99, 255, 0.1)"
      padding={"16px 40px"}
      top="0px"
      left="0px"
      zIndex={"100"}
    >
      <MotionFlex
        justifyContent={"space-between"}
        alignItems="center"
        maxW="1200px"
        margin="auto"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Box>
          <Link to="hero" smooth={true} duration={1000} spy={true}>
            <Heading
              size={{ lg: "md", md: "md", sm: "sm" }}
              fontFamily="'Fira Code', monospace"
              className="gradient-text"
              cursor="pointer"
            >
              {name}
            </Heading>
          </Link>
        </Box>
        <Flex
          justifyContent={"space-around"}
          alignItems="center"
          gap="32px"
          fontSize={"15px"}
          fontWeight="500"
        >
          {isLargerThan800 ? (
            <>
              {["about", "skills", "projects", "contact"].map((item) => (
                <Link
                  key={item}
                  to={item}
                  smooth={true}
                  duration={1000}
                  spy={true}
                  hashSpy={true}
                  activeClass="active"
                >
                  <Text
                    cursor="pointer"
                    color="#94a3b8"
                    _hover={{ color: "#6c63ff" }}
                    transition="color 0.3s ease"
                    textTransform="capitalize"
                    letterSpacing="0.5px"
                  >
                    {item}
                  </Text>
                </Link>
              ))}
              <a
                href="https://drive.google.com/uc?export=download&id=1qyWeEke0kKyDgvCAP9Yj1Jeipl_jWpw_"
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1qyWeEke0kKyDgvCAP9Yj1Jeipl_jWpw_/view?usp=share_link"
                  )
                }
              >
                <Button
                  size="sm"
                  bg="transparent"
                  border="1px solid #6c63ff"
                  color="#6c63ff"
                  _hover={{ bg: "#6c63ff", color: "white" }}
                  borderRadius="6px"
                  fontWeight="500"
                  transition="all 0.3s ease"
                >
                  Resume
                </Button>
              </a>
            </>
          ) : (
            <Navmenu />
          )}
        </Flex>
      </MotionFlex>
    </Container>
  );
}
