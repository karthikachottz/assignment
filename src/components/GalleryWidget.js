import React, { useState } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function GalleryWidget() {
  const [images, setImages] = useState([
    require('../images/image1.jpg'),
    require('../images/image1.jpg'),
    require('../images/image1.jpg'),
  ]);

  const addImage = () => {
    const url = prompt('Enter the URL of the new image:');
    if (url) {
      const directImageUrl = url.match(/https:\/\/[^"]+\.(jpg|jpeg|png|gif)/i);
      
      if (directImageUrl) {
        setImages([...images, directImageUrl[0]]);
      } else {
        alert('Please enter a valid direct image URL.');
      }
    }
  };

  return (
    <Box
      sx={{
        bgcolor: '#2b2b2b',
        p: 2,
        borderRadius: 3,
        boxShadow: 3,
        width: '500px',
        mt: 2,
        position: 'relative',
        px: 2,
        mx: 'auto',
        height: '200px'
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Box
          sx={{
            bgcolor: 'black',
            p: 1,
            borderRadius: 3,
            border: '2px solid black',
            minWidth: '100px',
            pl: 2,
            pr: 2,
            ml: 3
          }}
        >
          <Typography variant="h6" sx={{ color: 'white', textAlign: 'center' }}>
            Gallery
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            bgcolor: '#2b2b2b',
            borderRadius: 3,
            boxShadow: '0 4px 8px rgba(0.7, 0.7, 0.7, 0.7)',
            px: 1,
            py: 0.5,
            cursor: 'pointer',
            width: '90px',
            height: '30px',
            marginRight: '140px',
          }}
          onClick={addImage}
        >
          <Typography sx={{ color: 'lightgray', fontSize: '12px' }}>+ Add Image</Typography>
        </Box>
      </Box>

      <Box sx={{ position: 'absolute', top: 26, right: 8, display: 'flex', gap: 2 }}>
        <Box
          sx={{
            bgcolor: '#1a1a1a',
            borderRadius: '50%',
            width: '30px',
            height: '30px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
            padding: '2px',
          }}
        >
          <IconButton sx={{ color: 'white', p: 0 }}>
            <ArrowBackIcon sx={{ fontSize: '16px' }} />
          </IconButton>
        </Box>

        <Box
          sx={{
            bgcolor: '#1a1a1a',
            borderRadius: '50%',
            width: '30px',
            height: '30px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
            padding: '2px',
            mr: 4
          }}
        >
          <IconButton sx={{ color: 'white', p: 0 }}>
            <ArrowForwardIcon sx={{ fontSize: '16px' }} />
          </IconButton>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 4, px: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', gap: 2 }}>
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Gallery ${index}`}
              style={{ width: '100px', height: '100px', borderRadius: '8px', objectFit: 'cover' }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default GalleryWidget;
