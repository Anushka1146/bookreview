import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Paper, Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!email || !password) {
      setError('Both fields are required');
      return;
    }
    setError('');
    console.log('Logging in with:', email, password);
    navigate('/homepage'); // Navigate to homepage after login
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
            Login
          </Typography>
          {error && <Typography color="error">{error}</Typography>}
          <TextField label="Email" fullWidth margin="normal" value={email} onChange={(e) => setEmail(e.target.value)} />
          <TextField label="Password" type="password" fullWidth margin="normal" value={password} onChange={(e) => setPassword(e.target.value)} />
          <Button variant="contained" fullWidth sx={{ mt: 2, backgroundColor: '#1976d2', color: 'white', '&:hover': { backgroundColor: '#155a9a' } }} onClick={handleLogin}>
            Login
          </Button>
          <Typography variant="body2" sx={{ mt: 2, color: '#555' }}>
            Don't have an account? <Link to="/signuppage" style={{ color: '#1976d2' }}>Sign Up</Link>
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default LoginPage;
