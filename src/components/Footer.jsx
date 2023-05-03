import {
  Box,
  SimpleGrid,
  Container,
  GridItem,
  Image,
  Text,
  HStack,
  Link,
  Heading,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
} from "react-icons/fa";
import { BsArrowRightShort, BsFillTelephoneFill } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <Box bg={"brand.secondary"} p={"4"}>
        <Container py={"8"} color={"white"}>
          <SimpleGrid columns={"3"} spacing={"6"} alignItems={"flex-start"}>
            <GridItem colSpan={{ base: "3", lg: "1" }}>
              <Image src="./logo.png" maxW={"160px"} ratio={"1"} my={"2"} />
              <Text color={"white"} fontSize={"sm"}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </Text>
              <Box my={"4"}>
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
            </GridItem>
            <GridItem colSpan={{ base: "3", lg: "1" }}>
              <Heading
                fontFamily={"'poppins', sans-serif"}
                fontWeight={"600"}
                fontSize={"2xl"}
                py={1}
              >
                Quick Links
              </Heading>
              <List spacing={"2"} my={"2"} fontSize={"sm"}>
                <ListItem>
                  <Link to="#">Real Estate</Link>
                </ListItem>
                <ListItem>
                  <Link to="#">Architectural Service</Link>
                </ListItem>
                <ListItem>
                  <Link to="#">Construction Service</Link>
                </ListItem>
                <ListItem>
                  <Link to="#">About Thekedaar</Link>
                </ListItem>
                <ListItem>
                  <Link to="#">Contact Us</Link>
                </ListItem>
              </List>
            </GridItem>
            <GridItem colSpan={{ base: "3", lg: "1" }}>
              <Heading
                fontFamily={"'poppins', sans-serif"}
                color={"brand.primary"}
                fontWeight={"600"}
                fontSize={"2xl"}
                py={1}
              >
                Contact Details
              </Heading>
              <List fontSize={"sm"} my={"2"} spacing={"2"}>
                <ListItem color={"gray.300"}>
                  291 South 21th Street, <br />
                  Suite 721 New York NY 10016
                </ListItem>
                <ListItem>
                  <ListIcon
                    as={BsFillTelephoneFill}
                    position={"relative"}
                    top={"-3px"}
                  />
                  +92 3162036048
                </ListItem>
                <ListItem>
                  <ListIcon
                    as={FaEnvelope}
                    position={"relative"}
                    top={"-3px"}
                  />
                  support@thekedaar.pk
                </ListItem>
              </List>
            </GridItem>
          </SimpleGrid>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
