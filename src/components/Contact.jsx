import React from 'react';
import { Box, Container, Typography, Button, Stack, IconButton } from "@mui/material";
import { GitHub, Twitter, LinkedIn, Email } from "@mui/icons-material";

const Contact = () => {
  return (
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
            {[
              { icon: <GitHub />, href: "#" },
              { icon: <Twitter />, href: "#" },
              { icon: <LinkedIn />, href: "#" },
            ].map((social, index) => (
              <IconButton
                key={index}
                component="a"
                href={social.href}
                sx={{
                  width: 48,
                  height: 48,
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  "&:hover": {
                    border: "1px solid rgba(139, 92, 246, 0.5)",
                    backgroundColor: "rgba(139, 92, 246, 0.1)",
                  },
                }}
              >
                {social.icon}
              </IconButton>
            ))}
          </Stack>
        </Box>
      </Container>
      
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
        <IconButton
          color="primary"
          aria-label="github"
          component="a"
          href="#"
          sx={{
            width: 56,
            height: 56,
            background: "linear-gradient(45deg, #8b5cf6, #673ab7)",
            "&:hover": {
              background: "linear-gradient(45deg, #7b1fa2, #512da8)",
            },
          }}
        >
          <GitHub />
        </IconButton>
        <IconButton
          color="secondary"
          aria-label="email"
          component="a"
          href="mailto:sreeramsuresh@gmail.com"
          sx={{
            width: 56,
            height: 56,
            background: "linear-gradient(45deg, #ec4899, #ad1457)",
            "&:hover": {
              background: "linear-gradient(45deg, #c2185b, #880e4f)",
            },
          }}
        >
          <Email />
        </IconButton>
      </Stack>
    </Box>
  );
};

export default Contact;