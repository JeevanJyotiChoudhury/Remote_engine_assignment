import { Box, Button, ButtonGroup } from "@chakra-ui/react";
import React, { useState } from "react";
import ClientLogin from "./ClientLogin";
import ClientSignup from "./ClientSignup";

const Client = () => {
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
      {!isToggle ? <ClientLogin /> : <ClientSignup />}
    </Box>
  );
};

export default Client;
