import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Select,
  Input,
  Button,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Stack,
  Text,
  Link,
  useToast,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

const Devonboarding = () => {
  const toast = useToast();
  const location = useLocation();
  const initialEmail = location.state?.email || "";
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: initialEmail,
    skills: [],
    professionalExperiences: [],
    educationalExperiences: [],
  });

  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Fetch skills from the server
    const fetchSkills = async () => {
      try {
        const response = await axios.get("http://localhost:8080/skills");
        console.log(response.data);
        setSkills(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching skills:", error);
      }
    };

    fetchSkills();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSkillsChange = (e) => {
    const options = e.target.options;
    const selectedSkills = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        const selectedSkillId = skills.find(
          (skill) => skill.name === options[i].value
        )?._id;
        selectedSkills.push(selectedSkillId);
      }
    }
    setFormData((prevData) => ({
      ...prevData,
      skills: selectedSkills,
    }));
  };

  const handleProfessionalExpChange = (e, index) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      const professionalExperiences = [...prevData.professionalExperiences];
      professionalExperiences[index] = {
        ...professionalExperiences[index],
        [name]: value,
      };
      return { ...prevData, professionalExperiences };
    });
  };

  const handleEducationalExpChange = (e, index) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      const educationalExperiences = [...prevData.educationalExperiences];
      educationalExperiences[index] = {
        ...educationalExperiences[index],
        [name]: value,
      };
      return { ...prevData, educationalExperiences };
    });
  };

  const handleAddProfessionalExp = () => {
    setFormData((prevData) => ({
      ...prevData,
      professionalExperiences: [
        ...prevData.professionalExperiences,
        {
          companyName: "",
          techStack: "",
          skillsUsed: [],
          timePeriod: "",
        },
      ],
    }));
  };

  const handleAddEducationalExp = () => {
    setFormData((prevData) => ({
      ...prevData,
      educationalExperiences: [
        ...prevData.educationalExperiences,
        {
          degreeName: "",
          schoolName: "",
          timePeriod: "",
        },
      ],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "http://localhost:8080/developer/onboarding",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setSubmitted(true);
      toast({
        title: "Onboarding details submitted successfully!",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      console.log(response.data);
    } catch (error) {
      console.error(
        "Error submitting onboarding details:",
        error.response.data
      );
      toast({
        title: "Error submitting onboarding details",
        description: error.response.data.msg || "An error occurred",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (submitted) {
    return <div>Onboarding details submitted successfully!</div>;
  }

  return (
    <Box maxW="600px" m="auto" p="4">
      <Heading mb="4">Developer Onboarding</Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing="4">
          <FormControl isRequired>
            <FormLabel>First Name</FormLabel>
            <Input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Last Name</FormLabel>
            <Input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Phone Number</FormLabel>
            <Input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              readOnly
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Skills</FormLabel>
            <Select
              value={formData.skills}
              onChange={handleSkillsChange}
              size={skills.length} 
            >
              {skills.map((skill) => (
                <option key={skill._id} value={skill.name}>
                  {skill.name}
                </option>
              ))}
            </Select>
          </FormControl>

          <Box>
            <Heading size="md" mb="2">
              Professional Experiences
            </Heading>
            {formData.professionalExperiences.map((exp, index) => (
              <Box key={index} mb="4">
                <Stack spacing="2">
                  <FormControl>
                    <FormLabel>Company Name</FormLabel>
                    <Input
                      type="text"
                      name="companyName"
                      value={exp.companyName}
                      onChange={(e) => handleProfessionalExpChange(e, index)}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Tech Stack</FormLabel>
                    <Input
                      type="text"
                      name="techStack"
                      value={exp.techStack}
                      onChange={(e) => handleProfessionalExpChange(e, index)}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Skills Used</FormLabel>
                    <Select
                      options={skills}
                      isMulti
                      value={exp.skillsUsed}
                      onChange={(selectedSkills) => {
                        setFormData((prevData) => {
                          const professionalExperiences = [
                            ...prevData.professionalExperiences,
                          ];
                          professionalExperiences[index].skillsUsed =
                            selectedSkills.map((skill) => skill._id);
                          return { ...prevData, professionalExperiences };
                        });
                      }}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Time Period</FormLabel>
                    <Input
                      type="text"
                      name="timePeriod"
                      value={exp.timePeriod}
                      onChange={(e) => handleProfessionalExpChange(e, index)}
                    />
                  </FormControl>
                </Stack>
              </Box>
            ))}
            <Button
              type="button"
              onClick={handleAddProfessionalExp}
              colorScheme="teal"
              size="sm"
            >
              Add Professional Experience
            </Button>
          </Box>

          <Box>
            <Heading size="md" mb="2">
              Educational Experiences
            </Heading>
            {formData.educationalExperiences.map((exp, index) => (
              <Box key={index} mb="4">
                <Stack spacing="2">
                  <FormControl>
                    <FormLabel>Degree Name</FormLabel>
                    <Input
                      type="text"
                      name="degreeName"
                      value={exp.degreeName}
                      onChange={(e) => handleEducationalExpChange(e, index)}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>School Name</FormLabel>
                    <Input
                      type="text"
                      name="schoolName"
                      value={exp.schoolName}
                      onChange={(e) => handleEducationalExpChange(e, index)}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Time Period</FormLabel>
                    <Input
                      type="text"
                      name="timePeriod"
                      value={exp.timePeriod}
                      onChange={(e) => handleEducationalExpChange(e, index)}
                    />
                  </FormControl>
                </Stack>
              </Box>
            ))}
            <Button
              type="button"
              onClick={handleAddEducationalExp}
              colorScheme="teal"
              size="sm"
            >
              Add Educational Experience
            </Button>
          </Box>

          <Button type="submit" colorScheme="teal">
            Submit
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default Devonboarding;
