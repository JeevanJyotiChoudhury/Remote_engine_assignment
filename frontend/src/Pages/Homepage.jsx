import { Box, Button, Flex, Heading, Image } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();
  return (
    <Flex>
      <Box w="50%">
        <Image src="https://bit.ly/dan-abramov" width="100%" />
      </Box>
      <Box>
        <Heading>Want to login as...</Heading>
        <Box>
          <Button colorScheme='facebook' onClick={()=>navigate("/developer")}>Developer</Button>
        </Box>
        <Box>
          <Button colorScheme='facebook' onClick={()=>navigate("/client")}>Client</Button>
        </Box>
      </Box>
    </Flex>
  );
};

export default Homepage;
