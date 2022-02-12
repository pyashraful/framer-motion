import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="home container">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ fontSize: 50, opacity: 1, scale: 1 }}
        transition={{ duration: 1.75, type: "spring", stiffness: 200 }}
      >
        Welcome to Pizza Joint
      </motion.h2>
      <Link to="/base">
        <button>Create Your Pizza</button>
      </Link>
    </div>
  );
};

export default Home;
