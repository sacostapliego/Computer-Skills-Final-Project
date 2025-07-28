import { Box, Container, Heading, VStack, Button, Link } from '@chakra-ui/react';

const ResumePage = () => {
  const embedUrl = `https://drive.google.com/file/d/1XoX34_hnjXcxQOC0vmJD0VEvUHzUupyX/preview`;

  return (
    <Container maxW="container.lg" py={10}>
      <VStack spacing={8}>
        <Box 
          as="iframe"
          src={embedUrl}
          width="100%"
          height="800px"
          title="Resume"
          borderRadius="md"
          boxShadow="lg"
        />
      </VStack>
    </Container>
  );
};

export default ResumePage;