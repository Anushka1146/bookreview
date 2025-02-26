import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom'; 

function LandingPage() {
  const navigate = useNavigate(); 

  return (
    <div style={styles.pageContainer}>
      <AppBar position="static" sx={{ backgroundColor: "#3B2F2F" }}>
        <Toolbar>
          <Typography variant="h6" style={styles.title}>
            Book Review Platform
          </Typography>
          <Button color="inherit" onClick={() => navigate('/login')}>Login</Button>
          <Button color="inherit" onClick={() => navigate('/signuppage')}>Signup</Button>
        </Toolbar>
      </AppBar>
    
      <div style={styles.contentContainer}>
        <Typography variant="h3" style={styles.header}>Welcome to the BookNest</Typography>
        <Typography variant="h4" style={styles.header}>"Books Open Minds, Reviews Share Perspectives."</Typography>
        <Typography variant="body1" style={styles.description}>
          Please login or signup to access the system.
        </Typography>
      </div>
    </div>
  );
}

const styles = {
  pageContainer: {
    backgroundImage: `url(https://cdn.pixabay.com/photo/2016/03/27/19/32/book-1283865_1280.jpg)`, 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    color: 'white',
  },
  title: {
    flexGrow: 1,
  },
  contentContainer: {
    flex: 1, 
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center', 
    alignItems: 'center', 
    textAlign: 'center',
    padding: '20px',
    color:"black",
  },
  header: {
    marginBottom: '20px',
    fontWeight: 'bold',
  },
  description: {
    fontSize: '18px',
    maxWidth: '600px', 
  },
};

export default LandingPage;