import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  Grid,
  Card,
  CardContent,
  Chip,
  Button,
  IconButton,
  Avatar,
  Paper,
  LinearProgress,
  Fab,
  ThemeProvider,
  CssBaseline,
  Stack,
  Divider,
} from "@mui/material";
import { styled, createTheme } from "@mui/material/styles";

import {
  Code,
  Computer,
  Phone,
  Psychology,
  Email,
  GitHub,
  LinkedIn,
  Twitter,
  KeyboardArrowDown,
  Star,
  TrendingUp,
  Launch,
  Rocket,
  Business,
  Build,
  Settings,
} from "@mui/icons-material";

// Black and purple theme
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#000000",
      paper: "rgba(30, 30, 30, 0.6)",
    },
    primary: {
      main: "#9c27b0", // Purple
      light: "#bb86fc",
      dark: "#6a0080",
    },
    secondary: {
      main: "#7c4dff", // Light purple
      light: "#b47cff",
      dark: "#3f1dcb",
    },
    success: {
      main: "#00c853",
    },
    text: {
      primary: "#e2e2fa", // Soft purple-white
      secondary: "rgba(187, 134, 252, 0.6)", // Light purple with transparency
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      letterSpacing: "-0.025em",
    },
    h2: {
      fontWeight: 700,
      letterSpacing: "-0.025em",
    },
    h3: {
      fontWeight: 600,
      letterSpacing: "-0.02em",
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 500,
    },
    h6: {
      fontWeight: 500,
    },
    body1: {
      letterSpacing: "0.01em",
      lineHeight: 1.7,
    },
    body2: {
      letterSpacing: "0.01em",
      lineHeight: 1.5,
    },
    button: {
      textTransform: "none",
      fontWeight: 500,
      letterSpacing: "0.02em",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background:
            "linear-gradient(135deg, #000000 0%, #120024 50%, #000000 100%)",
          minHeight: "100vh",
          backgroundAttachment: "fixed",
          margin: 0,
          padding: 0,
          width: "100%",
          display: "block",
          overflowX: "hidden",
          overflowY: "visible",
        },
        "#root": {
          width: "100%",
          height: "100%",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: "rgba(15, 15, 25, 0.7)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(156, 39, 176, 0.1)",
          transition: "all 0.3s ease",
          borderRadius: "12px",
          "&:hover": {
            border: "1px solid rgba(156, 39, 176, 0.5)",
            transform: "translateY(-4px)",
            boxShadow: "0px 8px 30px rgba(124, 77, 255, 0.3)",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        outlinedPrimary: {
          borderColor: "rgba(156, 39, 176, 0.3)",
        },
        outlinedSecondary: {
          borderColor: "rgba(124, 77, 255, 0.3)",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: "rgba(0, 0, 0, 0.7)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(156, 39, 176, 0.2)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          background: "linear-gradient(45deg, #9c27b0, #7c4dff)",
          boxShadow: "0px 4px 10px rgba(156, 39, 176, 0.3)",
          "&:hover": {
            background: "linear-gradient(45deg, #6a0080, #3f1dcb)",
            boxShadow: "0px 6px 14px rgba(156, 39, 176, 0.5)",
          },
        },
        outlinedPrimary: {
          borderColor: "rgba(156, 39, 176, 0.5)",
          "&:hover": {
            backgroundColor: "rgba(156, 39, 176, 0.1)",
          },
        },
      },
    },
  },
});

// Styled components with direct animation definitions
const FloatingElement = styled(Box)({
  animation: "float 3s ease-in-out infinite",
  "@keyframes float": {
    "0%, 100%": { transform: "translateY(0px)" },
    "50%": { transform: "translateY(-20px)" },
  },
});

const SpinningElement = styled(Box)({
  animation: "spinSlow 20s linear infinite",
  "@keyframes spinSlow": {
    from: { transform: "rotate(0deg)" },
    to: { transform: "rotate(360deg)" },
  },
});

const PulsingOrb = styled(Box)({
  position: "absolute",
  borderRadius: "50%",
  filter: "blur(100px)",
  animation: "pulse 4s ease-in-out infinite",
  pointerEvents: "none",
  "@keyframes pulse": {
    "0%, 100%": { opacity: 0.15 },
    "50%": { opacity: 0.35 },
  },
});

const GradientText = styled(Typography)({
  background: "linear-gradient(45deg, #bb86fc, #7c4dff)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
});

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("home");

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with React.js, Node.js, and AWS deployment",
      tech: ["React.js", "Node.js", "MongoDB", "AWS"],
      status: "Production",
      impact: "40% faster load times",
      icon: "🛒",
    },
    {
      title: "Healthcare Management",
      description:
        "Mobile-first healthcare app with React Native and Python backend",
      tech: ["React Native", "Python", "PostgreSQL"],
      status: "Production",
      impact: "200+ daily users",
      icon: "🏥",
    },
    {
      title: "AI-Powered CRM",
      description:
        "Intelligent CRM system using Claude AI for automated workflows",
      tech: ["React.js", "Claude AI", "Python", "GitLab"],
      status: "POC",
      impact: "80% faster development",
      icon: "🤖",
    },
    {
      title: "FinTech Dashboard",
      description:
        "Real-time financial analytics dashboard with advanced charting",
      tech: ["React.js", "Node.js", "D3.js", "SonarQube"],
      status: "Production",
      impact: "99.9% uptime",
      icon: "📊",
    },
  ];

  const skills = [
    { name: "React.js", level: 95, icon: "⚛️" },
    { name: "Node.js", level: 90, icon: "🟢" },
    { name: "Python", level: 85, icon: "🐍" },
    { name: "React Native", level: 80, icon: "📱" },
    { name: "AWS", level: 85, icon: "☁️" },
    { name: "AI Integration", level: 90, icon: "🧠" },
  ];

  const experiences = [
    {
      company: "GigLabz Pvt Ltd",
      role: "Technical Lead",
      period: "Nov 2023 - Present",
      description: "Leading full-stack development with AI-enhanced workflows",
      icon: <Rocket />,
      achievements: [
        "12+ Production Projects",
        "7 Innovative POCs",
        "AI-Assisted Development",
      ],
    },
    {
      company: "Ernst & Young",
      role: "Advanced Analyst",
      period: "Mar 2019 - Nov 2023",
      description: "Contract lifecycle management and business automation",
      icon: <Business />,
      achievements: [
        "25+ CLM Projects",
        "Process Automation",
        "99.5% Client Satisfaction",
      ],
    },
    {
      company: "Touchstone Foundation",
      role: "Network Administrator",
      period: "Sep 2017 - Feb 2019",
      description: "Infrastructure management and system administration",
      icon: <Build />,
      achievements: [
        "850+ Services Monitoring",
        "Campus Wi-Fi Implementation",
        "Team Leadership",
      ],
    },
    {
      company: "CMS IT Services Pvt. Ltd.",
      role: "Product Support Engineer",
      period: "Aug 2015 - Sep 2017",
      description: "Enterprise project leadership and system implementations",
      icon: <Settings />,
      achievements: [
        "Team Manager Role",
        "Large-scale Implementations",
        "Multi-district Projects",
      ],
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "experience", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box
        sx={{
          position: "relative",
          minHeight: "100vh",
          width: "100%",
          overflowX: "hidden",
          overflowY: "auto",
        }}
      >
        {/* Animated Background Elements */}
        <PulsingOrb
          sx={{
            top: "5%",
            left: "5%",
            width: 300,
            height: 300,
            backgroundColor: "primary.main",
            opacity: 0.4,
            animationDelay: "0s",
          }}
        />
        <PulsingOrb
          sx={{
            bottom: "10%",
            right: "5%",
            width: 400,
            height: 400,
            backgroundColor: "secondary.main",
            opacity: 0.5,
            animationDelay: "1s",
          }}
        />
        <PulsingOrb
          sx={{
            top: "50%",
            left: "50%",
            width: 300,
            height: 300,
            backgroundColor: "#3f1dcb",
            opacity: 0.3,
            animationDelay: "0.5s",
            transform: "translate(-50%, -50%)",
          }}
        />
        <PulsingOrb
          sx={{
            top: "30%",
            right: "15%",
            width: 200,
            height: 200,
            backgroundColor: "#6a0080",
            opacity: 0.2,
            animationDelay: "1.5s",
          }}
        />

        {/* Navigation */}
        <AppBar position="fixed">
          <Toolbar>
            <GradientText
              variant="h4"
              sx={{ flexGrow: 0, fontWeight: "bold", mr: 4 }}
            >
              S
            </GradientText>
            <Box sx={{ flexGrow: 1 }} />
            <Stack
              direction="row"
              spacing={4}
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              {["Home", "About", "Experience", "Projects", "Contact"].map(
                (item) => (
                  <Button
                    key={item}
                    color={
                      activeSection === item.toLowerCase()
                        ? "primary"
                        : "inherit"
                    }
                    onClick={() => {
                      document
                        .getElementById(item.toLowerCase())
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    sx={{
                      color:
                        activeSection === item.toLowerCase()
                          ? "primary.main"
                          : "text.secondary",
                    }}
                  >
                    {item}
                  </Button>
                )
              )}
            </Stack>
          </Toolbar>
        </AppBar>

        {/* Hero Section */}
        <Box
          id="home"
          sx={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            pt: 8,
            width: "100%",
          }}
        >
          <Container maxWidth="lg">
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} lg={6}>
                <Box sx={{ mb: 4 }}>
                  <Typography
                    variant="h6"
                    sx={{ color: "primary.main", mb: 2 }}
                  >
                    Hello! I Am{" "}
                    <Box component="span" sx={{ color: "secondary.main" }}>
                      Sreeram S
                    </Box>
                  </Typography>
                  <Typography
                    variant="h2"
                    sx={{
                      fontWeight: "bold",
                      mb: 2,
                      fontSize: { xs: "2.5rem", md: "4rem" },
                    }}
                  >
                    A Technical Lead who
                  </Typography>
                  <Typography
                    variant="h2"
                    sx={{
                      fontWeight: "bold",
                      mb: 2,
                      fontSize: { xs: "2.5rem", md: "4rem" },
                    }}
                  >
                    Transforms ideas into
                  </Typography>
                  <GradientText
                    variant="h2"
                    sx={{
                      fontWeight: "bold",
                      mb: 2,
                      fontSize: { xs: "2.5rem", md: "4rem" },
                    }}
                  >
                    reality
                    <Box component="span" sx={{ color: "text.secondary" }}>
                      ...
                    </Box>
                  </GradientText>
                  <Typography
                    variant="h6"
                    sx={{ color: "text.secondary", mb: 4, maxWidth: 500 }}
                  >
                    Because if the code doesn't impress you, what else can?
                  </Typography>
                </Box>

                <Box sx={{ mb: 4 }}>
                  <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
                    I'm a Full-Stack Developer.
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{ color: "text.primary", mb: 2 }}
                  >
                    Currently, I'm a Technical Lead at{" "}
                    <Box component="span" sx={{ color: "primary.main" }}>
                      GigLabz
                    </Box>
                    .
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "text.secondary",
                      maxWidth: 600,
                      lineHeight: 1.7,
                    }}
                  >
                    A self-taught developer with AI-enhanced capabilities,
                    functioning in the industry for 9+ years now. I create
                    meaningful and delightful digital products that create an
                    equilibrium between user needs and business goals.
                  </Typography>
                </Box>

                <Stack direction="row" spacing={2}>
                  <Button
                    variant="contained"
                    size="large"
                    sx={{
                      background: "linear-gradient(45deg, #9c27b0, #7c4dff)",
                      px: 4,
                      py: 1.5,
                      borderRadius: 25,
                    }}
                    onClick={() =>
                      document
                        .getElementById("contact")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    Get In Touch
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    sx={{ px: 4, py: 1.5, borderRadius: 25 }}
                    onClick={() =>
                      document
                        .getElementById("projects")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    View Projects
                  </Button>
                </Stack>
              </Grid>

              <Grid item xs={12} lg={6}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    position: "relative",
                  }}
                >
                  {/* Character Illustration */}
                  <Paper
                    sx={{
                      width: 320,
                      height: 320,
                      borderRadius: "50%",
                      background:
                        "linear-gradient(135deg, rgba(156, 39, 176, 0.2), rgba(233, 30, 99, 0.2))",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      position: "relative",
                    }}
                  >
                    {/* Laptop */}
                    <Paper
                      sx={{
                        width: 120,
                        height: 80,
                        backgroundColor: "#424242",
                        borderRadius: 2,
                        border: "2px solid #616161",
                        position: "relative",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Paper
                        sx={{
                          width: 110,
                          height: 70,
                          backgroundColor: "#212121",
                          borderRadius: 1,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Typography
                          sx={{
                            color: "#4caf50",
                            fontSize: 12,
                            fontFamily: "monospace",
                          }}
                        >
                          {"<Code />"}
                        </Typography>
                      </Paper>

                      {/* Character head */}
                      <Avatar
                        sx={{
                          width: 48,
                          height: 48,
                          position: "absolute",
                          top: -32,
                          left: "50%",
                          transform: "translateX(-50%)",
                          background:
                            "linear-gradient(135deg, #ffb74d, #ffa726)",
                          border: "2px solid rgba(255, 255, 255, 0.2)",
                          fontSize: 20,
                        }}
                      >
                        👨‍💻
                      </Avatar>
                    </Paper>
                  </Paper>

                  {/* Floating elements */}
                  <FloatingElement
                    sx={{
                      position: "absolute",
                      top: 40,
                      left: -40,
                    }}
                  >
                    <Paper
                      sx={{
                        width: 32,
                        height: 32,
                        background: "rgba(156, 39, 176, 0.2)",
                        border: "1px solid rgba(156, 39, 176, 0.3)",
                        borderRadius: 2,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Code sx={{ color: "primary.main", fontSize: 16 }} />
                    </Paper>
                  </FloatingElement>

                  <FloatingElement
                    sx={{
                      position: "absolute",
                      bottom: 40,
                      right: -40,
                      animationDelay: "1s",
                    }}
                  >
                    <Paper
                      sx={{
                        width: 32,
                        height: 32,
                        background: "rgba(233, 30, 99, 0.2)",
                        border: "1px solid rgba(233, 30, 99, 0.3)",
                        borderRadius: 2,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Psychology
                        sx={{ color: "secondary.main", fontSize: 16 }}
                      />
                    </Paper>
                  </FloatingElement>
                </Box>
              </Grid>
            </Grid>

            <Box
              sx={{
                position: "absolute",
                bottom: 32,
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              <IconButton sx={{ color: "text.secondary" }}>
                <KeyboardArrowDown />
              </IconButton>
            </Box>
          </Container>
        </Box>

        {/* Experience Section */}
        <Box id="experience" sx={{ py: 10, position: "relative" }}>
          <Container maxWidth="lg">
            <Typography
              variant="h3"
              align="center"
              sx={{ mb: 8, fontWeight: "bold" }}
            >
              Work Experience
            </Typography>

            <Grid container spacing={4}>
              {experiences.map((exp, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <Card
                    sx={{
                      height: "100%",
                      width: "510px",
                      "@media all and (max-width: 767px)": {
                        width: "100%",
                      },
                      "@media all and (min-width: 768px) and (max-width: 899px)":
                        {
                          width: "350px",
                        },
                      "@media all and (min-width: 900px) and (max-width: 1279px)":
                        {
                          width: "420px",
                        },
                      "@media all and (min-width: 1280px) and (max-width: 1349px)":
                        {
                          width: "480px",
                        },
                      "@media all and (min-width: 1350px) and (max-width: 1650px)":
                        {
                          width: "510px",
                        },
                      "@media all and (min-width: 1651px)": {
                        width: "550px",
                      },
                    }}
                  >
                    <CardContent sx={{ p: 4 }}>
                      <Stack
                        direction="row"
                        spacing={2}
                        alignItems="flex-start"
                      >
                        <Avatar
                          sx={{ backgroundColor: "primary.main", fontSize: 24 }}
                        >
                          {exp.icon}
                        </Avatar>
                        <Box sx={{ flex: 1 }}>
                          <Typography
                            variant="h6"
                            sx={{ fontWeight: "bold", mb: 1 }}
                          >
                            {exp.company}
                          </Typography>
                          <Typography
                            variant="subtitle1"
                            sx={{
                              color: "primary.main",
                              fontWeight: 600,
                              mb: 1,
                            }}
                          >
                            {exp.role}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{ color: "text.secondary", mb: 2 }}
                          >
                            {exp.period}
                          </Typography>
                          <Typography variant="body1" sx={{ mb: 3 }}>
                            {exp.description}
                          </Typography>

                          <Stack spacing={1}>
                            {exp.achievements.map((achievement, achIndex) => (
                              <Stack
                                direction="row"
                                spacing={1}
                                alignItems="center"
                                key={achIndex}
                              >
                                <Box
                                  sx={{
                                    width: 6,
                                    height: 6,
                                    borderRadius: "50%",
                                    backgroundColor: "primary.main",
                                  }}
                                />
                                <Typography
                                  variant="body2"
                                  sx={{ color: "text.primary" }}
                                >
                                  {achievement}
                                </Typography>
                              </Stack>
                            ))}
                          </Stack>

                          <Button
                            variant="text"
                            color="primary"
                            sx={{ mt: 3, p: 0 }}
                            endIcon={<Launch />}
                          >
                            Learn More
                          </Button>
                        </Box>
                      </Stack>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>

            {/* Skills Section */}
            <Box sx={{ mt: 10, textAlign: "center" }}>
              <Typography
                variant="h6"
                sx={{ mb: 4, maxWidth: 600, mx: "auto" }}
              >
                I'm currently looking to join a{" "}
                <Box component="span" sx={{ color: "primary.main" }}>
                  cross-functional
                </Box>{" "}
                team that values improving people's lives through accessible
                design
              </Typography>

              <Stack
                direction="row"
                spacing={3}
                justifyContent="center"
                flexWrap="wrap"
                useFlexGap
              >
                {["⚛️", "🟢", "🐍", "🧠", "☁️", "📱"].map((icon, index) => (
                  <Paper
                    key={index}
                    sx={{
                      width: 48,
                      height: 48,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 24,
                      cursor: "pointer",
                      "&:hover": {
                        transform: "scale(1.1)",
                        transition: "transform 0.2s",
                      },
                    }}
                  >
                    {icon}
                  </Paper>
                ))}
              </Stack>
            </Box>
          </Container>
        </Box>

        {/* Projects Grid Section */}
        <Box id="projects" sx={{ py: 10, position: "relative" }}>
          <Container maxWidth="lg">
            {/* Orbital Animation */}
            <Box sx={{ display: "flex", justifyContent: "center", mb: 10 }}>
              <Box sx={{ position: "relative", width: 320, height: 320 }}>
                {/* Central logo */}
                <Paper
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 80,
                    height: 80,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #9c27b0, #7c4dff)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 32,
                    fontWeight: "bold",
                  }}
                >
                  S
                </Paper>

                {/* Orbiting elements */}
                <SpinningElement sx={{ position: "absolute", inset: 0 }}>
                  <Paper
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: 24,
                      height: 24,
                      background: "rgba(33, 150, 243, 0.3)",
                      border: "1px solid rgba(33, 150, 243, 0.5)",
                      borderRadius: 1,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Code sx={{ fontSize: 12, color: "#2196f3" }} />
                  </Paper>
                  <Paper
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: 24,
                      height: 24,
                      background: "rgba(76, 175, 80, 0.3)",
                      border: "1px solid rgba(76, 175, 80, 0.5)",
                      borderRadius: 1,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Computer sx={{ fontSize: 12, color: "#4caf50" }} />
                  </Paper>
                  <Paper
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: 0,
                      transform: "translateY(-50%)",
                      width: 24,
                      height: 24,
                      background: "rgba(156, 39, 176, 0.3)",
                      border: "1px solid rgba(156, 39, 176, 0.5)",
                      borderRadius: 1,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Psychology sx={{ fontSize: 12, color: "#9c27b0" }} />
                  </Paper>
                  <Paper
                    sx={{
                      position: "absolute",
                      top: "50%",
                      right: 0,
                      transform: "translateY(-50%)",
                      width: 24,
                      height: 24,
                      background: "rgba(233, 30, 99, 0.3)",
                      border: "1px solid rgba(233, 30, 99, 0.5)",
                      borderRadius: 1,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Phone sx={{ fontSize: 12, color: "#e91e63" }} />
                  </Paper>
                </SpinningElement>
              </Box>
            </Box>

            <Typography
              variant="h3"
              align="center"
              sx={{ mb: 8, fontWeight: "bold" }}
            >
              Featured Projects
            </Typography>

            <Grid container spacing={4}>
              {projects.map((project, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <Card sx={{ height: "100%", cursor: "pointer" }}>
                    <CardContent sx={{ p: 4 }}>
                      <Stack
                        direction="row"
                        spacing={2}
                        alignItems="flex-start"
                        sx={{ mb: 3 }}
                      >
                        <Typography sx={{ fontSize: "2rem" }}>
                          {project.icon}
                        </Typography>
                        <Box sx={{ flex: 1 }}>
                          <Stack
                            direction="row"
                            justifyContent="space-between"
                            alignItems="flex-start"
                            sx={{ mb: 2 }}
                          >
                            <Typography
                              variant="h6"
                              sx={{ fontWeight: "bold" }}
                            >
                              {project.title}
                            </Typography>
                            <Chip
                              label={project.status}
                              size="small"
                              color={
                                project.status === "Production"
                                  ? "success"
                                  : "warning"
                              }
                              variant="outlined"
                            />
                          </Stack>
                          <Typography
                            variant="body2"
                            sx={{ color: "text.secondary", mb: 2 }}
                          >
                            {project.description}
                          </Typography>
                          <Stack
                            direction="row"
                            spacing={1}
                            sx={{ mb: 2, flexWrap: "wrap" }}
                          >
                            {project.tech.map((tech, techIndex) => (
                              <Chip
                                key={techIndex}
                                label={tech}
                                size="small"
                                variant="outlined"
                                sx={{ mb: 1 }}
                              />
                            ))}
                          </Stack>
                          <Stack
                            direction="row"
                            alignItems="center"
                            spacing={1}
                          >
                            <TrendingUp
                              sx={{ color: "success.main", fontSize: 16 }}
                            />
                            <Typography
                              variant="body2"
                              sx={{ color: "success.main", fontWeight: 600 }}
                            >
                              {project.impact}
                            </Typography>
                          </Stack>
                        </Box>
                      </Stack>

                      <Button
                        variant="text"
                        color="primary"
                        startIcon={<Launch />}
                        sx={{ mt: 2 }}
                      >
                        View Details
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>

            <Box sx={{ textAlign: "center", mt: 6 }}>
              <Typography
                variant="body1"
                sx={{ color: "text.secondary", mb: 2 }}
              >
                <Box
                  component="span"
                  sx={{ color: "primary.main", fontWeight: "bold" }}
                >
                  12
                </Box>{" "}
                Production Projects |{" "}
                <Box
                  component="span"
                  sx={{ color: "secondary.main", fontWeight: "bold" }}
                >
                  7
                </Box>{" "}
                POCs Delivered
              </Typography>
              <Button
                variant="contained"
                sx={{
                  background: "linear-gradient(45deg, #9c27b0, #7c4dff)",
                  px: 4,
                  py: 1.5,
                  borderRadius: 25,
                }}
              >
                View All Projects
              </Button>
            </Box>
          </Container>
        </Box>

        {/* Featured Project */}
        <Box
          sx={{
            py: 10,
            position: "relative",
            backgroundColor: "rgba(20, 10, 40, 0.2)",
          }}
        >
          <Container maxWidth="lg">
            <Grid container spacing={6} alignItems="center">
              <Grid item xs={12} lg={6}>
                <Typography
                  variant="subtitle1"
                  sx={{ color: "primary.main", mb: 2 }}
                >
                  Featured Project
                </Typography>
                <Typography variant="h3" sx={{ fontWeight: "bold", mb: 3 }}>
                  AI-Enhanced Development Platform
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ color: "text.primary", mb: 4, lineHeight: 1.7 }}
                >
                  A comprehensive development platform that leverages Claude AI
                  and Cursor AI to accelerate full-stack development. Features
                  rapid prototyping capabilities, automated code generation, and
                  intelligent debugging assistance. Built with React.js,
                  Node.js, and modern DevOps practices.
                </Typography>

                <Stack direction="row" spacing={2} sx={{ mb: 4 }}>
                  <Paper
                    sx={{
                      width: 32,
                      height: 32,
                      background: "rgba(255, 255, 255, 0.1)",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      borderRadius: 2,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Star sx={{ color: "#ffeb3b", fontSize: 16 }} />
                  </Paper>
                  <Paper
                    sx={{
                      width: 32,
                      height: 32,
                      background: "rgba(255, 255, 255, 0.1)",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      borderRadius: 2,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Star sx={{ color: "#ffeb3b", fontSize: 16 }} />
                  </Paper>
                </Stack>
              </Grid>

              <Grid item xs={12} lg={6}>
                <Card
                  sx={{
                    background:
                      "linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    p: 4,
                  }}
                >
                  <Paper
                    sx={{
                      backgroundColor: "white",
                      borderRadius: 2,
                      p: 3,
                      boxShadow: 4,
                    }}
                  >
                    <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                      <Box
                        sx={{
                          width: 12,
                          height: 12,
                          borderRadius: "50%",
                          backgroundColor: "#f44336",
                        }}
                      />
                      <Box
                        sx={{
                          width: 12,
                          height: 12,
                          borderRadius: "50%",
                          backgroundColor: "#ffeb3b",
                        }}
                      />
                      <Box
                        sx={{
                          width: 12,
                          height: 12,
                          borderRadius: "50%",
                          backgroundColor: "#4caf50",
                        }}
                      />
                    </Stack>
                    <Stack spacing={2}>
                      <Box
                        sx={{
                          height: 16,
                          backgroundColor: "#e0e0e0",
                          borderRadius: 1,
                          width: "75%",
                        }}
                      />
                      <Box
                        sx={{
                          height: 16,
                          backgroundColor: "#e0e0e0",
                          borderRadius: 1,
                          width: "50%",
                        }}
                      />
                      <Stack spacing={1}>
                        <Box
                          sx={{
                            height: 12,
                            backgroundColor: "#ce93d8",
                            borderRadius: 1,
                            width: "100%",
                          }}
                        />
                        <Box
                          sx={{
                            height: 12,
                            backgroundColor: "#ce93d8",
                            borderRadius: 1,
                            width: "67%",
                          }}
                        />
                      </Stack>
                      <Paper
                        sx={{
                          backgroundColor: "#f3e5f5",
                          borderRadius: 2,
                          p: 2,
                        }}
                      >
                        <Typography
                          variant="body2"
                          sx={{
                            color: "#424242",
                            fontFamily: "monospace",
                            mb: 1,
                          }}
                        >
                          AI-Powered Code Generation (95%)
                        </Typography>
                        <Box
                          sx={{
                            width: "100%",
                            backgroundColor: "#e0e0e0",
                            borderRadius: 1,
                            height: 8,
                          }}
                        >
                          <Box
                            sx={{
                              width: "95%",
                              backgroundColor: "#9c27b0",
                              height: 8,
                              borderRadius: 1,
                            }}
                          />
                        </Box>
                      </Paper>
                    </Stack>
                  </Paper>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Skills Progress Section */}
        <Box sx={{ py: 10, backgroundColor: "rgba(10, 5, 20, 0.3)" }}>
          <Container maxWidth="md">
            <Typography
              variant="h4"
              align="center"
              sx={{ mb: 6, fontWeight: "bold" }}
            >
              Technical Skills
            </Typography>

            <Grid container spacing={4}>
              {skills.map((skill, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Card sx={{ p: 3 }}>
                    <Stack
                      direction="row"
                      alignItems="center"
                      spacing={2}
                      sx={{ mb: 2 }}
                    >
                      <Typography sx={{ fontSize: "1.5rem" }}>
                        {skill.icon}
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{ fontWeight: "bold", flex: 1 }}
                      >
                        {skill.name}
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{ color: "primary.main", fontWeight: "bold" }}
                      >
                        {skill.level}%
                      </Typography>
                    </Stack>
                    <LinearProgress
                      variant="determinate"
                      value={skill.level}
                      sx={{
                        height: 8,
                        borderRadius: 4,
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                        "& .MuiLinearProgress-bar": {
                          background:
                            "linear-gradient(45deg, #9c27b0, #7c4dff)",
                          borderRadius: 4,
                        },
                      }}
                    />
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* Contact Section */}
        <Box id="contact" sx={{ py: 10, position: "relative" }}>
          <Container maxWidth="md">
            <Box sx={{ textAlign: "center" }}>
              <Typography variant="h3" sx={{ fontWeight: "bold", mb: 4 }}>
                Contact
              </Typography>
              <Typography
                variant="h6"
                sx={{ color: "text.primary", mb: 2, maxWidth: 600, mx: "auto" }}
              >
                I'm currently looking to join a cross-functional team that
                values improving people's lives through accessible design, or
                have a project in mind? Let's connect.
              </Typography>

              <Box sx={{ mb: 6 }}>
                <Button
                  variant="text"
                  color="primary"
                  href="mailto:sreeramsuresh@gmail.com"
                  sx={{ fontSize: "1.2rem", textDecoration: "none" }}
                >
                  sreeramsuresh@gmail.com
                </Button>
              </Box>

              <Stack direction="row" spacing={3} justifyContent="center">
                <IconButton
                  component="a"
                  href="#"
                  sx={{
                    width: 48,
                    height: 48,
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    "&:hover": {
                      border: "1px solid rgba(156, 39, 176, 0.5)",
                      backgroundColor: "rgba(156, 39, 176, 0.1)",
                    },
                  }}
                >
                  <GitHub sx={{ color: "text.secondary" }} />
                </IconButton>
                <IconButton
                  component="a"
                  href="#"
                  sx={{
                    width: 48,
                    height: 48,
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    "&:hover": {
                      border: "1px solid rgba(156, 39, 176, 0.5)",
                      backgroundColor: "rgba(156, 39, 176, 0.1)",
                    },
                  }}
                >
                  <Twitter sx={{ color: "text.secondary" }} />
                </IconButton>
                <IconButton
                  component="a"
                  href="#"
                  sx={{
                    width: 48,
                    height: 48,
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    "&:hover": {
                      border: "1px solid rgba(156, 39, 176, 0.5)",
                      backgroundColor: "rgba(156, 39, 176, 0.1)",
                    },
                  }}
                >
                  <LinkedIn sx={{ color: "text.secondary" }} />
                </IconButton>
              </Stack>
            </Box>
          </Container>
        </Box>

        {/* Footer */}
        <Box sx={{ py: 4, borderTop: "1px solid rgba(255, 255, 255, 0.1)" }}>
          <Container maxWidth="lg">
            <Typography
              variant="body2"
              align="center"
              sx={{ color: "text.secondary" }}
            >
              © 2024 Sreeram S. Crafted with Material-UI and modern web
              technologies.
            </Typography>
          </Container>
        </Box>

        {/* Floating Action Buttons */}
        <Stack
          spacing={2}
          sx={{
            position: "fixed",
            bottom: 24,
            right: 24,
            zIndex: 1000,
          }}
        >
          <Fab
            color="primary"
            aria-label="github"
            sx={{
              background: "linear-gradient(45deg, #9c27b0, #673ab7)",
              "&:hover": {
                background: "linear-gradient(45deg, #7b1fa2, #512da8)",
              },
            }}
          >
            <GitHub />
          </Fab>
          <Fab
            color="secondary"
            aria-label="email"
            component="a"
            href="mailto:sreeramsuresh@gmail.com"
            sx={{
              background: "linear-gradient(45deg, #7c4dff, #3f1dcb)",
              "&:hover": {
                background: "linear-gradient(45deg, #3f1dcb, #311b92)",
              },
            }}
          >
            <Email />
          </Fab>
        </Stack>
      </Box>
    </ThemeProvider>
  );
};

export default Portfolio;
