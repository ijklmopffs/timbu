import casio from "../assets/casio-cart.png";
import mondaine from "../assets/mondaine-cart.png";
import cartIncrease from "../assets/cartIncrease.svg";
import upsIcon from "../assets/ups.png";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Checkout() {
  return (
    <main className="bg-[#FBFBFB]">
      <Navbar />

      <section className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between">
        <div className="p-8">
          <div className="bg-white p-8 rounded-lg w-96 md:w-[30rem] lg:w-[40rem] mx-auto md:mx-0 text-start">
            <h1 className="font-semibold text-[#0F172A] text-base md:text-2xl my-5">
              Item Summary
            </h1>
            <hr />
            <div className="flex items-start text-start gap-4 my-10">
              <img src={casio} alt="" />
              <div className="space-y-5">
                <h2 className="font-semibold text-[#0F172A] text-base md:text-2xl">
                  Casio CA-500WE-1AEF
                </h2>
                <p className="font-semibold text-[#0F172A] text-base md:text-2xl">
                  N160,002
                </p>
                <img src={cartIncrease} alt="" />
              </div>
            </div>
            <hr />
            <div className="flex items-start text-start gap-4 my-10">
              <img src={mondaine} alt="" />
              <div className="space-y-5">
                <h2 className="font-semibold text-[#0F172A] text-base md:text-2xl">
                  Mondaine Classic 40mm
                </h2>
                <p className="font-semibold text-[#0F172A] text-base md:text-2xl">
                  N160,002
                </p>
                <img src={cartIncrease} alt="" />
              </div>
            </div>
          </div>

          <div className="bg-white p-8 my-10 w-96 md:w-[30rem] lg:w-[40rem] rounded-lg mx-auto md:mx-0">
            <h1 className="font-semibold text-[#0F172A] text-base md:text-2xl my-5">
              Delivery Address
            </h1>
            <div className="flex flex-col space-y-10 mt-10">
              <input
                type="text"
                placeholder="First Name"
                className="border-b-2 w-full"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border-b-2 w-full"
              />
              <input
                type="text"
                placeholder="Address"
                className="border-b-2 w-full"
              />
              <input
                type="text"
                placeholder="Country"
                className="border-b-2 w-full"
              />
            </div>
          </div>
        </div>

        <div className="p-8">
          <div className="bg-white rounded-lg p-8 text-start w-80 md:w-[30rem] lg:w-[40rem] mx-auto md:mx-0">
            <h1 className="font-semibold text-[#0F172A] text-base md:text-2xl my-5">
              Shipping Option
            </h1>
            <hr />
            <div className="mt-10">
              <div className="flex items-center gap-2">
                <img src={upsIcon} alt="" />
                <h1 className="font-semibold text-[#0F172A] text-base md:text-2xl my-5">
                  UPS
                </h1>
              </div>
              <p className="text-[#0F172A]">July 13, 2024, 3:00pm - 5:00pm</p>
              <p className="text-[#0F172A]">Free</p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-8 text-start w-80 md:w-[30rem] lg:w-[40rem] mt-10 mx-auto md:mx-0">
            <h1 className="font-semibold text-[#0F172A] text-base md:text-2xl my-5">
              Payment Details
            </h1>
            <div className="flex flex-col space-y-10 my-10">
              <input
                type="text"
                placeholder="Enter Name on Card"
                className="border-b-2 w-full"
              />
              <input
                type="text"
                placeholder="Card Number"
                className="border-b-2 w-full"
              />
              <div className="flex justify-between">
                <input
                  type="text"
                  placeholder="Expiration"
                  className="border-b-2 w-1/3"
                />
                <input
                  type="text"
                  placeholder="CVV"
                  className="border-b-2 w-1/3"
                />
              </div>
            </div>
            <p className="text-[#0F172A] my-8">
              By Clicking “Confirm Payment” I agree to the companies term of
              <br /> services
            </p>

            <div className="my-10 text-[#0F172A] space-y-10">
              <div className="flex items-center justify-between">
                <h2>Subtotal</h2>
                <p>N354,544</p>
              </div>
              <div className="flex items-center justify-between">
                <h2>Discount</h2>
                <p>N00.00</p>
              </div>
              <div className="flex items-center justify-between">
                <h2>Shipping</h2>
                <p>N00.00</p>
              </div>
              <hr />
              <div className="flex items-center justify-between">
                <h2>Total</h2>
                <p>N354,544</p>
              </div>
            </div>

            <button className="bg-[#AC702F] px-12 py-4 text-white rounded-full w-full">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
