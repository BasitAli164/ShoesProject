import  { useState, useEffect } from 'react';
import { Box, Typography, Link, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // To handle navigation
import bgimage1 from '../assets/image/backgroundImage/backgroundImage1.avif';
import bgimage2 from '../assets/image/backgroundImage/backgroundImage2.avif';
import bgimage3 from '../assets/image/backgroundImage/bg3.avif';
import bgimage4 from '../assets/image/backgroundImage/bg4.avif';
import '../css/HeroSection.css';

const HeroSection = () => {
  const navigate = useNavigate(); // Hook for navigation
  const [currentImage, setCurrentImage] = useState(0); // Track the current background image

  // Array of background images
  const bgImages = [bgimage1, bgimage2, bgimage3, bgimage4];

  // Change the background image every 10 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % bgImages.length); // Loop through images
    }, 2000); // 2 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [bgImages.length]);

  // Handlers for navigating to different pages
  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <Box          
      className="Box"
      sx={{
        textAlign: 'center',
        p: 20,
        backgroundImage: `url(${bgImages[currentImage]})`, // Dynamic background image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff', // White text for better contrast
        minHeight: '400px', // Ensure the section has a minimum height
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Add a dark overlay for better readability
        backgroundBlendMode: 'darken', // Blend the dark overlay with the image
        transition: 'background-image 1s ease-in-out', // Smooth transition for background change
      }}
    >
      <Typography variant="h3" sx={{ mb: 2, fontWeight: 'bold' }}>
        Welcome to Our Shop
      </Typography>
      <Typography variant="h5" sx={{ mb: 4 }}>
        Discover our latest collection
      </Typography>
      <Typography variant="body1" sx={{ mb: 4, maxWidth: '600px' }}>
        Explore our wide range of high-quality products. We offer the best selection of goods for{' '}
        <Link
          onClick={() => handleNavigate('/Service')}
          sx={{ cursor: 'pointer', textDecoration: 'underline', fontSize: '20px' }} // Increased font size
        >
Men 
        </Link>
        and {' '}
        <Link
          onClick={() => handleNavigate('/Service')}
          sx={{ cursor: 'pointer', textDecoration: 'underline', fontSize: '20px' }} // Increased font size
        >
          Women
        </Link>

        . Whether you're looking for the latest trends or timeless classics, we have something for
        everyone. Our commitment to quality ensures that you get the best value for your money.
      </Typography>
      <Button 
    variant='outlined' 
     sx={{
      fontSize: 17,
      fontWeight: 600,
      background: '#17a589',
      color: 'white',
      padding: 2,
      width: 200,
      borderRadius: 50,
      mt: 6
    }}
    onClick={()=>navigate('/service')}
    
        
        >Shop Now</Button>
   
    </Box>
  );
};

export default HeroSection;
