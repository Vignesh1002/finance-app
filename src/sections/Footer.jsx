const Footer = () => {
  return (
    <footer className="bg-[#4D505B] text-gray-300 py-10">
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="flex flex-wrap justify-center md:justify-between items-start space-y-6 md:space-y-0">
          {/* Logo and Social Media */}
          <div className="flex flex-col items-center w-full md:w-auto md:block">
            <img src="assets/footer-logo.png" alt="logo" className="w-[12rem]"/>
            <h2 className="font-semibold text-lg text-white text-left below-450:text-base">Need help?</h2>
            <p className="text-[1rem] mt-1">
              Ask <a href="mailto:support@valueglance.com" className="text-white underline">support@valueglance.com</a>
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-16">
            <div>
              <h2 className="font-semibold text-lg below-450:text-sm text-white">Product</h2>
              <ul className="mt-2 space-y-1 text-sm">
                <li>About</li>
                <li>Features</li>
                <li>Price</li>
              </ul>
            </div>
            <div>
              <h2 className="font-semibold text-lg below-450:text-sm text-white">Legal & Privacy</h2>
              <ul className="mt-2 space-y-1 text-sm">
                <li>Privacy</li>
                <li>Terms</li>
              </ul>
            </div>
            <div>
              <h2 className="font-semibold text-lg below-450:text-sm text-white">More</h2>
              <ul className="mt-2 space-y-1 text-sm">
                <li>Book</li>
                <li>Affiliates</li>
                <li>Blog</li>
              </ul>
            </div>
            <div>
              <h2 className="font-semibold text-lg below-450:text-sm text-white">Help</h2>
              <ul className="mt-2 space-y-1 text-sm">
                <li>FAQ</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-[#676666]"></div>

        {/* Newsletter Section */}
        <div className="flex flex-wrap justify-center md:justify-between items-center">
          <div>
            <h2 className="font-semibold text-lg text-white">Subscribe to our free newsletter</h2>
            <p className="text-sm mt-1">The latest investing insights, tips to implement the strategy, and promotional offers.</p>
          </div>
          <div className="mt-4 md:mt-0">
            <button className="px-4 py-2 bg-white text-black rounded-md font-medium">
              Subscribe
            </button>
          </div>
        </div>

        <div className="my-8 border-t border-[#676666]"></div>

        {/* Bottom Section */}
        <div className="mt-8 text-center text-sm text-gray-400">
          © 2024 ValueGlance. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
