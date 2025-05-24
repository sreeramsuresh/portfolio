import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Stack, Avatar, Button } from "@mui/material";
import { Launch, Rocket, Business, Build, Settings } from "@mui/icons-material";

const Experience = () => {
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

  return (
    <Box id="experience" sx={{ py: 10, position: "relative" }}>
      <Container maxWidth="lg">
        <Typography variant="h3" align="center" sx={{ mb: 8, fontWeight: "bold" }}>
          Work Experience
        </Typography>

        <Grid container spacing={4}>
          {experiences.map((exp, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card sx={{ height: "100%" }}>
                <CardContent sx={{ p: 4 }}>
                  <Stack direction="row" spacing={2} alignItems="flex-start">
                    <Avatar sx={{ backgroundColor: "primary.main", fontSize: 24 }}>
                      {exp.icon}
                    </Avatar>
                    <Box sx={{ flex: 1 }}>
                      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                        {exp.company}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        sx={{ color: "primary.main", fontWeight: 600, mb: 1 }}
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
                            <Typography variant="body2" sx={{ color: "text.primary" }}>
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
      </Container>
    </Box>
  );
};

export default Experience;