import { useCallback } from "react";
import useRazorpay from "react-razorpay";
import { useNavigate } from "react-router-dom";
export const Pay = () => {
  const Razorpay = useRazorpay();
  const navigate=useNavigate();
  const handlePayment = useCallback(() => {
    const options = {
      key: "rzp_test_md3nNLGyahlzW1",
      amount: "3000",
      currency: "INR",
      name: "Unacademy",
      description: "Pay & Checkout this Course, Upgrade your Coding Skill",
      image:
        "https://static.uacdn.net/production/_next/static/images/logo.svg?q=75&w=384",

      handler: (res) => {
        alert("Payment Succeeded");
        
      },

      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzpay = new Razorpay(options);
    rzpay.open();
  }, [Razorpay]);

  return (
    <div>
      {/* < onClick={handlePayment}>Click</
      
      button> */}
      {handlePayment()}
    </div>
  );
};
