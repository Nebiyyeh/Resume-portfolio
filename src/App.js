import { Container, Grid } from "@mui/material";
import "./App.css";
import Profile from "./components/profile/Profile";
import Header from "./components/header/Header";
import Portfolio from "./pages/portfolio/Portfolio";
import Resume from "./pages/resume/Resume";
import Footer from "./components/footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Container>
      <Grid container>
        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          lg={3}
          style={{ backgroundColor: "blue" }}
        >
          <Profile />
        </Grid>
        <Grid item xs style={{ backgroundColor: "red" }}>
          <Header />
          <Router>
            <Routes>
            <Route path="/portfolio" element={<Portfolio/>} />
      
            <Route path="/" element={<Resume />} />
            </Routes>

          </Router>
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
