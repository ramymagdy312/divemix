import React from "react";
import ContactForm from "../components/ContactForm";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-12 text-center">Contact Us</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Phone className="h-6 w-6 text-cyan-600" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-cyan-600" />
                <span>info@divemix.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="h-6 w-6 text-cyan-600" />
                <span>123 Tech Drive, Innovation City</span>
              </div>
            </div>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
