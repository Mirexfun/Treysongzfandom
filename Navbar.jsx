
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-white shadow-md"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-gray-900">Trey Songz</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link to="/booking">
              <Button variant="ghost">Book Meet & Greet</Button>
            </Link>
            <Link to="/vip">
              <Button variant="ghost">VIP Opportunities</Button>
            </Link>
            <Link to="/register">
              <Button variant="default">Register</Button>
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
