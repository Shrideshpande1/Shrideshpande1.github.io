import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Box,
  HStack,
  Button,
} from "@chakra-ui/react";
import { DownloadIcon } from "@chakra-ui/icons";

export function ResumeModal({ isOpen, onClose }) {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Shripad_Deshpande_Resume.pdf";
    link.download = "Shripad_Deshpande_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="full" isCentered>
      <ModalOverlay backdropFilter="blur(10px)" />
      <ModalContent
        bg="#1a1a2e"
        color="white"
        borderRadius="12px"
        h="90vh"
        maxH="90vh"
        w="90vw"
        maxW="90vw"
        display="flex"
        flexDirection="column"
        m="auto"
      >
        <ModalHeader
          borderBottomWidth="1px"
          borderBottomColor="rgba(108, 99, 255, 0.2)"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          py="16px"
          px="20px"
          flexShrink="0"
          gap="12px"
        >
          <Box fontSize="16px" fontWeight="600">Resume - Shripad Deshpande</Box>
          <HStack spacing="8px" alignItems="center">
            <Button
              size="sm"
              bg="transparent"
              border="1px solid #6c63ff"
              color="#6c63ff"
              _hover={{ bg: "rgba(108, 99, 255, 0.1)" }}
              leftIcon={<DownloadIcon />}
              onClick={handleDownload}
              height="32px"
            >
              Download
            </Button>
            <ModalCloseButton
              position="static"
              width="auto"
              height="32px"
              display="flex"
              alignItems="center"
              justifyContent="center"
            />
          </HStack>
        </ModalHeader>

        <ModalBody
          p="20px"
          flex="1"
          overflow="hidden"
          borderRadius="0 0 12px 12px"
          minH="0"
          display="flex"
          justifyContent="center"
          alignItems="flex-start"
        >
          <Box
            as="iframe"
            src="/Shripad_Deshpande_Resume.pdf"
            w="100%"
            h="100%"
            border="none"
            borderRadius="8px"
            scrolling="yes"
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
