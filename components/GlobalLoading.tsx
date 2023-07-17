"use client";

import { Box, LinearProgress, Paper, Toolbar } from "@mui/material";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

type Props = {
  isLoading: boolean;
};

function GlobalLoading({ isLoading }: Props) {
  const { resolvedTheme } = useTheme();

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
          background: resolvedTheme === "dark" ? "#060a33" : "#F5F5F5",
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
              src="https://dl.dropboxusercontent.com/scl/fi/n38m6skphjqktvxruhed7/5b85ea21472c504d5e2b8257fae9.png?rlkey=05tm180nt0qfxk35hxk9fisp2&dl=0"
              alt="img"
              className="w-[300px] items-center"
            />
          </div>
          <p className="font-bold text-4xl text-gray-900 dark:text-white animate-pulse">
            Github Readme File Generator
          </p>
        </Box>
      </Paper>
    </motion.div>
  );
}

export default GlobalLoading;
