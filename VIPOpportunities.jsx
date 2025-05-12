
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const VIPOpportunities = () => {
  const { toast } = useToast();

  const handleVIPRequest = (package_) => {
    toast({
      title: "VIP Request Sent",
      description: `We'll contact you about the ${package_} package soon!`,
    });
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-4"
          >
            VIP Opportunities
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600"
          >
            Exclusive experiences with Trey Songz
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-4">Backstage Pass</h3>
            <img  alt="Backstage area" className="rounded-lg mb-4" src="https://images.unsplash.com/photo-1661782064299-7cbd37fefc9b" />
            <ul className="mb-6 space-y-2">
              <li>✓ Backstage access</li>
              <li>✓ Photo opportunity</li>
              <li>✓ Signed merchandise</li>
            </ul>
            <Button 
              onClick={() => handleVIPRequest("Backstage")}
              className="w-full"
            >
              Request Info
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-4">Studio Session</h3>
            <img  alt="Recording studio" className="rounded-lg mb-4" src="https://images.unsplash.com/photo-1566581478686-a797f6dc37e2" />
            <ul className="mb-6 space-y-2">
              <li>✓ Studio visit</li>
              <li>✓ Recording session viewing</li>
              <li>✓ Private performance</li>
            </ul>
            <Button 
              onClick={() => handleVIPRequest("Studio")}
              className="w-full"
            >
              Request Info
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-4">Private Event</h3>
            <img  alt="Private event space" className="rounded-lg mb-4" src="https://images.unsplash.com/photo-1696407254550-989e4543dc11" />
            <ul className="mb-6 space-y-2">
              <li>✓ Private performance</li>
              <li>✓ Meet & Greet</li>
              <li>✓ Custom experience</li>
            </ul>
            <Button 
              onClick={() => handleVIPRequest("Private")}
              className="w-full"
            >
              Request Info
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default VIPOpportunities;
