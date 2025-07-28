import { Flex, Link, Text, Icon } from '@chakra-ui/react';
import { FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <Flex
      as="footer"
      align="center"
      justify="space-between"
      py={8}
      px={{ base: 8, md: 16 }}
      bg="rgba(24,24,24,0.8)"
      color="white"
      backdropFilter="blur(10px)"
      minHeight="200px"
      mt={"100px"}
    >
      <Link href="https://www.linkedin.com/in/steven-acosta-pliego/" isExternal>
        <Icon 
          as={FaLinkedin} 
          boxSize={10} 
          color="gray.400"
          transition="color 0.2s ease-in-out"
          _hover={{ color: 'skyblue' }}
        />
      </Link>
      <Text fontSize="xl" color="gray.400">
        steven.acosta867@gmail.com
      </Text>
    </Flex>
  );
};

export default Footer;