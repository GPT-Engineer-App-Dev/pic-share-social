import { Box, Container, Flex, Heading, VStack, Image, Text, Button, HStack, Spacer, Input } from "@chakra-ui/react";
import { useState } from "react";
import { FaHome, FaUser, FaUpload, FaThumbsUp } from "react-icons/fa";

const Index = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [photos, setPhotos] = useState([]);

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedPhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUploadPhoto = () => {
    if (selectedPhoto) {
      setPhotos([...photos, { src: selectedPhoto, likes: 0 }]);
      setSelectedPhoto(null);
    }
  };

  const handleLikePhoto = (index) => {
    const newPhotos = [...photos];
    newPhotos[index].likes += 1;
    setPhotos(newPhotos);
  };

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
            <Input type="file" accept="image/*" onChange={handlePhotoChange} />
            <Button colorScheme="blue" leftIcon={<FaUpload />} onClick={handleUploadPhoto}>Upload Photo</Button>
          </VStack>
        </Box>

        {/* Main Feed */}
        <Box w={{ base: "100%", md: "75%" }} p={4}>
          <VStack spacing={4}>
            {photos.map((photo, index) => (
              <Box key={index} w="100%" bg="white" boxShadow="md" borderRadius="md" p={4}>
                <Image src={photo.src} alt={`Uploaded Photo ${index + 1}`} />
                <Text mt={2}>Caption for the photo</Text>
                <Button leftIcon={<FaThumbsUp />} onClick={() => handleLikePhoto(index)}>
                  Like {photo.likes}
                </Button>
              </Box>
            ))}
          </VStack>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;