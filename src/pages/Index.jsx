import { Box, Container, Flex, Heading, VStack, Image, Text, Button, HStack, Spacer } from "@chakra-ui/react";
import { FaHome, FaUser, FaUpload } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="blue.500" color="white" p={4} align="center">
        <Heading size="md">PhotoShare</Heading>
        <Spacer />
        <HStack spacing={4}>
          <Button leftIcon={<FaHome />} variant="ghost" color="white">Home</Button>
          <Button leftIcon={<FaUser />} variant="ghost" color="white">Profile</Button>
          <Button leftIcon={<FaUpload />} variant="ghost" color="white">Upload</Button>
        </HStack>
      </Flex>

      {/* Main Content */}
      <Flex direction={{ base: "column", md: "row" }} mt={4}>
        {/* Sidebar */}
        <Box w={{ base: "100%", md: "25%" }} p={4} bg="gray.100">
          <VStack spacing={4}>
            <Image borderRadius="full" boxSize="150px" src="https://via.placeholder.com/150" alt="Profile Picture" />
            <Heading size="md">User Name</Heading>
            <Button colorScheme="blue" leftIcon={<FaUpload />}>Upload Photo</Button>
          </VStack>
        </Box>

        {/* Main Feed */}
        <Box w={{ base: "100%", md: "75%" }} p={4}>
          <VStack spacing={4}>
            <Box w="100%" bg="white" boxShadow="md" borderRadius="md" p={4}>
              <Image src="https://via.placeholder.com/600x400" alt="Shared Photo" />
              <Text mt={2}>Caption for the photo</Text>
            </Box>
            <Box w="100%" bg="white" boxShadow="md" borderRadius="md" p={4}>
              <Image src="https://via.placeholder.com/600x400" alt="Shared Photo" />
              <Text mt={2}>Caption for the photo</Text>
            </Box>
          </VStack>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;