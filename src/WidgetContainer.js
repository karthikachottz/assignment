import React from 'react';
import TabWidget from './components/TabWidget';
import GalleryWidget from './components/GalleryWidget';
import { Box } from '@mui/material';

function App() {
  return (
    <Box 
      sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'flex-start',  // Align widgets at the top
        p: 4, 
        bgcolor: '#1a1a1a', 
        height: '100vh' 
      }}
    >
      {/* Left empty as per the assignment */}
      <Box sx={{ width: '50%' }}></Box>  

      {/* Right side with TabWidget and GalleryWidget */}
      <Box 
        sx={{ 
          width: '50%', 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center',
          gap: 2 // Space between widgets
        }}
      >
        {/* TabWidget component */}
        <TabWidget />

        {/* Divider Line */}
        <Box sx={{ width: '100%', height: '2px', bgcolor: 'white', my: 2 }} />

        {/* GalleryWidget component */}
        <GalleryWidget />
      </Box>
    </Box>
  );
}

export default App;
