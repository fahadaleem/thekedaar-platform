import { Box, Container, Heading, Text, Button, Flex } from "@chakra-ui/react";

const About = () => {
  return (
    <Box
      background={"url('./about-bg-1.jpg') rgba(0,0,0, 0.3)"}
      backgroundBlendMode={"multiply"}
      backgroundPosition={"left"}
      backgroundSize={"cover"}
      position={"relative"}
      alignItems={"center"}
      display={"flex"}
      minH={{ base: "350px", md: "250px" }}
      my={"8"}
    >
      {/* Overlay */}
      <Box
        position={"absolute"}
        left={"0"}
        height={"100%"}
        width={{ base: "100%", lg: "70%" }}
        bg={"brand.primary"}
        clipPath={{
          base: "none",
          lg: "polygon(0 0, 100% 0, 68% 100%, 0% 100%)",
        }}
      ></Box>
      <Container zIndex={"1000"}>
        <Flex
          justifyContent={"space-between"}
          direction={{ base: "column", lg: "row" }}
          alignItems={"flex-end"}
        >
          <Box w={{ base: "100%", lg: "50%" }} overflow={"hidden"}>
            <Heading
              fontSize={"md"}
              fontFamily={"'poppins', sans-serif"}
              textAlign={{ base: "center", lg: "left" }}
              color={"brand.secondary-300"}
              fontWeight={"500"}
            >
              You may contact us for construction, real estate & renovation
              work.
            </Heading>
            <Text
              my={{ base: "2", md: "0" }}
              fontSize={{ base: "2xl", lg: "5xl" }}
              fontWeight={"600"}
              textAlign={{ base: "center", lg: "left" }}
            >
              We Are Great Construction Company
            </Text>
          </Box>
          <Box
            w={{ base: "100%", lg: "30%" }}
            overflow={"hidden"}
            textAlign={{ base: "center", lg: "left" }}
          >
            <Button
              borderRadius={"none"}
              my={{ base: "2", md: "0" }}
              bg={{ base: "brand.secondary", lg: "brand.primary" }}
              color={{ base: "brand.primary", lg: "brand.secondary-300" }}
            >
              Book an appointment
            </Button>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default About;
