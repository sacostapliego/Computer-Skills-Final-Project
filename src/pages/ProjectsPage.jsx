import { Box, Container, Heading, SimpleGrid, Text, Image, Link } from '@chakra-ui/react';
import devPng from '/dev.png';
import bluePng from '/blujay.png'
import cardPng from '/wishlist.png';

const ProjectCard = ({ title, description, imageUrl, link, color1, color2 }) => (
  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} mb={10} alignItems="center">
    <Box 
      p={6} 
      borderRadius="md"
      bgGradient={`linear(to bottom right, ${color1}, ${color2})`}
      h="100%"
    >
      <Heading as="h3" size="lg" mb={4}>{title}</Heading>
      <Text>{description}</Text>
    </Box>
    <Link href={link} isExternal _hover={{ textDecoration: 'none' }}>
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
          src={imageUrl}
          alt={title}
        />
      </Box>
    </Link>
  </SimpleGrid>
);

const ProjectsPage = () => {
  const projects = [
    {
      title: 'Wishlist App - Cardinal',
      description: 'The Wishlist App is a cross-platform app in development that lets users create and share custom wishlists on web, iOS, and Android. Users can sign up with a profile image, create wishlists with unique colors and icons, and add items manually or by pasting a product link, which auto-fills details via web scraping. Built with FastAPI, Supabase PostgreSQL, and AWS S3, the backend uses JWT auth and is deployed with Docker on Render.com. The mobile-first frontend is built with Expo/React Native, using React Router and Context API for state and auth, with CI/CD handled through GitHub.',
      imageUrl: cardPng,
      link: 'https://cardinal-wishlist.onrender.com/shared/056d9dde-a03d-454d-a4ed-8a6b0c4040a7',
      color1: '#C41E3A',
      color2: '#000000',
    },
    {
      title: 'BluJay Builds - Full Stack PC Catalog',
      description: 'BluJay Builds is a full-stack web app that showcases PC parts and will eventually feature complete custom builds based on personal projects. Users can create accounts with profile images and browse a growing catalog of components. The backend is built with Java and Spring Boot using a modular, layered RESTful API with JWT authentication, role-based access, and PostgreSQL support. The frontend is designed with React, Chakra UI, and React Router, featuring a clean, responsive UI and Context API for state management.',
      imageUrl: bluePng,
      link: 'https://blujay-pc-builds.onrender.com/dashboard/parts',
      color1: '#b8aeaeff',
      color2: '#2196f3',
    },
    {
      title: 'Software Development - Final Project',
      description: 'The Employee Management System is a full-stack application built with a team to streamline employee data handling for admins and general staff. The backend is developed in Java with MySQL, using a layered architecture, JWT authentication, secure password hashing, and libraries like Jackson and dotenv. The frontend replaces the original console-based interface with a responsive, user-friendly React UI styled with Chakra UI. It supports user login, profile viewing, employee search and updates, batch salary adjustments, report generation, and password management. Admins and employees see different features based on role-based access.',
      imageUrl: devPng,
      link: 'https://github.com/sacostapliego/Software-Development-Project',
      color1: '#0071CE',
      color2: '#EEEEEE',
    },
  ];

  return (
    <Container maxW="container.xl" p={4}>
      <Heading as="h1" size="2xl" textAlign="center" my={10}>
        Projects
      </Heading>
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </Container>
  );
};

export default ProjectsPage;