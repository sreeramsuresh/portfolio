import React from 'react';
import { Box, Container, Typography, Grid, Card, Paper, Avatar } from "@mui/material";

const About = () => {
  return (
    <Box id="about" sx={{ py: 10, position: "relative" }}>
      <Container maxWidth="lg">
        <Typography variant="h3" align="center" sx={{ mb: 6, fontWeight: "bold" }}>
          About Me
        </Typography>
        
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box sx={{ position: 'relative' }}>
              <Paper
                elevation={4}
                sx={{
                  borderRadius: 4,
                  overflow: 'hidden',
                  height: 400,
                  position: 'relative',
                  background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
                  transform: 'rotate(-2deg)',
                  zIndex: 1,
                }}
              >
                <Box
                  sx={{
                    height: '100%',
                    width: '100%',
                    backgroundImage: 'url("https://placehold.co/400x400/6366f1/ffffff?text=S")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    mixBlendMode: 'overlay',
                    opacity: 0.8,
                  }}
                />
              </Paper>
              
              <Paper
                sx={{
                  position: 'absolute',
                  bottom: -20,
                  right: -20,
                  width: 180,
                  height: 180,
                  borderRadius: 2,
                  padding: 2,
                  backgroundColor: '#ffffff',
                  boxShadow: 4,
                  zIndex: 2,
                  transform: 'rotate(2deg)',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%',
                  }}
                >
                  <Typography variant="body2" sx={{ color: '#6366f1', fontWeight: 'bold', mb: 1 }}>
                    EXPERIENCE
                  </Typography>
                  <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#0f172a', mb: 1 }}>
                    9+
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#64748b', textAlign: 'center' }}>
                    Years in Software Development
                  </Typography>
                </Box>
              </Paper>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold', lineHeight: 1.3 }}>
              Full-Stack Developer with a passion for creating innovative solutions
            </Typography>
            
            <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary', lineHeight: 1.8 }}>
              I'm a technical professional with extensive experience across multiple domains. 
              My journey started with system administration and infrastructure management, 
              eventually transitioning into full-stack development where I found my true passion.
            </Typography>
            
            <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary', lineHeight: 1.8 }}>
              Having worked in both enterprise environments and agile startups, I bring a balanced 
              perspective to software development that values both robust engineering and innovative thinking.
              My recent focus has been on leveraging AI to enhance development workflows and create 
              more intelligent solutions for complex business problems.
            </Typography>
            
            <Grid container spacing={3} sx={{ mb: 4 }}>
              {[
                { number: "40+", label: "Projects Completed" },
                { number: "12", label: "Companies Worked With" },
                { number: "8", label: "Technologies Mastered" },
                { number: "3", label: "Countries Worked In" },
              ].map((stat, index) => (
                <Grid item xs={6} sm={3} key={index}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                      {stat.number}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {stat.label}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;