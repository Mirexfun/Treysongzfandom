
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const Booking = () => {
  const { toast } = useToast();
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [includeCharity, setIncludeCharity] = useState(false);
  const [customAmount, setCustomAmount] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [requestSent, setRequestSent] = useState(false);

  const handleBooking = async (e) => {
    e.preventDefault();
    
    try {
      if (!email || !name) {
        toast({
          title: "Error",
          description: "Please provide your name and email.",
          variant: "destructive",
        });
        return;
      }

      // Here we'll send the booking request
      const bookingData = {
        name,
        email,
        date: selectedDate,
        time: selectedTime,
        includeCharity,
        requestedAmount: customAmount || (includeCharity ? "249.99" : "199.99")
      };

      // For now, we'll simulate sending the request
      // In production, this would be an API call to your backend
      console.log("Booking request:", bookingData);
      
      setRequestSent(true);
      toast({
        title: "Request Sent Successfully",
        description: "We'll contact you with payment details shortly.",
      });

    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error processing your request. Please try again.",
        variant: "destructive",
      });
    }
  };

  if (requestSent) {
    return (
      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-8 rounded-lg shadow-lg text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Request Sent!</h2>
            <p className="text-lg text-gray-600 mb-6">
              Thank you for your interest in meeting Trey Songz. We'll review your request and contact you at {email} with payment details and next steps.
            </p>
            <Button
              onClick={() => setRequestSent(false)}
              className="mt-4"
            >
              Make Another Request
            </Button>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-8 rounded-lg shadow-lg"
        >
          <h2 className="text-3xl font-bold text-center mb-8">Book Your Meet & Greet</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <img alt="Meet and greet preview" className="rounded-lg" src="https://images.unsplash.com/photo-1658344114218-86b2a3ac79c1" />
              <div className="mt-4 p-4 bg-gray-50 rounded-md">
                <h3 className="text-lg font-medium mb-2">How it works:</h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-600">
                  <li>Fill out the booking request form</li>
                  <li>We'll review your request</li>
                  <li>You'll receive payment details via email</li>
                  <li>Confirm your booking by completing the payment</li>
                </ol>
              </div>
            </div>
            
            <div>
              <form onSubmit={handleBooking} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Preferred Time
                  </label>
                  <select
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                  >
                    <option value="">Choose a time</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="12:00">12:00 PM</option>
                    <option value="13:00">1:00 PM</option>
                    <option value="14:00">2:00 PM</option>
                  </select>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="charity"
                    className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                    checked={includeCharity}
                    onChange={(e) => setIncludeCharity(e.target.checked)}
                  />
                  <label htmlFor="charity" className="ml-2 block text-sm text-gray-900">
                    Include charity donation (+$50)
                  </label>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Suggested Amount
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-gray-500 sm:text-sm">$</span>
                    </div>
                    <input
                      type="number"
                      className="mt-1 block w-full pl-7 pr-12 rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                      placeholder="Enter suggested amount"
                      value={customAmount}
                      onChange={(e) => setCustomAmount(e.target.value)}
                    />
                  </div>
                  <p className="mt-1 text-sm text-gray-500">
                    Suggest your preferred amount or leave blank for standard pricing
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-md">
                  <h3 className="text-lg font-medium mb-2">Standard Pricing</h3>
                  <p className="text-2xl font-bold">
                    ${customAmount || (includeCharity ? "249.99" : "199.99")}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    Final price will be confirmed via email
                  </p>
                </div>

                <Button type="submit" className="w-full">
                  Submit Request
                </Button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Booking;
