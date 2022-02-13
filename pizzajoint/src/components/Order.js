import React from "react";
import { motion } from "framer-motion";
import { containerVariants, childVarians } from "./animation/variants";

const Order = ({ pizza }) => {
  return (
    <motion.div
      className="container order"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h2>Thank you for your order :)</h2>
      <motion.p variants={childVarians}>
        You ordered a {pizza.base} pizza with:
      </motion.p>
      <motion.div variants={childVarians}>
        {pizza.toppings.map((topping) => (
          <div key={topping}>{topping}</div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Order;
