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
        }}
      >
        {/* TabWidget component */}
        <Box sx={{ mb: 1 }}>  {/* Adjust the bottom margin to control spacing */}
          <TabWidget />
        </Box>

        {/* Divider Line */}
        <Box 
          sx={{ 
            width: '70%', 
            height: '3px', 
            bgcolor: 'gray', 
            my: 1,  // Margin on top and bottom
          }} 
        />

        {/* GalleryWidget component */}
        <Box sx={{ mt: 0.5 }}>  {/* Adjust the top margin to control spacing */}
          <GalleryWidget />
        </Box>
      </Box>
    </Box>
  );
}

export default App;
