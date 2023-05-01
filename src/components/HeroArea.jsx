import { Box, Container, Heading, Text } from "@chakra-ui/react";

const HeroArea = () => {
  return (
    <Box
      background={"url('./header-bg-1.jpg') rgba(0,0,0, 0.3)"}
      backgroundBlendMode={"multiply"}
      backgroundAttachment={"fixed"}
      backgroundPosition={"center"}
      justifyContent={"center"}
      backgroundSize={"cover"}
      position={"relative"}
      alignItems={"center"}
      display={"flex"}
      minH={{ base: "450px", md: "650px" }}
    >
      <Container>
        <Box
          h={{ base: "200px", md: "200px", lg: "300px" }}
          w={{ base: "300px", md: "400px", lg: "600px" }}
          transform={"translate(-50%,-50%)"}
          border={"15px solid"}
          position={"absolute"}
          borderColor={"white"}
          opacity={"0.1"}
          left={"50%"}
          mx={"auto"}
          top={"50%"}
          p={"8px"}
        ></Box>
        <Heading
          color="white"
          textAlign={"center"}
          fontSize={{ base: "3xl", md: "4xl", lg: "6xl" }}
        >
          WE WILL BE{" "}
          <Text color="brand.primary" display={"inline-block"}>
            HAPPY
          </Text>{" "}
          TO <Text display={{ base: "none", md: "block" }}></Text>
          TAKE CARE OF YOUR WORK
        </Heading>
      </Container>
    </Box>
  );
};

export default HeroArea;
