import { Box, Container, Grid, Heading, Image, SimpleGrid, Text, VStack, Link } from '@chakra-ui/react';

const skillsData = [
  {
    category: 'Programming Languages',
    items: 'Python, JavaScript (ES6+), TypeScript, Java, C, SQL, R, HTML',
  },
  {
    category: 'Frameworks & Libraries',
    items: 'React, React Native, Node.js, Express.js, FastAPI, Spring Boot, Flutter',
  },
  {
    category: 'Tools & Platforms',
    items: 'Docker, Git, GitHub, AWS S3, PostgreSQL, Supabase, Render, Expo, Chakra UI',
  },
  {
    category: 'Languages',
    items: 'English (Fluent), Spanish (Fluent)'
  },
];


const HomePage = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Grid
        templateColumns={{ base: '1fr', md: '3fr 7fr' }}
        gap={10}
        mt={10}
        alignItems={'stretch'}
        >
        {/* Left Column: Picture and About Me */}
        <VStack spacing={8} align="stretch">
          <Box bg="#181818ff" p={4} borderRadius="md">
            <Image
              borderRadius={'md'}
              src="/me.png"
              alt="Steven Acosta-Pliego"
            />
          </Box>
          <Box bg="#181818ff" p={6} borderRadius="md" flex={1}>
            <Heading as="h2" size="lg" mb={4}>About Me</Heading>
            <Text>
              I am currently attending Georgia State University in Atlanta, pursuing a bachelors in Computer Science. Constantly working on both personal and academic projects.
            </Text>
          </Box>
        </VStack>

        {/* Right Column: Skills */}
        <VStack align="stretch" spacing={6}>
          <Heading as="h2" size="xl" textAlign="left" bg="#181818ff" p={6} borderRadius="md">Skills</Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} spacing={6} flex={1}>
            {skillsData.map((skill) => (
              <Box 
              key={skill.category} 
              bg={"#181818ff"}
              p={6} 
              borderRadius="md" 
              transition="transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out"
              _hover={{
                  transform: 'translateY(-2px)',
                  boxShadow: 'lg',
                }}>
                <Heading as="h3" size="md" mb={3}>{skill.category}</Heading>
                <Text fontSize="lg" fontWeight="small">{skill.items}</Text>
              </Box>
            ))}
          </SimpleGrid>
        </VStack>
      </Grid>

      {/* Featured Project Section */}
      <Box mt={20}>
        <Heading as="h2" size="xl" textAlign="left" mb={10}>Featured Project</Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Box 
            p={6} 
            borderRadius="md"
            bgGradient="linear(to bottom right, #C41E3A, #000000)"
          >
            <Heading as="h3" size="lg" mb={4}>Wishlist App - Cardinal</Heading>
            <Text>The Wishlist App is a cross-platform app in development that lets users create and share custom wishlists on web, iOS, and Android. Users can sign up with a profile image, create wishlists with unique colors and icons, and add items manually or by pasting a product link, which auto-fills details via web scraping. Built with FastAPI, Supabase PostgreSQL, and AWS S3, the backend uses JWT auth and is deployed with Docker on Render.com. The mobile-first frontend is built with Expo/React Native, using React Router and Context API for state and auth, with CI/CD handled through GitHub.</Text>
          </Box>
          <Link href="https://cardinal-wishlist.onrender.com/shared/056d9dde-a03d-454d-a4ed-8a6b0c4040a7" isExternal _hover={{ textDecoration: 'none' }}>
            <Box
              borderRadius="md"
              transition="transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out"
              _hover={{
                transform: 'translateY(-5px)',
                boxShadow: 'xl',
              }}
            >
              <Image
                borderRadius="md"
                src="/wishlist.png" // Replace with project picture
                alt="Featured Project"
              />
            </Box>
          </Link>
        </SimpleGrid>
      </Box>
    </Container>
  );
};

export default HomePage;