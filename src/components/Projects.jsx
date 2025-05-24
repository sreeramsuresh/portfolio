import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Chip, Button, Stack, Paper } from "@mui/material";
import { Launch, TrendingUp, Star } from "@mui/icons-material";
import { styled } from "@mui/material/styles";

// Styled component for the spinning elements
const SpinningElement = styled(Box)({
  animation: "spinSlow 20s linear infinite",
  "@keyframes spinSlow": {
    from: { transform: "rotate(0deg)" },
    to: { transform: "rotate(360deg)" },
  },
});

const Projects = () => {
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

  return (
    <>
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
                  background: "linear-gradient(135deg, #8b5cf6, #ec4899)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 32,
                  fontWeight: "bold",
                  zIndex: 1,
                }}
              >
                S
              </Paper>

              {/* Orbiting elements */}
              <SpinningElement sx={{ position: "absolute", inset: 0 }}>
                {["top", "bottom", "left", "right"].map((position, index) => {
                  const colors = [
                    { bg: "rgba(33, 150, 243, 0.3)", border: "rgba(33, 150, 243, 0.5)", text: "#2196f3" },
                    { bg: "rgba(76, 175, 80, 0.3)", border: "rgba(76, 175, 80, 0.5)", text: "#4caf50" },
                    { bg: "rgba(139, 92, 246, 0.3)", border: "rgba(139, 92, 246, 0.5)", text: "#8b5cf6" },
                    { bg: "rgba(236, 72, 153, 0.3)", border: "rgba(236, 72, 153, 0.5)", text: "#ec4899" }
                  ];
                  
                  const positionStyles = {
                    top: position === "top" ? 0 : "auto",
                    bottom: position === "bottom" ? 0 : "auto",
                    left: position === "left" ? 0 : position === "right" ? "auto" : "50%",
                    right: position === "right" ? 0 : "auto",
                    transform: 
                      position === "top" || position === "bottom" 
                        ? "translateX(-50%)" 
                        : position === "left" || position === "right" 
                          ? "translateY(-50%)" 
                          : "none",
                  };
                  
                  return (
                    <Paper
                      key={position}
                      sx={{
                        position: "absolute",
                        ...positionStyles,
                        width: 24,
                        height: 24,
                        background: colors[index].bg,
                        border: `1px solid ${colors[index].border}`,
                        borderRadius: 1,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    />
                  );
                })}
              </SpinningElement>
            </Box>
          </Box>

          <Typography variant="h3" align="center" sx={{ mb: 8, fontWeight: "bold" }}>
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
                background: "linear-gradient(45deg, #8b5cf6, #ec4899)",
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
      
      {/* Featured Project Section */}
      <Box sx={{ py: 10, backgroundColor: "rgba(15, 15, 35, 0.5)" }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} lg={6}>
              <Typography variant="subtitle1" sx={{ color: "primary.main", mb: 2 }}>
                Featured Project
              </Typography>
              <Typography variant="h3" sx={{ fontWeight: "bold", mb: 3 }}>
                AI-Enhanced Development Platform
              </Typography>
              <Typography variant="h6" sx={{ color: "text.primary", mb: 4, lineHeight: 1.7 }}>
                A comprehensive development platform that leverages Claude AI
                and Cursor AI to accelerate full-stack development. Features
                rapid prototyping capabilities, automated code generation, and
                intelligent debugging assistance.
              </Typography>

              <Stack direction="row" spacing={2} sx={{ mb: 4 }}>
                {[1, 2].map((star) => (
                  <Paper
                    key={star}
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
                ))}
              </Stack>
            </Grid>

            <Grid item xs={12} lg={6}>
              <Card sx={{
                background: "linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                p: 4,
              }}>
                <Paper sx={{
                  backgroundColor: "white",
                  borderRadius: 2,
                  p: 3,
                  boxShadow: 4,
                }}>
                  <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                    {["#f44336", "#ffeb3b", "#4caf50"].map((color, i) => (
                      <Box
                        key={i}
                        sx={{
                          width: 12,
                          height: 12,
                          borderRadius: "50%",
                          backgroundColor: color,
                        }}
                      />
                    ))}
                  </Stack>
                  <Stack spacing={2}>
                    {[75, 50].map((width, i) => (
                      <Box
                        key={i}
                        sx={{
                          height: 16,
                          backgroundColor: "#e0e0e0",
                          borderRadius: 1,
                          width: `${width}%`,
                        }}
                      />
                    ))}
                    <Stack spacing={1}>
                      {[100, 67].map((width, i) => (
                        <Box
                          key={i}
                          sx={{
                            height: 12,
                            backgroundColor: "#ce93d8",
                            borderRadius: 1,
                            width: `${width}%`,
                          }}
                        />
                      ))}
                    </Stack>
                    <Paper sx={{
                      backgroundColor: "#f3e5f5",
                      borderRadius: 2,
                      p: 2,
                    }}>
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
                      <Box sx={{
                        width: "100%",
                        backgroundColor: "#e0e0e0",
                        borderRadius: 1,
                        height: 8,
                      }}>
                        <Box sx={{
                          width: "95%",
                          backgroundColor: "#9c27b0",
                          height: 8,
                          borderRadius: 1,
                        }}/>
                      </Box>
                    </Paper>
                  </Stack>
                </Paper>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Projects;