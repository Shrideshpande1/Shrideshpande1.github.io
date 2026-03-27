import { Box, Icon, Text, VStack } from "@chakra-ui/react";

export function SkillCard({ skill, icon, color }) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      p="24px 16px"
      bg="rgba(255, 255, 255, 0.02)"
      border="1px solid rgba(108, 99, 255, 0.1)"
      borderRadius="12px"
      cursor="pointer"
      transition="all 0.3s ease"
      _hover={{
        bg: "rgba(108, 99, 255, 0.08)",
        borderColor: color,
        transform: "translateY(-4px)",
        boxShadow: `0 8px 30px ${color}20`,
      }}
    >
      <VStack spacing="12px">
        <Icon
          as={icon}
          w="36px"
          h="36px"
          color="#64748b"
          transition="color 0.3s ease"
          sx={{
            "div:hover > div > &": {
              color: color,
            },
          }}
          _groupHover={{ color: color }}
        />
        <Text
          fontSize="13px"
          fontWeight="500"
          color="#94a3b8"
          textAlign="center"
        >
          {skill}
        </Text>
      </VStack>
    </Box>
  );
}
