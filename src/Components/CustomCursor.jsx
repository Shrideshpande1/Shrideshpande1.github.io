import React, { useState, useEffect } from "react";
import { Box, Text } from "@chakra-ui/react";

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [sectionName, setSectionName] = useState("");
  const [cursorScale, setCursorScale] = useState(1);
  const [scrolledSection, setScrolledSection] = useState("");

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      // Check if hovering over a main section with data-section attribute
      const element = document.elementFromPoint(e.clientX, e.clientY);
      const sectionElement = element?.closest("[data-section]");
      const navbar = element?.closest("[data-navbar]");

      if (sectionElement && !navbar) {
        const section = sectionElement.getAttribute("data-section");
        setSectionName(section);
        setCursorScale(1.5); // Larger when hovering over sections
      } else if (navbar) {
        // In navbar area - empty cursor
        setSectionName("");
        setCursorScale(1);
      } else {
        // Outside sections - empty cursor
        setSectionName("");
        setCursorScale(1);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // Intersection Observer for scroll-based section detection
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px",
      threshold: 0,
    };

    const observerCallback = (entries) => {
      // Find which section is currently in view
      const visibleSection = entries.find((entry) => entry.isIntersecting);

      if (visibleSection) {
        const section = visibleSection.target.getAttribute("data-section");
        if (section) {
          setScrolledSection(section);
        }
      } else {
        // No section in view - reset to empty
        setScrolledSection("");
      }
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // Observe all elements with data-section attribute
    const sections = document.querySelectorAll("[data-section]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <style>{`
        * {
          cursor: none !important;
        }
      `}</style>

      <Box
        position="fixed"
        width="40px"
        height="40px"
        borderRadius="50%"
        border="2px solid rgba(108, 99, 255, 0.6)"
        pointerEvents="none"
        zIndex={9999}
        transform={`translate(calc(${mousePosition.x}px - 50%), calc(${mousePosition.y}px - 50%)) scale(${cursorScale})`}
        transition="all 0.05s ease-out"
        opacity={isVisible ? 1 : 0}
        display="flex"
        alignItems="center"
        justifyContent="center"
        bg={sectionName ? "rgba(108, 99, 255, 0.15)" : "transparent"}
        boxShadow={sectionName ? "0 0 0 1px rgba(108, 99, 255, 0.4)" : "none"}
      >
        {sectionName && (
          <Text
            fontSize="10px"
            fontWeight="600"
            color="#6c63ff"
            textAlign="center"
            whiteSpace="nowrap"
            textTransform="capitalize"
            pointerEvents="none"
          >
            {sectionName}
          </Text>
        )}
      </Box>

      {/* Optional inner dot for more precision */}
      <Box
        position="fixed"
        width="4px"
        height="4px"
        borderRadius="50%"
        bg="rgba(108, 99, 255, 0.8)"
        pointerEvents="none"
        zIndex={10000}
        transform={`translate(calc(${mousePosition.x}px - 50%), calc(${mousePosition.y}px - 50%))`}
        transition="all 0.05s ease-out"
        opacity={isVisible ? 1 : 0}
      />
    </>
  );
}
