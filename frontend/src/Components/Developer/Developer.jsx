import { Box, Button, ButtonGroup } from "@chakra-ui/react";
import React, { useState } from "react";
import DevLogin from './DevLogin';
import DevSignup from "./DevSignup";

const Developer = () => {
  const [isToggle, setIsToggle] = useState(false);

  const handleToggleLogin = () => {
    setIsToggle(true);
  };
  const handleToggleSignup = () => {
    setIsToggle(false);
  };

  return (
    <Box mt={12}>
      <ButtonGroup size="md">
        <Button
          onClick={handleToggleSignup}
          colorScheme={isToggle ? "gray" : "blue"}
          borderRadius="md"
        >
          Login
        </Button>
        <Button
          onClick={handleToggleLogin}
          colorScheme={!isToggle ? "gray" : "blue"}
          borderRadius="md"
        >
          Signup
        </Button>
      </ButtonGroup>
      {!isToggle ? <DevLogin /> : <DevSignup />}
    </Box>
  );
};

export default Developer;
