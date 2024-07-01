import React, { useState } from 'react';
import { Box, Button } from '@mui/material';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <Box
      sx={{
        background: `rgba(0, 0, 255, ${count / 100})`,
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        component="h1"
        sx={{
          fontSize: '2rem', 
          marginBottom: '10px',
        }}
      >
        Counter
      </Box>
      <Box
        component="h1"
        sx={{
          fontSize: '2rem', 
          marginBottom: '10px',
        }}
      >
        {count}
      </Box>
      <Button 
        variant="contained" 
        onClick={increment}
        sx={{ width: '20px', fontSize: '1rem', padding: '10px 100px', margin: '10px' }}
      >
        Increment
      </Button>
      <Button 
        variant="contained" 
        onClick={decrement}
        sx={{ width: '20px', fontSize: '1rem', padding: '10px 100px', margin: '10px' }}
      >
        Decrement
      </Button>
      <Button 
        variant="contained" 
        onClick={reset}
        sx={{ width: '20px', fontSize: '1rem', padding: '10px 100px', margin: '10px' }}
      >
        Reset
      </Button>
    </Box>
  );
};

export default Counter;
