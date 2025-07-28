import { Flex, Heading, Link as ChakraLink, HStack } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const activeLinkStyle = {
    color: 'skyblue',
  };

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-around"
      wrap="wrap"
      padding="1.5rem"
      bg="rgba(24,24,24,0.8)"
      color="white"
      backdropFilter="blur(10px)"
      position="sticky"
      top="0"
      zIndex="10"
      height={['70px', '100px']}
    >
      <HStack spacing={16} fontWeight={'bold'} fontSize="lg">
        <ChakraLink 
          as={NavLink} 
          to="/coursework" 
          style={({ isActive }) => isActive ? activeLinkStyle : undefined}
          transition="transform 0.2s ease-in-out"
          _hover={{ transform: 'translateY(-3px)' }}
        >
          Coursework
        </ChakraLink>
        <ChakraLink 
          as={NavLink} 
          to="/projects" 
          style={({ isActive }) => isActive ? activeLinkStyle : undefined}
          transition="transform 0.2s ease-in-out"
          _hover={{ transform: 'translateY(-3px)' }}
        >
          Projects
        </ChakraLink>
      </HStack>

      <Heading size="lg">
        <ChakraLink 
          as={NavLink} 
          to="/"
          transition="transform 0.2s ease-in-out"
          _hover={{ transform: 'translateY(-3px)' }}
        >Steven Acosta-Pliego  
        </ChakraLink>
      </Heading>

      <HStack spacing={16} fontWeight={'bold'} fontSize="lg">
        <ChakraLink 
          href="https://sites.gsu.edu/sacostapliego1/" 
          isExternal
          transition="transform 0.2s ease-in-out"
          _hover={{ transform: 'translateY(-3px)' }}
        >
          Blog
        </ChakraLink>
        <ChakraLink 
          as={NavLink} 
          to="/resume" 
          style={({ isActive }) => isActive ? activeLinkStyle : undefined}
          transition="transform 0.2s ease-in-out"
          _hover={{ transform: 'translateY(-3px)' }}
        >
          Resume
        </ChakraLink>
      </HStack>
    </Flex>
  );
};

export default Navbar;