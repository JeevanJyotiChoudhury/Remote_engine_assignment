import { PhoneIcon } from "@chakra-ui/icons";
import {
  Box,
  Input,
  FormControl,
  FormLabel,
  Button,
  Select,
  Heading,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import React from "react";

const Devonboarding = () => {
  return (
    <Box w="40%" m="auto" mt={4}>
      <FormControl isRequired>
        <FormLabel>First name</FormLabel>
        <Input placeholder="First name" />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Last name</FormLabel>
        <Input placeholder="First name" />
      </FormControl>
      <FormControl>
        <FormLabel>Phone Number</FormLabel>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <PhoneIcon color="gray.300" />
          </InputLeftElement>
          <Input type="tel" placeholder="Phone number" />
        </InputGroup>
      </FormControl>

      <FormControl isRequired>
        <FormLabel>Email</FormLabel>
        <Input placeholder="First name" />
      </FormControl>
      <FormControl>
        <FormLabel>Skills</FormLabel>
        <Select placeholder="Select country">
          <option>United Arab Emirates</option>
          <option>Nigeria</option>
        </Select>
      </FormControl>
      <Heading as="h5" size="lg">
        Professional Experience
      </Heading>
      <FormControl isRequired>
        <FormLabel>Company Name</FormLabel>
        <Input variant="flushed" placeholder="Flushed" />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Tech Stack</FormLabel>
        <Input variant="flushed" placeholder="Flushed" />
          </FormControl>
          <FormControl>
        <FormLabel>Skills</FormLabel>
        <Select placeholder="Select country">
          <option>United Arab Emirates</option>
          <option>Nigeria</option>
        </Select>
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Time Period</FormLabel>
        <Input variant="flushed" placeholder="Flushed" />
      </FormControl>
      <Heading as="h5" size="lg">
        Educational Experience
      </Heading>
      <FormControl isRequired>
        <FormLabel>Degree Name</FormLabel>
        <Input variant="flushed" placeholder="Flushed" />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>School Name</FormLabel>
        <Input variant="flushed" placeholder="Flushed" />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Time Period</FormLabel>
        <Input variant="flushed" placeholder="Flushed" />
      </FormControl>
      <Button mt={4} colorScheme="blue" borderRadius="md" w="100%">
        Submit
      </Button>
    </Box>
  );
};

export default Devonboarding;
