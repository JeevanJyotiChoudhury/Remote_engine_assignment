import React, { useState } from "react";
import { Box, Button, FormControl, FormLabel, Input, Link, Text, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const DevSignup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const toast = useToast();

  const handleSignup = async () => {
    try {
      if (!name || !email || !password) {
        toast({
          title: "Please fill in all fields",
          status: "error",
          duration: 3000,
          isClosable: true,
          position: "top-right",
        });
        return;
      }
      const response = await axios.post("https://odd-rose-crocodile-toga.cyclic.app/developer/register", {
        name,
        email,
        password,
      });
      toast({
        title: response.data.msg,
        status: 'success',
        duration: 3000,
        isClosable: true,
        position: 'top-right',
      });
      navigate("/devlogin");
    } catch (error) {
      toast({
        title: error.response.data.error,
        description: "Or you may register with a different email ID",
        status: 'error',
        duration: 3000,
        isClosable: true,
        position: 'top-right',
      });

      console.error("Error signing up:", error.response.data.error);
    }
  };

  return (
    <Box w="40%" m="auto" mt={4}>
      <FormControl isRequired>
        <FormLabel>Name</FormLabel>
        <Input
          placeholder="Enter Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </FormControl>
      <FormControl isRequired mt={2}>
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      <FormControl isRequired mt={2}>
        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormControl>
      <Text mt={2}>
        Already signed up? <Link color="blue" onClick={() => navigate("/devlogin")}>Login here</Link>
      </Text>
      <Button mt={4} colorScheme="blue" borderRadius="md" w="100%" onClick={handleSignup}>
        Signup
      </Button>
    </Box>
  );
};

export default DevSignup