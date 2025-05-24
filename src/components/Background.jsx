import React from 'react';
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

// Styled component for the pulsing background elements
const PulsingOrb = styled(Box)(({ size = 300, color = "#8b5cf6", delay = 0 }) => ({
  position: "absolute",
  width: size,
  height: size,
  borderRadius: "50%",
  background: `radial-gradient(circle, ${color}20 0%, transparent 70%)`,
  animation: "pulse 4s ease-in-out infinite",
  animationDelay: `${delay}s`,
  filter: "blur(80px)",
  pointerEvents: "none",
  opacity: 0.6,
  zIndex: 0,
  "@keyframes pulse": {
    "0%, 100%": { opacity: 0.3 },
    "50%": { opacity: 0.6 }
  }
}));

const Background = () => {
  return (
    <>
      {/* Background gradient orbs */}
      <PulsingOrb
        size={500}
        color="#8b5cf6"
        sx={{
          top: "5%",
          left: "5%",
        }}
      />
      <PulsingOrb
        size={600}
        color="#ec4899"
        delay={1}
        sx={{
          bottom: "10%",
          right: "5%",
        }}
      />
      <PulsingOrb
        size={400}
        color="#3b82f6"
        delay={0.5}
        sx={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
      <PulsingOrb
        size={300}
        color="#10b981"
        delay={1.5}
        sx={{
          top: "80%",
          left: "20%",
        }}
      />
      <PulsingOrb
        size={250}
        color="#f97316"
        delay={0.8}
        sx={{
          top: "10%",
          right: "15%",
        }}
      />
    </>
  );
};

export default Background;