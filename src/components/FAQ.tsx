// components/FAQ.jsx

import React from 'react';

const FAQ = () => {
  return (
    <section className="py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-black sm:text-4xl">Frequently Asked Questions</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">   
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <div
              key={index}
              className={`p-6 rounded-lg shadow-lg ${
                index % 2 === 0 ? 'bg-red-500 text-white' : 'bg-white text-black'
              }`}
            >
              <h3 className="text-xl font-bold mb-2">
                The Best Financial Accounting App Ever!
              </h3>
              <p>
                “Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Acoumsan, Ultricies. In Ultrices Malesuada Elit Mauris.”
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;