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

      const element = document.elementFromPoint(e.clientX, e.clientY);
      const sectionElement = element?.closest("[data-section]");
      const navbar = element?.closest("[data-navbar]");

      const projectCardLink = element?.closest("a[target='_blank']");
      const isInProjectsSection = sectionElement?.getAttribute("data-section") === "projects";
      const isProjectCard = projectCardLink && isInProjectsSection;

      if (isProjectCard) {
        setSectionName("open");
        setCursorScale(1.8);
        setIsVisible(true);
      } else if (sectionElement && !navbar) {
        setSectionName("");
        setCursorScale(1.3);
        setIsVisible(true);
      } else {
        setIsVisible(false);
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

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px",
      threshold: 0,
    };

    const observerCallback = (entries) => {
      const visibleSection = entries.find((entry) => entry.isIntersecting);

      if (visibleSection) {
        const section = visibleSection.target.getAttribute("data-section");
        if (section) {
          setScrolledSection(section);
        }
      } else {
        setScrolledSection("");
      }
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

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

        @keyframes orbitRing {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 12px rgba(108, 99, 255, 0.5), inset 0 0 8px rgba(108, 99, 255, 0.15);
          }
          50% {
            box-shadow: 0 0 18px rgba(108, 99, 255, 0.7), inset 0 0 12px rgba(108, 99, 255, 0.25);
          }
        }

        @keyframes float-orbit {
          from {
            transform: rotate(0deg) translateX(20px) rotate(0deg);
          }
          to {
            transform: rotate(360deg) translateX(20px) rotate(-360deg);
          }
        }
      `}</style>

      {/* Rotating outer ring - slim */}
      <Box
        position="fixed"
        width="68px"
        height="68px"
        borderRadius="50%"
        border="1px solid rgba(108, 99, 255, 0.45)"
        pointerEvents="none"
        zIndex={9997}
        transform={`translate(calc(${mousePosition.x}px - 50%), calc(${mousePosition.y}px - 50%)) scale(${cursorScale === 1.8 ? 1 : 0})`}
        transition="all 0.05s ease-out"
        opacity={isVisible && sectionName === "open" ? 0.9 : 0}
        sx={{
          animation: sectionName === "open" ? "orbitRing 4s linear infinite" : "none",
        }}
      />

      {/* Floating orbit dots - smaller */}
      <Box
        position="fixed"
        width="68px"
        height="68px"
        pointerEvents="none"
        zIndex={9998}
        transform={`translate(calc(${mousePosition.x}px - 50%), calc(${mousePosition.y}px - 50%)) scale(${cursorScale === 1.8 ? 1 : 0})`}
        transition="all 0.05s ease-out"
        opacity={isVisible && sectionName === "open" ? 0.9 : 0}
      >
        {sectionName === "open" && (
          <>
            {[0, 120, 240].map((angle) => (
              <Box
                key={angle}
                position="absolute"
                width="3px"
                height="3px"
                borderRadius="50%"
                bg="rgba(108, 99, 255, 0.7)"
                top="50%"
                left="50%"
                sx={{
                  animation: "float-orbit 3s linear infinite",
                  animationDelay: `${angle / 120}s`,
                  transformOrigin: "0 0",
                  marginTop: "-1.5px",
                  marginLeft: "-1.5px",
                }}
              />
            ))}
          </>
        )}
      </Box>

      {/* Main circular cursor with text */}
      <Box
        position="fixed"
        width="36px"
        height="36px"
        borderRadius="50%"
        border="1.5px solid rgba(108, 99, 255, 0.75)"
        pointerEvents="none"
        zIndex={9999}
        transform={`translate(calc(${mousePosition.x}px - 50%), calc(${mousePosition.y}px - 50%)) scale(${cursorScale})`}
        transition="all 0.05s ease-out"
        opacity={isVisible ? 1 : 0}
        display="flex"
        alignItems="center"
        justifyContent="center"
        bg={sectionName === "open" ? "rgba(108, 99, 255, 0.12)" : "transparent"}
        sx={{
          animation: sectionName === "open" ? "pulse-glow 2s ease-in-out infinite" : "none",
        }}
      >
        {sectionName === "open" && (
          <Text
            fontSize="7px"
            fontWeight="800"
            color="#6c63ff"
            // lineHeight="1"
            letterSpacing="0.5px"
            // textTransform="uppercase"
          >
            Open
          </Text>
        )}
        {sectionName && sectionName !== "open" && (
          <Text
            fontSize="8px"
            fontWeight="700"
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

      {/* Inner dot */}
      <Box
        position="fixed"
        width="3px"
        height="3px"
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
