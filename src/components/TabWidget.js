import React, { useState } from 'react';
import { Tabs, Tab, Box, Typography } from '@mui/material';

function TabWidget() {
  const [tabValue, setTabValue] = useState(0);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box sx={{ bgcolor: '#2b2b2b', p: 2, borderRadius: 2, boxShadow: 3, width: '500px', height: '220px' }}>
      <Tabs 
        value={tabValue} 
        onChange={handleChange} 
        variant="fullWidth"
        sx={{ 
          '& .MuiTab-root': { 
            bgcolor: 'black', 
            color: 'white', 
            // Rounded corners
            '&.Mui-selected': { 
              bgcolor: '#2b2b2b', 
              color: 'white' 
            },
            '&:hover': {
              bgcolor: '#555' // Gray color on hover
            },
            // Adjust padding to make the rounded effect more visible
            px: 3, 
            py: 1
          },
          '& .MuiTabs-indicator': { 
            display: 'none' 
          }
        }}
      >
        <Tab label="About Me" />
        <Tab label="Experiences" />
        <Tab label="Recommended" />
      </Tabs>
    
      <Box sx={{ mt: 2, color: 'white' }}>
        {tabValue === 0 && (
          <Typography sx={{ fontSize: '12px' }}>
            Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.<br /><br />
            I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years with my wife Tiffany 
            and my 4-year-old twin daughters - Emma and Ella. Both of them are just starting school, 
            so my calendar is usually blocked between 9-10 AM. This is a...
          </Typography>
        )}
        {tabValue === 1 && (
          <Typography sx={{ fontSize: '12px' }}>
            Experience content goes here...
          </Typography>
        )}
        {tabValue === 2 && (
          <Typography sx={{ fontSize: '12px' }}>
            Recommended content goes here...
          </Typography>
        )}
      </Box>
    </Box>
  );
}

export default TabWidget;
