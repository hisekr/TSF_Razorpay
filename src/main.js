import React, { useEffect } from 'react';


const Main = () => {
  const makePayment = () => {
    const options = {
      key: 'rzp_test_3FHBxOARSCQ4dZ', 
      amount: 50000, 
      currency: 'INR', 
      name: 'The Sparks Foundation Charity',
      description: 'Donate For a Cause',
      image: 'https://user-images.githubusercontent.com/40202261/269267938-a4bae494-2515-4c09-8951-21678c63b733.png', 
      handler: function (response) {
        
        alert('Payment successful: ' + response.razorpay_payment_id);
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  useEffect(() => {
    const loadRazorpay = () => {

      
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.async = true;
      document.body.appendChild(script);
      return script;
    };

    loadRazorpay().onload = () => {
      
    };
  }, []);
  

  return (
  <div className="bg-gray-300 min-h-screen flex flex-col items-center">
    <div className="text-center mt-16">
      <div id="D1" className="text-6xl font-bold">
        The Sparks Foundation Charity
      </div>
      <p className="text-3xl">
        Donate For a Cause
      </p>
      <p id="D3" className="text-lg">
        Help restore Peace
      </p>
    </div>
    <div className="bg-center bg-blue-500 rounded-md text-white p-4 mt-4 shadow-md">
        
      <button onClick={makePayment} className="btn btn-primary">
        Donate
        </button>
        
    </div>
    <footer className="text-center mt-10 py-5 ">
      <p>
        &copy; Made by <b>Abhishek Roshan</b> <br /> For the Project of{' '}
        <b>The Sparks Foundation</b>
      </p>
    </footer>
  </div>
);

};

export default Main;


