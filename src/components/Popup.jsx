import React, { useState } from 'react';

const Popup = () => {
  const [isVisible, setIsVisible] = useState(true);

  const closePopup = () => {
    setIsVisible(false);
  };

  return (
    <>
      {isVisible && (
        <div>
          <section className="rounded-3xl shadow-2xl w-1/3">
            <div className="p-8 text-center sm:p-12">
              <p className="text-sm font-semibold uppercase tracking-widest text-pink-500">
                Your Room is booked
              </p>
              <h2 className="mt-6 text-3xl font-bold">
                Thanks for your reservation, we're getting it ready!
              </h2>
              <button
                className="mt-8 inline-block w-full rounded-full bg-black py-4 text-sm font-bold text-white shadow-xl hover:bg-slate-700"
                onClick={closePopup}
              >
                Close
              </button>
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default Popup;
