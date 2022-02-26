import { useRef, useState } from "react";
import "./Payment.css";
import { useCallback } from "react";
import useRazorpay from "react-razorpay";
import { useNavigate } from "react-router";
export const Payment = () => {
  const [price, setPrice] = useState(80000);
  const [wrong, setWrong] = useState(false);
  const [couponApplied, setCouponApplied] = useState(false);
  const coupon = useRef("");

  const Razorpay = useRazorpay();
  const navigate=useNavigate();


  const handlePrice=()=> {
    if (
      coupon.current.value === "sri10" &&
      couponApplied === false
    ) {
      setPrice(price - (price * 10) / 100);
      setCouponApplied(!couponApplied);
      setWrong(false);

    } else {
      if (couponApplied === false) {
        setWrong(true);
      }
    }
  }
  const handlePayment = useCallback((value) => {
    const options = {
      key: "rzp_test_md3nNLGyahlzW1",
      amount: value*100,
      currency: "INR",
      name: "Unacademy",
      description: "Pay & Checkout this Course, Upgrade your Coding Skill",
      image:
        "https://static.uacdn.net/production/_next/static/images/logo.svg?q=75&w=384",

      handler: (res) => {
        alert("Payment Succeeded");
        navigate("/products")
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
      <header className="payment-header">
        <div>
          <a href="/">
            <img
              src="https://static.uacdn.net/production/_next/static/images/logo.svg?q=75&w=384"
              alt=""
            />
          </a>
        </div>
      </header>
      <div className="content-box">
        <div className="content-left-box">
          <div className="img-box">
            <img
              src="https://static.uacdn.net/web-cms/daily_live_classes_be8fa5af21.svg?q=75&w=1000&fm=webp"
              alt=""
            />
            <br />
            <p>
              <span className="bold"> Live test and quizzes</span> <br />
              Take live Mock Tests curated in line with the exam pattern and
              stay on track with your preparation
            </p>
          </div>
        </div>
        <div className="content-right-box">
          <div>
            {" "}
            <h3>Programming for Students subscription</h3>
            <p className="choose">Choose a plan and proceed</p>
            <div className="content-right-box-item1">
              <img
                src="https://static.uacdn.net/production/_next/static/images/sale_discount.png?q=75&w=48"
                alt=""
              />
              <p>
                {" "}
                No cost EMI available on 6 months & above subscription plans
              </p>
            </div>
          </div>
          <div className="plan-box">
            <div className="plan-box-item1">
              <img
                src="https://cdn1.iconfinder.com/data/icons/warnings-and-dangers/400/Warning-02-512.png"
                alt=""
              />
            </div>
            <div className="plan-box-item2">
              {" "}
              <span className="bold">12 Months</span>{" "}
            </div>
            <div className="plan-box-item3">
              <span className="bold">
                ₹{Math.floor(price / 12)} /mo <br /> Total ₹{" "}
                <span>{price}</span>
              </span>
            </div>
          </div>
          <h4>To be paid as a one-time payment</h4>
          <div className="coupon-box">
            <div className="coupon-box-item1">
              <img
                src="https://static.uacdn.net/production/_next/static/images/gift.svg?q=75&w=48"
                alt=""
              />
            </div>
            <div className="coupon-box-item2">
              <input ref={coupon} type="text" placeholder="Enter sri10" />
              <button
                id="button-apply"
                onClick={handlePrice}
              >
                Apply
              </button>
              {couponApplied ? (
                <div className="rm-btn">
                  <button
                    onClick={() => {
                      setPrice(80000);
                      setCouponApplied(false);
                      setWrong(false);
                    }}
                  >
                    Remove
                  </button>
                </div>
              ) : (
                ""
              )}
              {couponApplied ? <div id="happy">Coupn Applied 🎁</div> : ""}
              {wrong ? <div>Enter correct coupon😁</div> : ""}
            </div>
            <div className="coupon-box-item3">
              {" "}
              <button onClick={()=>{
                handlePayment(price);
              }} className="button-pay" >
                Proceed to pay
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

