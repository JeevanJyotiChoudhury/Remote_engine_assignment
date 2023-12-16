import React, { useState } from "react";
import { Box, Button, FormControl, FormLabel, Input, Link, Text, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; 

const DevLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); 
  const toast = useToast()  

  const handleLogin = async () => {
    try {
      if (!email || !password) {
        toast({
          title: "Please enter both email and password",
          status: "error",
          duration: 3000,
          isClosable: true,
          position: "top-right",
        });
        return;
      }
  
      const response = await axios.post("https://odd-rose-crocodile-toga.cyclic.app/developer/login", {
        email,
        password,
      });
      if (response.data.token) {
        console.log(response, "response");
        toast({
          title: "Login successful",
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "top-right",
        });
        navigate("/onboard")
      } else {
        toast({
          title: "Login failed",
          status: "error",
          duration: 3000,
          isClosable: true,
          position: "top-right",
        });
      }
    } catch (error) {
      console.error("Error logging in:", error.response.data.msg);
    }
  };
  

  return (
    <Box w="40%" m="auto" mt={4}>
       <FormControl isRequired>
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
        Do not have an account? <Link color="blue" onClick={()=>navigate("/devsignup")}>Signup here</Link>
      </Text>
      <Button mt={4} colorScheme="blue" borderRadius="md" w="100%" onClick={handleLogin}>
        Login
      </Button>
    </Box>
  );
}

export default DevLogin