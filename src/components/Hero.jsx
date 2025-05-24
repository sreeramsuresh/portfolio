import React from 'react';
import { Box, Container, Typography, Button, Grid, Paper, Avatar, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Code, Psychology } from "@mui/icons-material";

// Gradient text component
const GradientText = styled(Typography)({
  background: "linear-gradient(45deg, #8b5cf6 30%, #ec4899 90%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
});

// Styled components with direct animation definitions
const FloatingElement = styled(Box)(({ delay = 0 }) => ({
  animation: "float 3s ease-in-out infinite",
  animationDelay: `${delay}s`,
  "@keyframes float": {
    "0%, 100%": { transform: "translateY(0px)" },
    "50%": { transform: "translateY(-20px)" },
  },
}));

const Hero = ({ scrollToSection }) => {
  return (
    <Box 
      id="hero" 
      sx={{ 
        minHeight: "100vh", 
        display: "flex", 
        alignItems: "center",
        pt: 10
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} lg={6}>
            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" sx={{ color: "primary.main", mb: 2 }}>
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
                </Box>.
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
                  background: "linear-gradient(45deg, #8b5cf6, #ec4899)",
                  px: 4,
                  py: 1.5,
                  borderRadius: 25,
                }}
                onClick={() => scrollToSection("contact")}
              >
                Get In Touch
              </Button>
              <Button
                variant="outlined"
                size="large"
                sx={{ px: 4, py: 1.5, borderRadius: 25 }}
                onClick={() => scrollToSection("projects")}
              >
                View Projects
              </Button>
            </Stack>
          </Grid>

          <Grid item xs={12} lg={6}>
            <Box sx={{ display: "flex", justifyContent: "center", position: "relative" }}>
              {/* Character Illustration */}
              <Paper
                sx={{
                  width: 320,
                  height: 320,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(236, 72, 153, 0.2))",
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
                      background: "linear-gradient(135deg, #ffb74d, #ffa726)",
                      border: "2px solid rgba(255, 255, 255, 0.2)",
                      fontSize: 20,
                    }}
                  >
                    👨‍💻
                  </Avatar>
                </Paper>
              </Paper>

              {/* Floating elements */}
              <FloatingElement sx={{ position: "absolute", top: 40, left: -40 }}>
                <Paper
                  sx={{
                    width: 32,
                    height: 32,
                    background: "rgba(139, 92, 246, 0.2)",
                    border: "1px solid rgba(139, 92, 246, 0.3)",
                    borderRadius: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Code sx={{ color: "primary.main", fontSize: 16 }} />
                </Paper>
              </FloatingElement>

              <FloatingElement sx={{ position: "absolute", bottom: 40, right: -40, animationDelay: "1s" }}>
                <Paper
                  sx={{
                    width: 32,
                    height: 32,
                    background: "rgba(236, 72, 153, 0.2)",
                    border: "1px solid rgba(236, 72, 153, 0.3)",
                    borderRadius: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Psychology sx={{ color: "secondary.main", fontSize: 16 }} />
                </Paper>
              </FloatingElement>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;