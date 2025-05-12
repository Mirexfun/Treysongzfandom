
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <section className="hero-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-6xl font-bold text-white mb-6"
            >
              Meet Trey Songz
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/90 mb-8"
            >
              Experience an unforgettable moment with the R&B superstar
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Button 
                size="lg" 
                onClick={() => navigate("/booking")}
                className="bg-white text-primary hover:bg-white/90"
              >
                Book Your Meet & Greet
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="card-hover bg-white p-6 rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-bold mb-4">Meet & Greet</h3>
              <p className="text-gray-600">Personal one-on-one time with Trey Songz</p>
            </motion.div>

            <motion.div 
              className="card-hover bg-white p-6 rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-bold mb-4">VIP Experiences</h3>
              <p className="text-gray-600">Exclusive backstage access and special events</p>
            </motion.div>

            <motion.div 
              className="card-hover bg-white p-6 rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-bold mb-4">Charity Support</h3>
              <p className="text-gray-600">Support meaningful causes with your purchase</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Images</h2>
            <p className="text-gray-600">Moments captured with fans</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <img  alt="Trey Songz performing" src="https://images.unsplash.com/photo-1563837168-6eef1595aed9" />
            <img  alt="Meet and greet moment" src="https://images.unsplash.com/photo-1658344114218-86b2a3ac79c1" />
            <img  alt="Charity event" src="https://images.unsplash.com/photo-1584441405886-bc91be61e56a" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
