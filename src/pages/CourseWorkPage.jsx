import { Box, Container, Heading, VStack, Text } from '@chakra-ui/react';

const courses = [
  'Operating Systems',
  'Software Development',
  'Data Structures',
  'Computer Organization',
  'System-Level Programming',
  'Linear Algebra',
  'Discrete Math',
  'Principles of Computer Science I & II',
];

const CourseWorkPage = () => {
  return (
    <Container maxW="container.md" py={10}>
      <Box p={8} borderRadius="lg" boxShadow="lg">
        <VStack spacing={4} align="stretch">
          {courses.map((course, index) => (
            <Box
              key={index}
              bg="gray.800"
              p={4}
              borderRadius="md"
              boxShadow="md"
              transition="transform 0.2s, box-shadow 0.2s"
              _hover={{
                transform: 'translateY(-2px)',
                boxShadow: 'lg',
              }}
            >
              <Text fontSize="xl" fontWeight={'bold'} textAlign="center">{course}</Text>
            </Box>
          ))}
        </VStack>
      </Box>
    </Container>
  );
};

export default CourseWorkPage;