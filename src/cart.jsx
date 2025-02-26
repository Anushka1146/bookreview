import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  TextField,
  Box,
  InputAdornment,
  Card,
  CardMedia,
  CardContent,
  Rating,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { ShoppingCart, Settings } from "@mui/icons-material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";
import { grey, pink } from "@mui/material/colors";

const username = "Anushka";

const books = [
  {
    title: "The Psychology of Money",
    author: "Morgan Housel",
    image: "https://m.media-amazon.com/images/I/81Dky+tD+pL._AC_UF1000,1000_QL80_.jpg",
    rating: 4.7,
    description: "This book explores how human psychology influences financial decisions and wealth-building strategies."
  },
  {
    title: "Your Money or Your Life",
    author: "Vicki Robin & Joe Dominguez",
    image: "https://m.media-amazon.com/images/I/71AL7FJJw3L.jpg",
    rating: 4.5,
    description: "A guide to financial independence and transforming your relationship with money through mindful spending."
  },
  {
    title: "Money: A Story of Humanity",
    author: "David McWilliams",
    image: "https://m.media-amazon.com/images/I/712qf5WTyIL._UF1000,1000_QL80_.jpg",
    rating: 4.3,
    description: "A historical perspective on money, its impact on societies, and its evolving role in the modern world."
  },
  {
    title: "Financial Freedom",
    author: "Grant Sabatier",
    image: "https://m.media-amazon.com/images/I/611nGrWaqxL._AC_UF1000,1000_QL80_.jpg",
    rating: 4.6,
  },
  {
    title: "Going Infinite",
    author: "Michael Lewis",
    image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1684247487l/149105520.jpg",
    rating: 4.2,
    description: "A deep dive into the world of high-stakes finance, risk-taking, and the unpredictable nature of markets."
  },
  {
    title: "The Price of Inequality",
    author: "Joseph Stiglitz",
    image: "https://m.media-amazon.com/images/I/71UVXTnIk9L._AC_UF1000,1000_QL80_.jpg",
    rating: 4.4,
    description: "An analysis of economic disparity and the policies that contribute to growing inequality worldwide."
  },
];

const Cart = () => {
  const [search, setSearch] = useState("");

  return (
    <Box sx={{  backgroundColor:"#F5DEB3" 
      ,display: "flex", flexDirection: "column"}}>
      <AppBar position="static" sx={{ backgroundColor: "#3B2F2F" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" sx={{ display: "flex", alignItems: "center" }}>
            <AccountCircleIcon sx={{ mr: 1 }} />
            {username}
          </Typography>
          <Typography variant="h6" sx={{ flexGrow: 1, textAlign: "center" }}>
            Welcome to Book Nest
          </Typography>
          <Box>
      <IconButton color="inherit" component={Link} to="/cart">
        <ShoppingCart />
      </IconButton>
      <IconButton color="inherit" component={Link} to="/settings">
        <Settings />
      </IconButton>
    </Box>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: 2,
          backgroundColor:"#FAF3E0",
          boxShadow: "8px 8px 8px rgba(192, 64, 0, 0.31)",
        }}
      >
        <TextField
          placeholder="Search for books..."
          variant="outlined"
          fullWidth
          sx={{ maxWidth: "95%", height: "40px",backgroundColor: "white", }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
            sx: { height: "40px" },
          }}
        />
      </Box>
      <Typography variant="h5" sx={{ fontWeight: "bold", textAlign: "center", mb: 1 ,mt:3,color:"#2E2E2E"}}>
              Your Cart
      </Typography>
      <Box sx={{ mt: 1, px: 1 }}>
        {books.map((book, index) => (
          <Link 
          to={`/books/${encodeURIComponent(book.title)}`}  // ✅ Correct syntax
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Card
            key={index}
            sx={{
              display: "flex",
              mb: 3,
              width: "95%",
              boxShadow: "8px 8px 8px rgba(192, 64, 0, 0.31)",
              borderRadius: "10px",
              backgroundColor: "	#FFFFFF",
              mx:4,
              border: "2px solid rgba(192, 64, 0, 0.49)"
            }}
          >
            <CardMedia
              component="img"
              sx={{ width: 120, objectFit: "contain", padding: 1 }}
              image={book.image}
              alt={book.title}
            />
            <CardContent sx={{ flex: 1 }}>
              <Typography variant="h6" fontWeight="bold">
                {book.title}
              </Typography>
              <Typography variant="subtitle2" color="textSecondary">
                {book.author}
              </Typography>
              <Typography>
                <Rating value={book.rating} precision={0.1} readOnly sx={{ mt: 0.5 }} />
              </Typography>
              <Typography variant="caption" sx={{ fontWeight: "bold" }}>
                {book.rating} / 5
              </Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                {book.description}
              </Typography>
            </CardContent>
          </Card>
          </Link>
        ))}
      </Box>
    </Box>
  );
};

export default Cart;