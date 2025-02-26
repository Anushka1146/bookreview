import React, { useState } from "react";
import {
  Container,
  Paper,
  Typography,
  Avatar,
  TextField,
  FormControlLabel,
  Switch,
  MenuItem,
  Button,
  Divider,
} from "@mui/material";
import { Logout, Settings, Edit } from "@mui/icons-material";

const SettingsPage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [language, setLanguage] = useState("English");

  const handleLogout = () => {
    console.log("User logged out");
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh", // Ensures settings are visible within the screen
        backgroundColor: "#C2B280", // Pink background
        color: "black", // Black font color
      }}
    >
      <Paper
        elevation={5}
        sx={{
          p: 4,
          width: "100%",
          maxWidth: 600,
          borderRadius: 2,
          backgroundColor: "#eeeeee", // Grey background
          boxShadow: "8px 8px 8px rgb(33, 28, 28)", // Box shadow
          color: "black",
        }}
      >
        {/* Settings Icon on Left with Title */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
          <Settings sx={{ fontSize: 40, color: "black" }} />
          <Typography variant="h4">Settings</Typography>
        </div>

        {/* Profile Section */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px" }}>
          <Avatar sx={{ width: 90, height: 90, backgroundColor: "black", color: "white" }}>A</Avatar>
          <div>
            <Typography variant="h5">Anushka</Typography>
            <Typography variant="body1" color="black">anu123@gmail.com</Typography>
            <Button variant="outlined" startIcon={<Edit />} sx={{ mt: 1, color: "black", borderColor: "black" }}>
              Edit Profile
            </Button>
          </div>
        </div>

        <Divider sx={{ my: 2, backgroundColor: "black" }} />

        {/* Settings Options */}
        <Typography variant="h5" sx={{ mt: 2 }}>Account Settings</Typography>
        <Button fullWidth variant="outlined" sx={{ my: 1, color: "black", borderColor: "black", boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)" }}>
          Change Email
        </Button>
        <Button fullWidth variant="outlined" sx={{ my: 1, color: "black", borderColor: "black", boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)" }}>
          Change Password
        </Button>
        <Button fullWidth variant="outlined" color="error" sx={{ my: 1, boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)" }}>
          Delete Account
        </Button>
        <Button fullWidth variant="outlined" sx={{ my: 1, color: "black", borderColor: "black", boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)" }}>
          Clear Search History
        </Button>

        <Typography variant="h5" sx={{ mt: 2 }}>Privacy & Security</Typography>
        <Button fullWidth variant="outlined" sx={{ my: 1, color: "black", borderColor: "black", boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)" }}>
          Manage Blocked Users
        </Button>
        <Button fullWidth variant="outlined" sx={{ my: 1, color: "black", borderColor: "black", boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)" }}>
          Profile Visibility
        </Button>
        <Button fullWidth variant="outlined" sx={{ my: 1, color: "black", borderColor: "black", boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)" }}>
          Comment Controls
        </Button>

        <Typography variant="h5" sx={{ mt: 2 }}>Notification Settings</Typography>
        <FormControlLabel
          control={<Switch checked={notifications} onChange={() => setNotifications(!notifications)} />}
          label="Enable Notifications"
          sx={{ color: "black" }}
        />

        <Typography variant="h5" sx={{ mt: 2 }}>Display & Theme</Typography>
        <FormControlLabel
          control={<Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />}
          label="Dark Mode"
          sx={{ color: "black" }}
        />
        <TextField
          select
          label="Language"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          fullWidth
          sx={{
            mt: 2,
            color: "black",
            borderColor: "black",
            boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)",
          }}
        >
          <MenuItem value="English">English</MenuItem>
          <MenuItem value="Spanish">Spanish</MenuItem>
          <MenuItem value="French">French</MenuItem>
        </TextField>

        <Divider sx={{ my: 3, backgroundColor: "black" }} />

        {/* Logout Button */}
        <Button
          variant="contained"
          color="error"
          startIcon={<Logout />}
          fullWidth
          sx={{ boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)" }}
          onClick={handleLogout}
        >
          Sign Out
        </Button>
      </Paper>
    </Container>
  );
};

export default SettingsPage;
