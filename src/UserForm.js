import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';

const UserForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
    phone: '',
  });
  const [unsavedChanges, setUnsavedChanges] = useState(false);

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (unsavedChanges) {
        e.preventDefault();
        e.returnValue = 'You have unsaved changes. Are you sure you want to leave?';
      }
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [unsavedChanges]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setUnsavedChanges(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userId = Math.random().toString(36).substr(2, 9);
    localStorage.setItem(userId, JSON.stringify(formData));
    setUnsavedChanges(false);
    alert('Data saved!');
  };

  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        width: '1200px', // Adjusted width
        margin: 'auto',
        padding: '10px', // Adjusted padding
        border: '1px solid #ccc',
        borderRadius: '8px',
        backgroundColor: '#f9f9f9', // Optional background color for better visibility
      }}
      onSubmit={handleSubmit}
    >
      <Typography variant="h4" component="h1" textAlign="center" sx={{ fontSize: '3rem', marginBottom: '40px' }}>
        User Form
      </Typography>
      <TextField
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        fullWidth
        InputLabelProps={{ style: { fontSize: '1.5rem' } }} // Adjusted font size of the label
        InputProps={{ style: { fontSize: '1.5rem', height: '70px' } }} // Adjusted font size and height of input text
        sx={{ height: '70px' }} // Adjusted height of the TextField component
      />
      <TextField
        label="Address"
        name="address"
        value={formData.address}
        onChange={handleChange}
        fullWidth
        InputLabelProps={{ style: { fontSize: '1.5rem' } }} // Adjusted font size of the label
        InputProps={{ style: { fontSize: '1.5rem', height: '70px' } }} // Adjusted font size and height of input text
        sx={{ height: '70px' }} // Adjusted height of the TextField component
      />
      <TextField
        label="Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        fullWidth
        InputLabelProps={{ style: { fontSize: '1.5rem' } }} // Adjusted font size of the label
        InputProps={{ style: { fontSize: '1.5rem', height: '70px' } }} // Adjusted font size and height of input text
        sx={{ height: '70px' }} // Adjusted height of the TextField component
      />
      <TextField
        label="Phone"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        fullWidth
        InputLabelProps={{ style: { fontSize: '1.5rem' } }} // Adjusted font size of the label
        InputProps={{ style: { fontSize: '1.5rem', height: '70px' } }} // Adjusted font size and height of input text
        sx={{ height: '70px' }} // Adjusted height of the TextField component
      />
      <Button
        type="submit"
        variant="contained"
        sx={{ fontSize: '1.5rem', padding: '20px' }} // Adjusted font size and padding
      >
        Save
      </Button>
    </Box>
  );
};

export default UserForm;
