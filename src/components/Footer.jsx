import mailIcon from "../assets/mail.svg";
import icons from "../assets/icons.png";
import logo from "../assets/jtlogo.svg";
import socials from "../assets/socials.png";

export default function Footer() {
  return (
    <footer className="mt-20">
      <section className="bg-[#0F172A] p-8">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between text-white/70 p-4">
          <div className="flex items-center gap-2 my-5">
            <img src={mailIcon} alt="" className="w-8 h-8" />
            <p>
              SIGN UP FOR 10% OFF YOUR FIRST ORDER* - T&C'S APPLY (PRIVACY
              POLICY)
            </p>
          </div>
          <input
            type="text"
            placeholder="Email Address..."
            className="w-72 rounded-full p-2"
          />
        </div>
        <hr />
        <div className="max-w-4xl mx-auto mt-10 flex gap-20 flex-wrap md:gap-0 md:flex-nowrap justify-between">
          <div className="text-white text-start">
            <h2 className="uppercase mb-5">John Turner</h2>
            <p>Contact Us</p>
            <p>About Us</p>
            <p>Store</p>
            <p>Appointments</p>
            <p>Store Locator</p>
            <p>Map</p>
            <p>Site Map</p>
          </div>
          <div className="text-white text-start">
            <h2 className="uppercase mb-5">your order</h2>
            <p>Delivery</p>
            <p>Information</p>
            <p>Returns &</p>
            <p>Exchanges</p>
            <p>Payment Options</p>
            <p>Privacy Policy</p>
            <p>Acceptable Use</p>
            <p>Policy</p>
            <p>Cookie Policy</p>
            <p>Terms & Conditions</p>
            <p>Terms of Use</p>
          </div>
          <div className="text-white text-start">
            <h2 className="uppercase mb-5">offer & services</h2>
            <p>Brand</p>
            <p>Inspiration</p>
            <p>Categories</p>
            <p>Sales</p>
            <p>Gift Vouchers</p>
            <p>Insurance Information</p>
          </div>
        </div>
      </section>

      <section className="mt-10 p-4">
        <img src={icons} alt="" className="mx-auto p-2" />
        <div className="flex flex-col md:flex-row items-center justify-between mt-16">
          <img src={logo} alt="" />
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <p>Terms of Service</p>
            <p>Privacy policy</p>
            <p>Contact Us</p>
          </div>
          <div>
            <img src={socials} alt="" />
          </div>
        </div>
        <p className="mt-16">© 2024 John Turner, Inc. All rights reserved.</p>
      </section>
    </footer>
  );
}
