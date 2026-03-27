import { Icon, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-scroll";
import { AiOutlineMenu } from "react-icons/ai";

const Navmenu = () => {
  return (
    <Menu>
      <MenuButton>
        <Icon as={AiOutlineMenu} width="24px" h={"24px"} color="#6c63ff" />
      </MenuButton>
      <MenuList
        bg="#12121a"
        border="1px solid rgba(108, 99, 255, 0.2)"
        borderRadius="12px"
        py="8px"
      >
        {["about", "skills", "projects", "contact"].map((item) => (
          <MenuItem
            key={item}
            bg="transparent"
            color="#94a3b8"
            _hover={{ bg: "rgba(108, 99, 255, 0.1)", color: "#6c63ff" }}
            textTransform="capitalize"
          >
            <Link to={item} smooth={true} duration={1000} spy={true} hashSpy={true}>
              {item}
            </Link>
          </MenuItem>
        ))}
        <MenuItem
          bg="transparent"
          color="#94a3b8"
          _hover={{ bg: "rgba(108, 99, 255, 0.1)", color: "#6c63ff" }}
        >
          <a href="https://drive.google.com/uc?export=download&id=1qyWeEke0kKyDgvCAP9Yj1Jeipl_jWpw_">
            Resume
          </a>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default Navmenu;
