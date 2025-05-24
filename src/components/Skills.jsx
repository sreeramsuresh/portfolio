import React from 'react';
import { Box, Container, Typography, Grid, Card, LinearProgress, Stack, Paper } from "@mui/material";

const Skills = () => {
  const skills = [
    { name: "React.js", level: 95, icon: "⚛️" },
    { name: "Node.js", level: 90, icon: "🟢" },
    { name: "Python", level: 85, icon: "🐍" },
    { name: "React Native", level: 80, icon: "📱" },
    { name: "AWS", level: 85, icon: "☁️" },
    { name: "AI Integration", level: 90, icon: "🧠" },
  ];

  return (
    <Box id="skills" sx={{ py: 10, backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
      <Container maxWidth="md">
        <Typography variant="h4" align="center" sx={{ mb: 6, fontWeight: "bold" }}>
          Technical Skills
        </Typography>

        <Grid container spacing={4}>
          {skills.map((skill, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Card sx={{ p: 3 }}>
                <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 2 }}>
                  <Typography sx={{ fontSize: "1.5rem" }}>
                    {skill.icon}
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: "bold", flex: 1 }}>
                    {skill.name}
                  </Typography>
                  <Typography variant="h6" sx={{ color: "primary.main", fontWeight: "bold" }}>
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
                      background: "linear-gradient(45deg, #8b5cf6, #ec4899)",
                      borderRadius: 4,
                    },
                  }}
                />
              </Card>
            </Grid>
          ))}
        </Grid>
        
        <Box sx={{ mt: 10, textAlign: "center" }}>
          <Typography variant="h6" sx={{ mb: 4, maxWidth: 600, mx: "auto" }}>
            I'm currently looking to join a{" "}
            <Box component="span" sx={{ color: "primary.main" }}>
              cross-functional
            </Box>{" "}
            team that values improving people's lives through accessible design
          </Typography>

          <Stack
            direction="row"
            spacing={3}
            justifyContent="center"
            flexWrap="wrap"
            useFlexGap
            sx={{ mb: 4 }}
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
  );
};

export default Skills;