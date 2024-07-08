import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import casio from "../assets/casio-cart.png";
import mondaine from "../assets/mondaine-cart.png";
import cartIncrease from "../assets/cartIncrease.svg";

export default function Cart() {
  return (
    <main className="bg-[#FBFBFB]">
      <Navbar />

      <section className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between">
        <div className="bg-white p-8 rounded-lg w-[20rem] md:w-[30rem] lg:w-[40rem] mx-auto md:mx-0">
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
              <p className="text-[#12DF00]">In Stock</p>
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
              <p className="text-[#12DF00]">In Stock</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg text-start w-[21rem] md:w-[35rem] mx-auto md:mx-0">
          <h1 className="font-semibold text-[#0F172A] text-2xl my-5">
            Delivery
          </h1>
          <p className="text-[#0F172A]">July 13, 2024, 3:00pm - 5:00pm</p>

          <div className="my-10">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <input
                type="text"
                placeholder="Discount code or gift card"
                className="border-2 rounded-full p-4 border-[#AC702F] w-full md:w-80"
              />
              <button className="bg-[#AC702F] px-12 py-4 text-white rounded-full w-full md:w-auto">
                Apply
              </button>
            </div>
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
          </div>

          <Link to="/checkout">
            <button className="bg-[#AC702F] px-12 py-4 text-white rounded-full w-full">
              Proceed to Checkout
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
