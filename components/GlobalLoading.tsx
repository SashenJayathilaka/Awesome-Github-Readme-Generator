"use client";

import { Box, LinearProgress, Paper, Toolbar } from "@mui/material";
import { motion } from "framer-motion";

type Props = {
  isLoading: boolean;
};

function GlobalLoading({ isLoading }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <Paper
        sx={{
          opacity: isLoading ? 1 : 0,
          pointerEvents: "none",
          transition: "all .3s ease",
          position: "fixed",
          width: "100vw",
          height: "100vh",
          zIndex: 999,
          background: "#060a33",
        }}
      >
        <br />
        <Toolbar />
        <LinearProgress />
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <div className="flex justify-center">
            <img
              src="https://www.dropbox.com/s/aklsvt4qfwm3num/1_ufCgi2UDlcFzeNsekK1dPA.webp?dl=1"
              alt="img"
              className="w-[300px] items-center"
            />
          </div>
          <p className="font-bold text-4xl text-white animate-pulse">
            Github Readme File Generator
          </p>
        </Box>
      </Paper>
    </motion.div>
  );
}

export default GlobalLoading;
