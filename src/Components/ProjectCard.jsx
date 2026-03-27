import {
  Box,
  Heading,
  Text,
  HStack,
  Badge,
  List,
  ListItem,
  ListIcon,
  Flex,
} from "@chakra-ui/react";
import { BsArrowRight, BsArrowUpRight } from "react-icons/bs";
import { Icon } from "@chakra-ui/react";

export function ProjectCard({ name, subtitle, about, role, stacks, highlights, color, link }) {
  return (
    <Box
      p={{ lg: "32px", base: "24px" }}
      bg="rgba(255, 255, 255, 0.02)"
      border="1px solid rgba(108, 99, 255, 0.1)"
      borderRadius="16px"
      transition="all 0.3s ease"
      _hover={{
        borderColor: `${color}50`,
        bg: "rgba(255, 255, 255, 0.03)",
        transform: "translateY(-2px)",
        boxShadow: `0 8px 40px ${color}10`,
      }}
      position="relative"
      overflow="hidden"
    >
      {/* Accent line */}
      <Box
        position="absolute"
        top="0"
        left="0"
        w="4px"
        h="100%"
        bg={color}
        borderRadius="0 4px 4px 0"
      />

      <Flex
        direction={{ lg: "row", base: "column" }}
        gap={{ lg: "40px", base: "20px" }}
      >
        {/* Left side - project info */}
        <Box flex="1" minW="0">
          <HStack mb="4px" spacing="12px" alignItems="baseline" flexWrap="wrap">
            <Heading
              fontSize={{ lg: "24px", base: "20px" }}
              color="white"
              fontWeight="700"
            >
              {name}
            </Heading>
            <Text
              fontSize="14px"
              color={color}
              fontFamily="'Fira Code', monospace"
            >
              {subtitle}
            </Text>
            {link && (
              <a href={link} target="_blank" rel="noreferrer">
                <HStack
                  spacing="6px"
                  color="#64748b"
                  _hover={{ color: color }}
                  transition="color 0.3s ease"
                  cursor="pointer"
                >
                  <Text fontSize="13px" fontWeight="500">
                    Live
                  </Text>
                  <Icon as={BsArrowUpRight} w="12px" h="12px" />
                </HStack>
              </a>
            )}
          </HStack>

          <Badge
            bg={`${color}15`}
            color={color}
            border={`1px solid ${color}30`}
            borderRadius="6px"
            px="10px"
            py="2px"
            fontSize="12px"
            fontWeight="500"
            mb="16px"
          >
            {role}
          </Badge>

          <Text
            fontSize="15px"
            color="#94a3b8"
            lineHeight="1.7"
            mb="16px"
          >
            {about}
          </Text>

          <HStack flexWrap="wrap" gap="8px" mb="4px">
            {stacks.map((stack) => (
              <Badge
                key={stack}
                bg="rgba(108, 99, 255, 0.08)"
                color="#94a3b8"
                border="1px solid rgba(108, 99, 255, 0.15)"
                borderRadius="6px"
                px="10px"
                py="4px"
                fontSize="12px"
                fontWeight="400"
                fontFamily="'Fira Code', monospace"
              >
                {stack}
              </Badge>
            ))}
          </HStack>
        </Box>

        {/* Right side - highlights */}
        <Box minW={{ lg: "280px", base: "auto" }}>
          <Text
            fontSize="12px"
            fontFamily="'Fira Code', monospace"
            color="#64748b"
            letterSpacing="1px"
            mb="12px"
            textTransform="uppercase"
          >
            Key Work
          </Text>
          <List spacing="10px">
            {highlights.map((item, idx) => (
              <ListItem
                key={idx}
                display="flex"
                alignItems="flex-start"
                fontSize="14px"
                color="#cbd5e1"
              >
                <ListIcon
                  as={BsArrowRight}
                  color={color}
                  mt="4px"
                  mr="8px"
                />
                {item}
              </ListItem>
            ))}
          </List>
        </Box>
      </Flex>
    </Box>
  );
}
