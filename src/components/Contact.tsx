"use client";
import { FC, FormEvent, useState } from "react";

const ContactSection: FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <section className="bg-[#f4f5f0] py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Image Gallery */}
          <div className="flex-1 relative">
            <div className="grid grid-cols-4 gap-4">
              <div className="col-span-2">
                <div className="aspect-square">
                  <img
                    src="/girl1.png"
                    alt="Yoga class"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              <div className="col-span-1 space-y-4">
                <div className="aspect-square">
                  <img
                    src="/girl1.png"
                    alt="Yoga pose"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="aspect-square">
                  <img
                    src="/girl1.png"
                    alt="Yoga pose"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              <div className="col-span-1 space-y-4">
                <div className="aspect-square">
                  <img
                    src="/girl1.png"
                    alt="Yoga pose"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="aspect-square">
                  <img
                    src="/girl1.png"
                    alt="Yoga pose"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="flex-1">
            <h2 className="text-6xl font-light mb-6">Get in touch.</h2>
            <p className="text-lg mb-12 max-w-xl">
              I want to help you overcome all mental and physical hurdles in
              your everyday life. 6 Years ago, I was electrocuted with 277
              volts.
            </p>

            <form onSubmit={handleSubmit} className="space-y-8 max-w-xl">
              <div>
                <input
                  type="email"
                  placeholder="Email (required)"
                  className="w-full py-3 bg-transparent border-b border-[#1a2e1a] focus:outline-none text-lg"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
              </div>
              <div>
                <textarea
                  placeholder="Message (required)"
                  rows={4}
                  className="w-full py-3 bg-transparent border-b border-[#1a2e1a] focus:outline-none text-lg resize-none"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-[#1a2e1a] text-white px-8 py-3 rounded-full text-lg hover:bg-opacity-90 transition-all"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
