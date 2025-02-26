import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Paper, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const SignUpPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const isValidEmail = (email) => {
    const emailRegex = /^[^@]+@[^@]+\.[^@]+$/;
    return emailRegex.test(email);
  };

  const isValidPassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;
    return passwordRegex.test(password);
  };

  const handleSignUp = () => {
    if (!username || !email || !password || !confirmPassword) {
      setError('All fields are required');
      return;
    }
    if (!isValidEmail(email)) {
      setError('Invalid email format.');
      return;
    }
    if (!isValidPassword(password)) {
      setError('Password must contain at least one lowercase letter, one uppercase letter, one special character, and numbers.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    setError('');
    console.log('Signing up with:', username, email, password);
    // Add sign-up logic here
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundImage: 'url(https://cdn.pixabay.com/photo/2016/03/27/19/32/book-1283865_1280.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={10}
          sx={{
            padding: 4,
            textAlign: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.2)',
            borderRadius: '10px',
          }}
        >
          <Typography variant="h4" gutterBottom sx={{ color: '#333', fontWeight: 'bold' }}>
            Sign Up
          </Typography>
          {error && <Typography color="error">{error}</Typography>}
          <TextField label="Username" fullWidth margin="normal" value={username} onChange={(e) => setUsername(e.target.value)} />
          <TextField label="Email" fullWidth margin="normal" value={email} onChange={(e) => setEmail(e.target.value)} />
          <TextField label="Password" type="password" fullWidth margin="normal" value={password} onChange={(e) => setPassword(e.target.value)} />
          <TextField label="Confirm Password" type="password" fullWidth margin="normal" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          <Button variant="contained" fullWidth sx={{ mt: 2, backgroundColor: '#1976d2', color: 'white', '&:hover': { backgroundColor: '#155a9a' } }} onClick={handleSignUp}>
            Sign Up
          </Button>
          <Typography variant="body2" sx={{ mt: 2, color: '#555' }}>
            Already have an account? <Link to="/login" style={{ color: '#1976d2' }}>Login</Link>
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default SignUpPage;
