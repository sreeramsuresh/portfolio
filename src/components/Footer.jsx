import React from 'react';
import { Box, Container, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ py: 4, borderTop: "1px solid rgba(255, 255, 255, 0.1)" }}>
      <Container maxWidth="lg">
        <Typography variant="body2" align="center" sx={{ color: "text.secondary" }}>
          © {new Date().getFullYear()} Sreeram S. Crafted with Material-UI and modern web technologies.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;