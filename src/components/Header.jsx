import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Stack, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import { KeyboardArrowDown } from "@mui/icons-material";

// Gradient text component
const GradientText = styled(Typography)({
  background: "linear-gradient(45deg, #8b5cf6 30%, #ec4899 90%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
});

const Header = ({ activeSection, scrollToSection }) => {
  const navItems = ["hero", "about", "skills", "projects", "experience", "contact"];

  return (
    <AppBar 
      position="fixed" 
      elevation={0} 
      sx={{ 
        background: 'rgba(15, 15, 35, 0.8)',
        backdropFilter: 'blur(8px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
      }}
    >
      <Toolbar>
        <GradientText variant="h4" sx={{ flexGrow: 0, fontWeight: 700, mr: 4 }}>
          S
        </GradientText>
        <Box sx={{ flexGrow: 1 }} />
        <Stack 
          direction="row" 
          spacing={3} 
          sx={{ display: { xs: "none", md: "flex" } }}
        >
          {navItems.map((item) => (
            <Button
              key={item}
              onClick={() => scrollToSection(item)}
              sx={{
                color: activeSection === item ? "primary.main" : "text.secondary",
                fontWeight: 500,
                '&:hover': {
                  color: 'primary.light',
                }
              }}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Button>
          ))}
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;