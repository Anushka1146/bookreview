import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Typography, Box, Card, CardMedia, CardContent, IconButton, Rating, TextField, Button, Divider } from "@mui/material";
import { ThumbUp, ThumbDown, Comment, Send } from "@mui/icons-material";

const booksData = [
  {
    title: "The Psychology of Money",
    author: "Morgan Housel",
    image: "https://m.media-amazon.com/images/I/81Dky+tD+pL._AC_UF1000,1000_QL80_.jpg",
    rating: 4.7,
    description: "Timeless lessons on wealth, greed, and happiness through behavioral finance.",
    comments: [
      { user: "Alice", text: "Eye-opening! Money mindset is everything." },
      { user: "Bob", text: "A must-read for financial freedom." },
      { user: "Charlie", text: "Morgan Housel explains finance in a simple way!" },
      { user: "David", text: "This book changed my perspective on wealth." },
      { user: "Emma", text: "A great mix of psychology and finance principles." },
    ]
  },
  {
    title: "Your Money or Your Life",
    author: "Vicki Robin & Joe Dominguez",
    image: "https://m.media-amazon.com/images/I/71AL7FJJw3L.jpg",
    rating: 4.5,
    description: "Transform your relationship with money and live a financially independent life.",
    comments: [
      { user: "Charlie", text: "Helped me rethink spending habits!" },
      { user: "Dana", text: "A classic in personal finance." },
      { user: "Ethan", text: "Great for financial independence seekers." },
      { user: "Fiona", text: "Simple yet powerful principles." },
      { user: "George", text: "Must-read if you value financial freedom." },
    ]
  },
  {
    title: "Money: A Story of Humanity",
    author: "David McWilliams",
    image: "https://m.media-amazon.com/images/I/712qf5WTyIL._UF1000,1000_QL80_.jpg",
    rating: 4.3,
    description: "An engaging history of money and how it shaped human civilization.",
    comments: [
      { user: "Oliver", text: "A fascinating look at the history of money!" },
      { user: "Sophia", text: "Loved how it connects money to human evolution." },
      { user: "Liam", text: "This book changed how I see economics and society." },
      { user: "Emma", text: "A well-written, insightful read on finance." },
      { user: "Noah", text: "Great storytelling! Makes money history engaging." },
    ]
  },
  {
    title: "Financial Freedom",
    author: "Grant Sabatier",
    image: "https://m.media-amazon.com/images/I/611nGrWaqxL._AC_UF1000,1000_QL80_.jpg",
    rating: 4.6,
    description: "A step-by-step guide to achieving financial independence early in life.",
    comments: [
      { user: "Mia", text: "This book gave me a clear roadmap to financial independence!" },
      { user: "James", text: "A must-read for anyone serious about early retirement." },
      { user: "Sophia", text: "The strategies here are practical and life-changing!" },
      { user: "Benjamin", text: "Loved the focus on building multiple income streams." },
      { user: "Ava", text: "Grant Sabatier makes wealth-building feel achievable!" },
    ]
    
  },
  {
    title: "Going Infinite",
    author: "Michael Lewis",
    image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1684247487l/149105520.jpg",
    rating: 4.2,
    description: "A deep dive into the rise and fall of Sam Bankman-Fried.",
    comments: [
      { user: "Ethan", text: "A deep dive into high-stakes finance!" },
      { user: "Lily", text: "Michael Lewis never disappoints—brilliant storytelling!" },
      { user: "Daniel", text: "An eye-opener about the risks of financial ambition." },
      { user: "Sophia", text: "Loved the insights into hedge funds and big money." },
      { user: "Lucas", text: "A must-read for anyone interested in finance!" },
    ]
    
  },
  {
    title: "The Price of Inequality",
    author: "Joseph Stiglitz",
    image: "https://m.media-amazon.com/images/I/71UVXTnIk9L._AC_UF1000,1000_QL80_.jpg",
    rating: 4.4,
    description: "How economic inequality threatens democracy and progress.",
    comments: [
      { user: "Emma", text: "Stiglitz explains inequality like no one else!" },
      { user: "Oliver", text: "A powerful critique of the economic system." },
      { user: "Mia", text: "Eye-opening—makes you question modern capitalism!" },
      { user: "Jack", text: "Essential read for understanding wealth disparity." },
      { user: "Sophia", text: "Deep insights into how policies shape inequality." },
    ]
    
  },
  {
    title: "Dollars and Sense",
    author: "Dan Ariely & Jeff Kreisler",
    image: "https://m.media-amazon.com/images/I/71iMqi8d6IL._AC_UF1000,1000_QL80_.jpg",
    rating: 4.3,
    description: "Why we make bad financial decisions and how to fix them.",
    comments: [
      { user: "Alex", text: "This book completely changed how I view money." },
      { user: "Bella", text: "Loved the humor and research-backed insights!" },
      { user: "Chris", text: "A great guide to making smarter financial choices." },
      { user: "Diana", text: "I wish I had read this book sooner!" },
      { user: "Ethan", text: "The psychology of money is fascinating." },
    ],
  },
  {
    title: "Mind Over Money",
    author: "Claudia Hammond",
    image: "https://m.media-amazon.com/images/I/615DeDaWLwL._AC_UF1000,1000_QL80_.jpg",
    rating: 4.5,
    description: "Understanding the emotions behind our financial decisions.",
    comments: [
      { user: "Fiona", text: "A deep dive into the emotional side of money!" },
      { user: "George", text: "Loved the personal stories and research!" },
      { user: "Hannah", text: "So many valuable takeaways from this book." },
      { user: "Ian", text: "Financial psychology explained in a simple way." },
      { user: "Jenna", text: "An essential read for anyone struggling with money habits." },
    ],
  },
];

const BookPage = () => {
  const { title } = useParams();
  const book = booksData.find((b) => b.title === decodeURIComponent(title));

  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState(book ? book.comments : []);
  const [reply, setReply] = useState({ index: null, text: "" });

  const handleLike = () => setLikes(likes + 1);
  const handleDislike = () => setDislikes(dislikes + 1);

  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      setComments([...comments, { user: "Anonymous", text: newComment }]);
      setNewComment("");
    }
  };

  const handleReply = (index) => {
    if (reply.text.trim() !== "") {
      alert(`Your private reply to ${comments[index].user}: ${reply.text}`);
      setReply({ index: null, text: "" });
    }
  };

  if (!book) return <Typography variant="h5" color="white">Book Not Found</Typography>;

  return (
    <div style={{ backgroundColor:"rgba(234, 234, 158, 0.92)", height: "140vh", width: "100vw" }}>
    <Container maxWidth="md" sx={{ backgroundColor: "#C2B280", minHeight: "100vh", color: "black", paddingBottom: 4,border: "2px solid rgba(192, 64, 0, 0.49)",width: "100vw"  }}>
      <Box sx={{ mt: 4, p: 2, boxShadow: 3, borderRadius: 2, backgroundColor: "#F5F5DC", padding: 3 }}>
        <Card sx={{ display: "flex", mb: 3, backgroundColor: "#FFFFFF",border: "2px solid rgba(192, 64, 0, 0.49)" }}>
          <CardMedia component="img" sx={{ width: 150, objectFit: "contain", padding: 2 }} image={book.image} alt={book.title} />
          <CardContent>
            <Typography variant="h5" fontWeight="bold" color="black">{book.title}</Typography>
            <Typography variant="subtitle1" color="gray">{book.author}</Typography>
            <Typography sx={{ mt: 1, color: "black" }}>{book.description}</Typography>
            <Typography><Rating value={book.rating} precision={0.1} readOnly sx={{ mt: 1, color: "gold" }} /></Typography>
            <Typography variant="caption" sx={{ fontWeight: "bold" }}>
                                {book.rating} / 5
                              </Typography>
          </CardContent>
        </Card>

        {/* Like & Dislike Buttons */}
        <Box sx={{ display: "flex", gap: 2 }}>
          <IconButton onClick={handleLike} color="primary"><ThumbUp /></IconButton> <Typography color="black">{likes}</Typography>
          <IconButton onClick={handleDislike} color="secondary"><ThumbDown /></IconButton> <Typography color="black">{dislikes}</Typography>
        </Box>

        {/* Comments */}
        <Box sx={{ mt: 3, backgroundColor: "#C2B280", padding: 2, borderRadius: 2 ,border: "2px solid rgba(192, 64, 0, 0.49)"}}>
          {comments.map((comment, index) => (
            <Box key={index} sx={{ mt: 1, p: 1, backgroundColor: "#FFFFFF", borderRadius: 3,border: "2px solid rgba(192, 64, 0, 0.49)" }}>
              <Typography color="black"><b>{comment.user}:</b> {comment.text}</Typography>
              <IconButton onClick={() => setReply({ index, text: "" })} color="primary"><Comment /></IconButton>
            </Box>
          ))}
          <Box sx={{ display: "flex", mt: 2 ,backgroundColor : "white"}}>
            <TextField fullWidth label="Write a comment..." variant="outlined" value={newComment} onChange={(e) => setNewComment(e.target.value)} />
            <Button variant="contained" sx={{ ml: 1 }} onClick={handleAddComment}>Post</Button>
          </Box>
        </Box>
      </Box>
    </Container>
    </div>
  );
};

export default BookPage;
