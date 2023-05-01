import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  HStack,
  Heading,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Divider,
  MenuList,
  MenuItem,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Container,
  Image,
} from "@chakra-ui/react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { MdOutlineMenu } from "react-icons/md";
import { appConstantService } from "../services/appConstantService";

const MobileNav = () => {
  return (
    <Stack
      p={4}
      w={"100%"}
      left={"0"}
      bg={"white"}
      top={{ base: "145px" }}
      spacing={"4"}
      boxShadow={"md"}
      position={"absolute"}
      borderTop={"2px solid"}
      borderColor={"brand.primary"}
    >
      <Link>Home</Link>
      <Divider />
      <Link>Rent</Link>
      <Divider />
      <Link>Sell</Link>
      <Divider />
      <Link>Construction Material</Link>
      <Divider />
      <Link>Contact Us</Link>
    </Stack>
  );
};

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box bg={"brand.secondary"}>
      <Container>
        {/* Secondary Navbar */}
        <Box>
          <HStack py={4} fontSize={"sm"} justifyContent={"space-between"}>
            <Box display={"flex"}>
              <Text fontWeight={"600"} color={"brand.primary"}>
                Free Call:
              </Text>
              <Text color={"white"} ml={"2"}>
                +92 3162036048
              </Text>
            </Box>
            <Box display={"flex"}>
              <HStack>
                <Box display={{ base: "none", md: "flex" }}>
                  <Text fontWeight={"600"} color={"brand.primary"}>
                    Email Address:
                  </Text>
                  <Text color={"white"} ml={"2"}>
                    support@thekedaar.pk
                  </Text>
                </Box>
                <Box>
                  <HStack>
                    <Link
                      color={"white"}
                      bg={"brand.secondary-300"}
                      p={"2"}
                      fontSize={"lg"}
                    >
                      <FaFacebookF></FaFacebookF>
                    </Link>
                    <Link
                      color={"white"}
                      bg={"brand.secondary-300"}
                      p={"2"}
                      fontSize={"lg"}
                    >
                      <FaInstagram></FaInstagram>
                    </Link>
                    <Link
                      color={"white"}
                      bg={"brand.secondary-300"}
                      p={"2"}
                      fontSize={"lg"}
                    >
                      <FaYoutube></FaYoutube>
                    </Link>
                  </HStack>
                </Box>
              </HStack>
            </Box>
          </HStack>
        </Box>
        <Divider maxW="none" position={"absolute"} left={"0"} />
        {/* Primary Navbar */}
        <Box>
          <HStack
            borderTopColor={"brand.secondary-300"}
            justifyContent={"space-between"}
            alignItems={"center"}
            minHeight={"100px"}
          >
            <Box>
              <Image src="./logo.png" maxW={"160px"} ratio={1} />
            </Box>
            <Box display={{ base: "none", md: "block" }}>
              <HStack spacing={"1"} height={"80px"}>
                {appConstantService.navItems.map((navItem) => {
                  return (
                    <Link
                      color={"gray.100"}
                      p={{ base: "2", md: "2", lg: "4" }}
                      key={navItem.name}
                    >
                      {navItem.text}
                    </Link>
                  );
                })}
              </HStack>
            </Box>
            <Box display={{ base: "flex", md: "none" }}>
              <IconButton
                bg={"none"}
                outline={"none"}
                onClick={onToggle}
                border={"2px solid"}
                color={"brand.primary"}
                icon={<MdOutlineMenu />}
                _focus={{ bg: "none" }}
              ></IconButton>
              <Collapse in={isOpen} animateOpacity>
                <MobileNav />
              </Collapse>
            </Box>
          </HStack>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
