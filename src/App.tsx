import { useState } from "react";
import "./App.css";
import {
  Card,
  CardContent,
  CardMedia,
  Container,
  CssBaseline,
  Grid,
  Paper,
  Switch,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";

function App() {
  // state to manage the dark mode
  const [toggleDarkMode, setToggleDarkMode] = useState(true);

  // function to toggle the dark mode ad true or false
  const toggleDarkTheme = () => {
    setToggleDarkMode(!toggleDarkMode);
  };

  // applying the primary and secondary theme colors
  const darkTheme = createTheme({
    palette: {
      // handle the dark mode state on toggle
      mode: toggleDarkMode ? "dark" : "light",
      primary: {
        main: "#27375A",
      },
      secondary: {
        main: "#02E7B8",
      },
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2>Toggle mode</h2>
        <Switch checked={toggleDarkMode} onChange={toggleDarkTheme} />
        {/* rendering the card component with card content */}
        <Card sx={{ width: "30%", borderRadius: 3, padding: 1 }}>
          <CardContent>
            <CardMedia
              sx={{ height: 180, borderRadius: 3 }}
              image="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg"
              title="semaphore"
            />
            <Typography variant="h4" component="div" sx={{ marginTop: 3 }}>
              Programming Blogs
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              by Semaphore
            </Typography>
            <Typography variant="body1">
              Checkout the latest blogs on Semaphore. Semaphore provides you the
              best CI/CD solution for high-performance engineering teams.
            </Typography>
          </CardContent>
        </Card>
      </div>
    </ThemeProvider>
  );
}

export default App;
