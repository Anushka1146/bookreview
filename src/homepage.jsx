import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  TextField,
  InputAdornment,
  Container,
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Rating,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { ShoppingCart, Settings } from "@mui/icons-material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";

const username = "Anushka";

const trendingBooks = [
  {
    title: "The Psychology of Money",
    author: "Morgan Housel",
    image: "https://m.media-amazon.com/images/I/81Dky+tD+pL._AC_UF1000,1000_QL80_.jpg",
    rating: 4.7,
  },
  {
    title: "Your Money or Your Life",
    author: "Vicki Robin & Joe Dominguez",
    image: "https://m.media-amazon.com/images/I/71AL7FJJw3L.jpg",
    rating: 4.5,
  },
  {
    title: "Money: A Story of Humanity",
    author: "David McWilliams",
    image: "https://m.media-amazon.com/images/I/712qf5WTyIL._UF1000,1000_QL80_.jpg",
    rating: 4.3,
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
  },
  {
    title: "The Price of Inequality",
    author: "Joseph Stiglitz",
    image: "https://m.media-amazon.com/images/I/71UVXTnIk9L._AC_UF1000,1000_QL80_.jpg",
    rating: 4.4,
  },
  {
    title: "Dollars and Sense",
    author: "Dan Ariely & Jeff Kreisler",
    image: "https://m.media-amazon.com/images/I/71iMqi8d6IL._AC_UF1000,1000_QL80_.jpg",
    rating: 4.3,
  },
  {
    title: "Mind Over Money",
    author: "Claudia Hammond",
    image: "https://m.media-amazon.com/images/I/615DeDaWLwL._AC_UF1000,1000_QL80_.jpg",
    rating: 4.5,
  },
];
const books = [
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { title: "To Kill a Mockingbird", author: "Harper Lee" },
  { title: "1984", author: "George Orwell" },
  { title: "Moby-Dick", author: "Herman Melville" },
];
const HomePage = () => {
  const [search, setSearch] = useState("");


  return (
    <Box sx={{ height: "100vh", backgroundColor:"rgb(218, 191, 143)" }}>
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
      <IconButton color="inherit" component={Link} to="/settingspage">
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
          backgroundColor: "#FAF3E0",
          boxShadow: "8px 8px 8px rgba(192, 64, 0, 0.31)",
        }}
      >

        <TextField
          placeholder="Search for books..."
          variant="outlined"
          fullWidth
          sx={{ maxWidth: "95%", height: "40px",backgroundColor: "white",}}
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
      <Container maxWidth="xl" sx={{ mt: 1, px: 1 }}>
        <Typography variant="h5" sx={{ fontWeight: "bold", textAlign: "center", mb: 2,mt:3 }}>
          📢 Trending Books
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {trendingBooks.map((book, index) => (
            <Grid item xs={3} key={index}>
              <Card
                sx={{
                  maxWidth: 230,
                  margin: "auto",
                  boxShadow: "8px 8px 8px rgba(192, 64, 0, 0.31)",
                  borderRadius: '10px',
                  backgroundColor: "	#FFFFFF", 
                  border: "2px solid rgba(192, 64, 0, 0.49)",
                }}
              >
                <Link 
      to={`/books/${encodeURIComponent(book.title)}`}  // ✅ Pass book title as URL param
      style={{ textDecoration: "none", color: "inherit" }}
    >
                <CardMedia
                  component="img"
                  sx={{ height: 110, objectFit: "contain", padding: 1 }}
                  image={book.image}
                  alt={book.title}
                />
                <CardContent sx={{ textAlign: "center", padding: 1 }}>
                  <Typography variant="body2" fontWeight="bold">
                    {book.title}
                  </Typography>
                  <Typography variant="caption" sx={{ color: "black" }}>
                    {book.author}
                  </Typography>
                  <Typography>
                  <Rating value={book.rating} precision={0.1} readOnly sx={{ mt: 0.5 }} />
                  </Typography>
                  <Typography variant="caption" sx={{ fontWeight: "bold" }}>
                    {book.rating} / 5
                  </Typography>
                </CardContent>
              </Link>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default HomePage;
