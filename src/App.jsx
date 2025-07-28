import { Box, Flex } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import CourseWorkPage from './pages/CourseWorkPage';
import ResumePage from './pages/ResumePage';

function App() {
  return (
    <Flex direction="column" bg="#0F0F0F" color="white" minH="100vh">
      <Navbar />
      <Box flex="1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/coursework" element={<CourseWorkPage />} />
          <Route path="/resume" element={<ResumePage />} />
        </Routes>
      </Box>
      <Footer />
    </Flex>
  );
}

export default App;