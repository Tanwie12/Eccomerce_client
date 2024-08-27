import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 m-4 text-gray-200 py-8 px-2">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h4 className="font-bold mb-4">Mac</h4>
          <ul>
            <li className="mb-2"><a href="#" className="text-gray-400">About Mac</a></li>
            <li className="mb-2"><a href="#" className="text-gray-400">Our team, Quickler</a></li>
            <li className="mb-2"><a href="#" className="text-gray-400">Careers</a></li>
            <li className="mb-2"><a href="#" className="text-gray-400">Contact us</a></li>
            <li className="mb-2"><a href="#" className="text-gray-400">News</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Account</h4>
          <ul>
            <li className="mb-2"><a href="#" className="text-gray-400">Your account</a></li>
            <li className="mb-2"><a href="#" className="text-gray-400">Shipping rates & policies</a></li>
            <li className="mb-2"><a href="#" className="text-gray-400">Refunds & replacements</a></li>
            <li className="mb-2"><a href="#" className="text-gray-400">Delivery info</a></li>
            <li className="mb-2"><a href="#" className="text-gray-400">Order tracking</a></li>
            <li className="mb-2"><a href="#" className="text-gray-400">Taxes & fees</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Customer service</h4>
          <ul>
            <li className="mb-2"><a href="#" className="text-gray-400">Payment methods</a></li>
            <li className="mb-2"><a href="#" className="text-gray-400">Money back guarantee</a></li>
            <li className="mb-2"><a href="#" className="text-gray-400">Product returns</a></li>
            <li className="mb-2"><a href="#" className="text-gray-400">Support center</a></li>
            <li className="mb-2"><a href="#" className="text-gray-400">Shipping</a></li>
            <li className="mb-2"><a href="#" className="text-gray-400">Terms and conditions</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
