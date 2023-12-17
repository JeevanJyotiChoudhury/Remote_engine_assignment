import { Box, Button, Flex, Heading, Image } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();
  return (
    <Box>
      {" "}
      <Heading>Want to login as...</Heading>
      <Flex w="40%" mx="auto" justifyContent="space-between" mt="50px">
        <Box>
          <Button colorScheme="facebook" onClick={() => navigate("/developer")}>
            Developer
          </Button>
        </Box>
        <Box>
          <Button colorScheme="facebook" onClick={() => navigate("/client")}>
            Client
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default Homepage;
