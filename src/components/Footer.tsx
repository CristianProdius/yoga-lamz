interface FooterProps {
  currentYear?: number;
}

const Footer: React.FC<FooterProps> = ({ currentYear = 2024 }) => {
  return (
    <footer className="bg-[#DBE5DB] px-8 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr,1fr,1fr] gap-12">
          {/* Newsletter Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-medium">Fitness™</h2>
            <p className="text-gray-700">
              Join our newsletter to stay up to date on features and releases.
            </p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent border-b border-black/20 pb-2 focus:outline-none focus:border-black/40"
              />
              <button className="bg-[#1B392A] text-white px-6 py-2 rounded-full">
                Subscribe
              </button>
            </form>
            <p className="text-sm text-gray-600">
              By subscribing you agree to with our Privacy Policy and provide
              consent to receive updates from our company.
            </p>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-medium mb-4">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:opacity-70">
                  Yoga Classes
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-70">
                  Fitness Training
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-70">
                  Wellness Workshops
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-70">
                  Personalized Coaching
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-medium mb-4">Follow Us</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:opacity-70">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-70">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-70">
                  X
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-70">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mt-16 pt-8 border-t border-black/10">
          <div className="text-sm text-gray-600">
            © {currentYear} All rights reserved. Fitness™
          </div>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-sm hover:opacity-70">
              Licensing
            </a>
            <a href="#" className="text-sm hover:opacity-70">
              Style Guide
            </a>
            <a href="#" className="text-sm hover:opacity-70">
              Back to top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
