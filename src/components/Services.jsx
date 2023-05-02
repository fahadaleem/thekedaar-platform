import {
  Box,
  Container,
  GridItem,
  Heading,
  SimpleGrid,
  Text,
  Image,
  VStack,
  Flex,
  Button,
  Grid,
} from "@chakra-ui/react";
import { MdConstruction, MdRealEstateAgent } from "react-icons/md";

const Services = () => {
  return (
    <Container py={{ base: "4", md: "8" }}>
      <Box>
        <Heading
          fontWeight={"500"}
          fontFamily={"'poppins', sans-serif"}
          textAlign={"center"}
          fontSize={{ base: "3xl", md: "5xl" }}
          my={"8"}
          color={"brand.secondary"}
        >
          Services
        </Heading>
      </Box>
      <Box>
        <Grid
          maxHeight={{ base: "100%", md: "500px" }}
          templateRows={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
          templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
          gap={"4"}
        >
          <GridItem
            rowSpan={{ base: "1", md: "2" }}
            colSpan={{ base: "3", md: "3", lg: "1" }}
            h={{ base: "200px", md: "300px", lg: "auto" }}
          >
            <Image
              src={"./services-1.jpg"}
              w={"100%"}
              h={"100%"}
              objectFit={"cover"}
              objectPosition={"top"}
            />
          </GridItem>
          <GridItem
            rowSpan={{ base: "2", md: "2", lg: "1" }}
            colSpan={{ base: "3", md: "3", lg: "2" }}
          >
            {/* Construction Service */}
            <Box
              bg="brand.secondary"
              h={"100%"}
              w={"100%"}
              p={"6"}
              color={"gray.100"}
            >
              <Flex gap={"4"} h={"100%"}>
                <Box fontSize={"6xl"}>
                  <MdConstruction />
                </Box>
                <Box>
                  <VStack spacing={"4"} alignItems={"flex-start"}>
                    <Heading
                      fontFamily={"'poppins', sans-serif"}
                      fontSize={"2xl"}
                      fontWeight={"600"}
                    >
                      Construction Services
                    </Heading>
                    <Text>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind.
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind.
                    </Text>
                    <Button
                      borderRadius={"none"}
                      color={"brand.primary"}
                      fontWeight={"500"}
                    >
                      Learn More
                    </Button>
                  </VStack>
                </Box>
              </Flex>
            </Box>
          </GridItem>
          <GridItem
            rowSpan={{ base: "2", md: "2", lg: "1" }}
            colSpan={{ base: "3", md: "3", lg: "1" }}
          >
            {/* Estate Service */}
            <Box
              bg="brand.primary"
              h={"100%"}
              w={"100%"}
              p={"6"}
              color="gray.100"
            >
              <Flex gap={"4"} h={"100%"}>
                <Box fontSize={"6xl"} color={"brand.secondary"}>
                  <MdRealEstateAgent />
                </Box>
                <Box>
                  <VStack spacing={"4"} alignItems={"flex-start"}>
                    <Heading
                      fontFamily={"'poppins', sans-serif"}
                      fontSize={"2xl"}
                      fontWeight={"600"}
                      color={"brand.secondary"}
                    >
                      Estate Service
                    </Heading>
                    <Text color={"brand.secondary"}>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind.
                    </Text>
                    <Button
                      borderRadius={"none"}
                      color={"brand.primary"}
                      fontWeight={"500"}
                      bg={"brand.secondary"}
                    >
                      Learn More
                    </Button>
                  </VStack>
                </Box>
              </Flex>
            </Box>
          </GridItem>
          <GridItem
            rowSpan={{ base: "2", md: "2", lg: "1" }}
            colSpan={{ base: "3", md: "3", lg: "1" }}
          >
            {/* Architecture Service */}
            <Box bg="gray.100" h={"100%"} w={"100%"} p={"6"} color="gray.100">
              <Flex gap={"4"}>
                <Box fontSize={"6xl"} color={"brand.secondary"}>
                  <MdRealEstateAgent />
                </Box>
                <Box>
                  <VStack spacing={"4"} alignItems={"flex-start"}>
                    <Heading
                      fontFamily={"'poppins', sans-serif"}
                      fontSize={"2xl"}
                      fontWeight={"600"}
                      color={"brand.secondary"}
                    >
                      Architecture Service
                    </Heading>
                    <Text color={"brand.secondary"}>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind.
                    </Text>
                    <Button
                      borderRadius={"none"}
                      color={"brand.primary"}
                      fontWeight={"500"}
                      bg={"brand.secondary"}
                    >
                      Learn More
                    </Button>
                  </VStack>
                </Box>
              </Flex>
            </Box>
          </GridItem>
        </Grid>
        <SimpleGrid
          display={"none"}
          columns={{ base: "1", md: "2" }}
          spacing={{ base: "0", md: "4" }}
        >
          <GridItem
            colSpan={{ base: "1", md: "1" }}
            rowSpan={{ base: "1", md: "2" }}
            textAlign={"center"}
          ></GridItem>
          <GridItem colSpan={{ base: 1, md: 1 }} rowSpan={{ base: 1, md: 1 }}>
            {/* Construction Service */}
            <Box
              bg="brand.secondary"
              minH={"250px"}
              w={"100%"}
              p={"6"}
              color={"gray.100"}
            >
              <Flex gap={"4"} bg="red">
                <Box fontSize={"6xl"}>
                  <MdConstruction />
                </Box>
                <Box>
                  <VStack spacing={"4"} alignItems={"flex-start"}>
                    <Heading
                      fontFamily={"'poppins', sans-serif"}
                      fontSize={"2xl"}
                      fontWeight={"600"}
                    >
                      Construction Services
                    </Heading>
                    <Text>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind.
                    </Text>
                    <Button
                      borderRadius={"none"}
                      color={"brand.primary"}
                      fontWeight={"500"}
                    >
                      Learn More
                    </Button>
                  </VStack>
                </Box>
              </Flex>
            </Box>
          </GridItem>
          <GridItem colSpan={{ base: 1, md: 1 }} rowSpan={{ base: 1, md: 1 }}>
            {/* Estate Service */}
            <Box bg="brand.primary" w={"100%"} p={"6"} color="gray.100">
              <Flex gap={"4"}>
                <Box fontSize={"6xl"} color={"brand.secondary"}>
                  <MdRealEstateAgent />
                </Box>
                <Box>
                  <VStack spacing={"4"} alignItems={"flex-start"}>
                    <Heading
                      fontFamily={"'poppins', sans-serif"}
                      fontSize={"2xl"}
                      fontWeight={"600"}
                      color={"brand.secondary"}
                    >
                      Estate Service
                    </Heading>
                    <Text color={"brand.secondary"}>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind.
                    </Text>
                    <Button
                      borderRadius={"none"}
                      color={"brand.primary"}
                      fontWeight={"500"}
                      bg={"brand.secondary"}
                    >
                      Learn More
                    </Button>
                  </VStack>
                </Box>
              </Flex>
            </Box>
          </GridItem>
          <GridItem
            colSpan={{ base: 1, md: 1 }}
            rowSpan={{ base: 1, md: 1 }}
          ></GridItem>
        </SimpleGrid>
      </Box>
    </Container>
  );
};
export default Services;
