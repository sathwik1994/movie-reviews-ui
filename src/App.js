import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink, Link } from "react-router-dom";
import Review from "./Review";
import MovieCard from "./MovieCard";
import ShaShaRedem from "./shasharedem.jpeg";
import TheDarkKnight from "./TheDarkKnight.jpeg";
import TheGodfather from "./TheGodfather.jpeg";
import Slideshow from "./Slideshow";
import "./slide-show.css";
import Logo from "./logo.gif"

const reviews = [
  {
    id: 1,
    name: "The Shawshank Redemption",
    image: ShaShaRedem,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vestibulum volutpat faucibus.",
  },
  {
    id: 2,
    name: "The Godfather",
    image: TheGodfather,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vestibulum volutpat faucibus.",
  },
  {
    id: 3,
    name: "The Dark Knight",
    image: TheDarkKnight,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vestibulum volutpat faucibus.",
  },
  {
    id: 4,
    name: "The Shawshank Redemption",
    image: ShaShaRedem,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vestibulum volutpat faucibus.",
  },
  {
    id: 5,
    name: "The Godfather",
    image: TheGodfather,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vestibulum volutpat faucibus.",
  },
  {
    id: 6,
    name: "The Dark Knight",
    image: TheDarkKnight,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vestibulum volutpat faucibus.",
  },
  {
    id: 7,
    name: "The Shawshank Redemption",
    image: ShaShaRedem,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vestibulum volutpat faucibus.",
  },
  {
    id: 8,
    name: "The Godfather",
    image: TheGodfather,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vestibulum volutpat faucibus.",
  },
  {
    id: 9,
    name: "The Dark Knight",
    image: TheDarkKnight,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vestibulum volutpat faucibus.",
  },
  {
    id: 10,
    name: "The Shawshank Redemption",
    image: ShaShaRedem,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vestibulum volutpat faucibus.",
  },
  {
    id: 11,
    name: "The Godfather",
    image: TheGodfather,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vestibulum volutpat faucibus.",
  },
  {
    id: 12,
    name: "The Dark Knight",
    image: TheDarkKnight,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vestibulum volutpat faucibus.",
  },
  // add more reviews here
];

const imags = [ShaShaRedem, TheDarkKnight, TheGodfather];

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredReviews = reviews.filter((review) =>
    review.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const slideShow = filteredReviews.slice(0, 6);

  return (
    <Router>
      <div style={{ height: "100%", margin:"20px" }}>
        <header style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "70px", marginTop: "10px" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Link to="/" style={{ display: "flex", alignItems: "center" }}>
              <img src={Logo} alt="Logo" style={{ width: "70px", height: "70px" }} />
            </Link>
            <h1 style={{ margin: "0 0 0 10px" }}>bestreviews.com</h1>
          </div>
          <input
            style={{ width: "20%", height: "30px", marginRight: "40px" }}
            type="text"
            placeholder="Search movies"
            value={searchTerm}
            onChange={handleChange}
          />
        </header>

        <nav style={{ display: "flex", justifyContent: "space-evenly", height: "30px", backgroundColor: "lightgrey" }}>
          <NavLink to="/" activeStyle={{ fontWeight: "bold", color: "black", textDecoration: "none" }} style={{ fontWeight: "bold", color: "black", textDecoration: "none" }}>Home</NavLink>
          <NavLink to="/collections" activeStyle={{ fontWeight: "bold", color: "black", textDecoration: "none" }} style={{ fontWeight: "bold", color: "black", textDecoration: "none" }}>Movie Collections</NavLink>
          <NavLink to="/language" activeStyle={{ fontWeight: "bold", color: "black", textDecoration: "none" }} style={{ fontWeight: "bold", color: "black", textDecoration: "none" }}>Language</NavLink>
          <NavLink to="/reviews" activeStyle={{ fontWeight: "bold", color: "black", textDecoration: "none" }} style={{ fontWeight: "bold", color: "black", textDecoration: "none" }}>Reviews</NavLink>
        </nav>



        <Slideshow images={imags} />
        <Routes>
          <Route path="/" element={<div className="container">
            <div className="slide-show" style={{ display: "flex", flexWrap: "wrap" }}>
              {filteredReviews.map((review) => (
                <div key={review.id} style={{ width: "25%", padding: "10px" }}>
                  <Review review={review} />
                </div>
              ))}
            </div>
          </div>} />
          <Route path="/collections" element={<div>Movie Collections</div>} />
          <Route path="/language" element={<div>Language</div>} />
          <Route path="/reviews" element={<div>Reviews</div>} />
          <Route path="/review/:id" element={<Review />} />
        </Routes>

        <footer style={{ marginTop: "50px", textAlign: "center", borderTop: "1px solid #ccc", paddingTop: "20px" }}>
          <p>Contact Info: 1234 Main St, Anytown USA 12345 | Phone: 555-555-5555 | Email: info@bestreviews.com</p>
          <p>&copy; {new Date().getFullYear()} BestReviews.com. All Rights Reserved.</p>
          <p><Link to="/privacy-policy">Privacy Policy</Link> | <Link to="/terms-of-use">Terms of Use</Link></p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
