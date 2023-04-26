import "./App.css";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import { Toolbar, Button, Grid } from "@mui/material";
import React, { useRef, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { TypeAnimation } from "react-type-animation";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import "typeface-ibm-plex-serif";
import "typeface-ubuntu";
import "./App.scss";
import hljs from "highlight.js/lib/core";
import "highlight.js/styles/shades-of-purple.css";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

const AnimateText = ({ x, a }) => {
  const classes = useStyles;
  return (
    <Typography sx={classes.animatedText}>
      <TypeAnimation
        sequence={[x]}
        wrapper="span"
        cursor={a}
        repeat={0}
        speed={75}
        style={{ fontSize: "15", display: "inline-block" }}
      />
      {""}
    </Typography>
  );
};

const AnimatedLetters = ({ letterClass, strArray, idx }) => {
  return (
    <span>
      {strArray.map((char, i) => (
        <span key={char + i} className={`${letterClass} _${i + idx}`}>
          {char}
        </span>
      ))}
    </span>
  );
};
const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      light: "#8080B3",
      main: "#102050",
      dark: "#080637",
    },
    secondary: {
      light: "#ff7961",
      main: "#15357E",
      dark: "#ba000d",
      contrastText: "#000",
    },
    button: {
      light: "#ff7961",
      main: "#fff",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
});
const useStyles = {
  animatedText: {
    position: "relative",
    width: "fit-content",
    fontSize: "1.2rem",
    fontWeight: 10,
    overflow: "hidden",
    color: "#fff",
  },
  root: {
    flexGrow: 1,
  },
  toolbar: {
    justifyContent: "center",
    color: "#fff",
    fontFamily: "Ubuntu",
    backgroundColor: "#102050",
  },
  content: {
    padding: theme.spacing(3),
    color: "#fff",
    textAlign: "justify",
  },
  tab: {
    color: "#fff",
    textTransform: "none",
    fontFamily: "Courier new",
    fontWeight: "bold",
  },
  section: {
    minHeight: "84vh",
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    scrollSnapAlign: "start",
    justifyContent: "space-between",
    backgroundColor: "primary.main",
    padding: theme.spacing(3),
  },
  buttonBar: {
    position: "fixed",
    fontFamily: "Ubuntu",
    bottom: 0,
    width: "100vw",
    maxHeight: "10vh",
    padding: "10px",
    borderTop: "1px solid #ccc",
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
  },
};

function ButtonBar() {
  return (
    <Grid
      container
      spacing={2}
      justifyContent="center"
      backgroundColor="primary.dark"
      sx={useStyles.buttonBar}
    >
      <Grid item>
        <Button
          variant="outlined"
          color="button"
          sx={{ fontFamily: "Ubuntu" }}
          startIcon={<LinkedInIcon />}
          href="https://www.linkedin.com/in/ahmed-al-mudarris-11a5381bb/"
        >
          LinkedIn
        </Button>
      </Grid>
      <Grid item>
        <Button
          variant="outlined"
          color="button"
          sx={{ fontFamily: "Ubuntu" }}
          startIcon={<EmailIcon />}
          href="mailto:ahmed.almudarris@gmail.com"
        >
          Email
        </Button>
      </Grid>
    </Grid>
  );
}

function App() {
  const classes = useStyles;
  const [tabValue, setTabValue] = React.useState(1);
  const codeRef = useRef(null);
  const [sections, setSections] = React.useState([]);
  const [letterClass, setLetterClass] = useState("text-animate");
  const isSmallWebsite = window.innerWidth < 768;
  const steps = [
    "First Year",
    "Second Year",
    "Research",
    "Third Year",
    "Co-Op",
    "Fourth Year",
  ];
  React.useEffect(() => {
    hljs.highlightBlock(codeRef.current);
    setSections([
      document.querySelector("#section1"),
      document.querySelector("#section2"),
      document.querySelector("#section3"),
    ]);
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleTabClick = (index) => {
    sections[index].scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div sx={classes.root}>
      <ThemeProvider theme={theme}>
        <AppBar position="sticky" elevation={0} color="primary">
          <Toolbar sx={classes.toolbar} color="primary">
            <Tabs
              value={tabValue}
              onChange={handleTabChange}
              textColor="#fff"
              indicatorColor="primary"
            >
              <Tab
                sx={classes.tab}
                label="About Me"
                disableRipple
                onClick={() => handleTabClick(0)}
              />
              <Tab
                sx={classes.tab}
                label="Education"
                disableRipple
                onClick={() => handleTabClick(1)}
              />
              <Tab
                sx={classes.tab}
                disableRipple
                label="Experience"
                onClick={() => handleTabClick(2)}
              />
            </Tabs>
          </Toolbar>
        </AppBar>
        <Box sx={classes.section} id="section0">
          <Typography sx={classes.content}>
            <h1
              style={{
                fontFamily: "IBM Plex Serif",
                fontSize: "2rem",
              }}
            >
              <AnimatedLetters
                letterClass={letterClass}
                strArray={["H", "i", ",", " ", "I", " ", "a", "m"]}
                idx={15}
              />
            </h1>
            <h1
              style={{
                fontFamily: "IBM Plex Serif",
                fontSize: "3rem",
                fontWeight: "bold",
                textAlign: "left",
                fontStyle: "italic",
              }}
            >
              <AnimatedLetters
                letterClass={letterClass}
                strArray={
                  isSmallWebsite
                    ? ["Ahmed", <br />, "Al Mudarris"]
                    : [
                        "A",
                        "h",
                        "m",
                        "e",
                        "d",
                        " ",
                        "A",
                        "l",
                        " ",
                        "M",
                        "u",
                        "d",
                        "a",
                        "r",
                        "r",
                        "i",
                        "s",
                      ]
                }
                idx={17}
              />{" "}
            </h1>
            <TypeAnimation
              sequence={[
                "A Software development engineer in development...",
                "A Software development engineer.",
              ]}
              wrapper="span"
              cursor={true}
              repeat={0}
              speed={50}
              style={{
                fontFamily: "IBM Plex Serif",
                fontSize: "2rem",
                textAlign: "left",
              }}
            />
          </Typography>
        </Box>
        <Box sx={classes.section} id="section1">
          <Typography sx={classes.content}>
            <Box>
              <Box
                flexDirection={{ xs: "column", md: "row" }}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  justifyItems: "space-between",
                }}
              >
                <Box>
                  <h1
                    style={{
                      fontFamily: "IBM Plex Serif",
                      fontSize: "2.5rem",
                      fontStyle: "italic",
                    }}
                  >
                    <AnimatedLetters
                      letterClass={letterClass}
                      strArray={["E", "d", "u", "c", "a", "t", "i", "o", "n"]}
                      idx={8}
                    />
                  </h1>

                  <Typography sx={classes.animatedText}>
                    Dedicated and results-driven software engineer with a strong
                    work ethic, seeking to leverage a diverse technical skillset
                    and exceptional communication abilities. Demonstrates a
                    continuous pursuit of knowledge, adaptability, and growth
                    through collaborative learning and constructive feedback
                    from peers and co-workers. Offers proven expertise in
                    research, testing, and teaching, ensuring a comprehensive
                    understanding of various programming languages and
                    development methodologies.
                  </Typography>
                </Box>

                <img
                  src="ahmed.jpg"
                  alt="ahmed"
                  style={{
                    marginLeft: "30px",
                    marginTop: "20px",
                    borderRadius: "5%",
                    maxWidth: "400px",
                  }}
                  maxHeight={300}
                ></img>
              </Box>
              <p></p>
              <pre>
                <code ref={codeRef} className="javascript">
                  {`let Ahmed = {"Languages": ["Python", "Java", "C", "Go","JavaScript","SQL", "Haskell"],
             "Frameworks": ["ReactJS",
                            "Node.js"
                            "Android SDK",
                            "Fluttter",
                            "Microsoft Azure SQL",
                            "MongoDB",
                           ],
             "Principles": ["Databases",
                            "Object Oriented Programming",
                            "Web Development",
                            "Software Testing",
                            "Concurrent Systems",
                            "Functional Programming",
                            "Algorithms and Data Structures",
                           ],
             "Experiences": ["Software Development Engineer Intern",
                             "Research Assistant",
                             "Teaching Assistant",
                             "Web Development Team Coach",
                            ] }`}
                </code>
              </pre>{" "}
            </Box>
          </Typography>
        </Box>
        <Box sx={classes.section} id="section2">
          <Box
            flexDirection={{ xs: "column", md: "row" }}
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography sx={classes.content}>
              <h1
                style={{
                  fontFamily: "IBM Plex Serif",
                  fontSize: "2.5rem",
                  fontStyle: "italic",
                }}
              >
                <AnimatedLetters
                  letterClass={letterClass}
                  strArray={["E", "d", "u", "c", "a", "t", "i", "o", "n"]}
                  idx={8}
                />{" "}
              </h1>
              <AnimateText
                a={false}
                x="Mission: Studying Computer Science Co-Op"
              />
              <AnimateText a={false} x="Location: McMaster University" />
              <AnimateText a={false} x="Status: Currently Attending" />
              <AnimateText a={false} x="Current Score: 3.99 cGPA" />
              <AnimateText a={false} x="Expected Finish Date: 2025/04" />
              <AnimateText a={false} x="Awards Earned:" />
              <Typography component="ul">
                <AnimateText a={false} x="●	Provost Honour Roll (2021-2022)" />
                <AnimateText
                  a={false}
                  x="●	Dean's Honour List (2020-2021, 2021-2022)"
                />
                <AnimateText
                  a={false}
                  x="●	NSERC USRA research award (Summer 2022)"
                />
              </Typography>
            </Typography>
            <img
              src="mcmaster.jpeg"
              style={{
                height: "50%",
                width: "100%",
                marginTop: "20px",
                maxWidth: "400px",
                objectFit: "cover",
                mragin: "50px",
                borderRadius: "5%",
                maxHeight: "300px",
              }}
            ></img>
          </Box>

          <Box sx={{ width: "100%", marginTop: "40px" }}>
            <Stepper activeStep={4} alternativeLabel>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel
                    color="primary"
                    StepIconProps={{ style: { color: "#080637" } }}
                  >
                    {label}
                  </StepLabel>
                </Step>
              ))}
            </Stepper>
          </Box>
        </Box>
        <Box sx={classes.section} id="section3">
          <Typography sx={classes.content}>
            <h1
              style={{
                fontFamily: "IBM Plex Serif",
                fontSize: "2.5rem",
                fontStyle: "italic",
              }}
            >
              <AnimatedLetters
                letterClass={letterClass}
                strArray={["E", "x", "p", "e", "r", "i", "e", "n", "c", "e"]}
                idx={9}
              />
            </h1>
            <div>
              <h4>Software Development Engineer Intern</h4>
              <p>Amazon – Toronto, ON</p>
              <p>Upcoming: 05/2023</p>
            </div>
            <div>
              <h4>Teaching Assistant</h4>
              <p>McMaster University – Hamilton, ON</p>
              <p>01/2023 – NOW</p>
              <ul>
                <li>
                  Taught students the basics of Linux, Shell scripting, C and
                  git.
                </li>
                <li>
                  Supervised students' project using GitHub and server-side
                  development.
                </li>
              </ul>
            </div>
            <div>
              <h4>Web Development Team Coach</h4>
              <p>McMaster University – Hamilton, ON</p>
              <p>01/2023 – NOW</p>
              <ul>
                <li>
                  Supervised students' project in developing web applications.
                </li>
                <li>
                  Gave students instructions on designing web applications and
                  provided support in the development process.
                </li>
              </ul>
            </div>
            <div>
              <h4>Research Assistant</h4>
              <p>McMaster University – Hamilton, ON</p>
              <p>05/2022 – 09/2022</p>
              <ul>
                <li>
                  The research was primarily in graph term rewriting, focusing
                  on associative-commutative matching algorithms.
                </li>
                <li>
                  Gained experience in Algorithm optimization and working with
                  several data structures.
                </li>
                <li>
                  Gained extensive experience in research and documentation and
                  advanced my computational thinking skills.
                </li>
              </ul>
            </div>
            <div>
              <h4>Research Assistant</h4>
              <p>McMaster University – Hamilton, ON</p>
              <p>02/2022 – 04/2022</p>
              <ul>
                <li>
                  The research was focused on creating an algorithm for
                  correcting errors in scanning inner designs of micro
                  transistors in a computer processor.
                </li>
                <li>
                  Created suitable test cases for image processing software
                  testing with using Python, NumPy, SciPy and scikit-image.
                </li>
                <li>
                  Contributed to the algorithm design and provided insights on
                  the overall design and efficiency.
                </li>
              </ul>
            </div>
            <div>
              <h4>Teaching Assistant</h4>
              <p>McMaster University – Hamilton, ON</p>
              <p>01/2022 – 04/2022</p>
              <ul>
                <li>
                  Managed and supervised labs alongside other teaching
                  assistants.
                </li>
                <li>
                  Helped students learn the basics of web development and design
                  and assisted them in their projects.
                </li>
              </ul>
            </div>
          </Typography>
          <p></p>
        </Box>
        <ButtonBar />
      </ThemeProvider>
    </div>
  );
}

export default App;
