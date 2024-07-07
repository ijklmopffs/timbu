import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import cartIcon from "../assets/cartIcon.svg";
import bgImg from "../assets/bg.png";
import bgImgMobile from "../assets/bgMobile.png";
import casioCa from "../assets/casio-ca.png";
import rolexgmt from "../assets/rolex-gmt.png";
import rolex36mm from "../assets/rolex-36mm.png";
import mondaine from "../assets/mondaine.png";
import ligure from "../assets/ligure.png";
import certina from "../assets/certina.png";
import timex from "../assets/timex.png";
import seiko from "../assets/seiko.png";
import balmianb3 from "../assets/balmian-b3.png";
import casiomtp from "../assets/casio-mtp.png";
import casiomw from "../assets/casio-mw.png";
import garonne from "../assets/garonne.png";
import balmainla from "../assets/balmain-la.png";
import lorus from "../assets/lorus.png";
import iceWatch from "../assets/ice-watch.png";
import calypso from "../assets/calypso.png";
import star from "../assets/star.png";
import increaseIcon from "../assets/increase.png";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="bg-[#FBFBFB]">
      <Navbar />

      <section className="mt-28">
        <Link
          to="/cart"
          className="flex items-center gap-2 flex-end justify-end text-[#334155] p-4"
        >
          <img src={cartIcon} alt="" className="w-8 h-8" />
          Cart
        </Link>

        <div className="my-5">
          <img src={bgImg} alt="" className="hidden md:block" />
          <img src={bgImgMobile} alt="" className="md:hidden mx-auto" />
        </div>

        <div>
          <div className="flex items-center gap-4 justify-center my-10">
            <p>Brands</p>
            <p className="border-2 bg-[#AC702F] text-white px-6 py-4 rounded-full">
              Inspiration
            </p>
            <p>Categories</p>
          </div>

          <p className="font-semibold text-3xl text-[#0F172A]">
            Explore beautiful Inspiration from our Watch Collection
          </p>

          <div className="text-xs md:text-base flex w-80 md:w-auto items-center justify-between max-w-5xl mx-auto my-10">
            <p>All</p>
            <p>Casio</p>
            <p>Seiko</p>
            <p>Rolex</p>
            <p>Richard Mille</p>
            <p>Timex</p>
            <p>Mondaine</p>
            <p>Hauer</p>
          </div>
        </div>

        <section className="flex items-center gap-10 max-w-[90rem] mx-auto justify-center flex-wrap">
          <div className="border-2 border-[#AC702F] rounded-md w-80 text-start p-2">
            <img src={casioCa} alt="" className="mx-auto" />
            <div>
              <p className="text-lg font-semibold text-[#334155]">Casio</p>
              <p className="text-[#334155]">CA-500WE-1AEF</p>
              <p className="text-[#94A3B8] mt-2">
                Perennial favorite since its 1980s debut...
              </p>
              <p className="font-semibold text-2xl text-[#0F172A]">N160,002</p>
              <div className="flex items-center gap-2">
                <img src={star} alt="" className="w-28" />
                <p className="text-[#334155]">8</p>
              </div>
            </div>
            <div className="mt-3">
              <p>
                <span className="font-bold text-[#AC702F]">17</span> left in
                stock
              </p>
              <div className="flex flex-col md:flex-row items-center gap-2">
                <img
                  src={increaseIcon}
                  alt=""
                  className="w-12 h-12 hidden md:block"
                />
                <button className="border-2 bg-[#AC702F] text-white px-4 py-3 rounded-full w-full md:w-auto">
                  Add To cart
                </button>
                <button className="border-[#AC702F] border-2 px-4 py-3 rounded-full w-full md:w-auto">
                  Buy Now
                </button>
              </div>
            </div>
          </div>

          <div className="border-2 border-[#AC702F] rounded-md w-80 text-start p-2">
            <img src={rolexgmt} alt="" className="mx-auto" />
            <div>
              <p className="text-lg font-semibold text-[#334155]">Rolex</p>
              <p className="text-[#334155]">GMT-MASTER II 126713GRNR</p>
              <p className="text-[#94A3B8] mt-2">
                Unidirectional rotatable bezel and solid-link Oyster bracelet...
              </p>
              <p className="font-semibold text-2xl text-[#0F172A]">N301,899</p>
              <div className="flex items-center gap-2">
                <img src={star} alt="" className="w-28" />
                <p className="text-[#334155]">5</p>
              </div>
            </div>
            <div className="mt-3">
              <p>
                <span className="font-bold text-[#AC702F]">6</span> left in
                stock
              </p>
              <div className="flex flex-col md:flex-row items-center gap-2">
                <img
                  src={increaseIcon}
                  alt=""
                  className="w-12 h-12 hidden md:block"
                />
                <button className="border-2 bg-[#AC702F] text-white px-4 py-3 rounded-full w-full md:w-auto">
                  Add To cart
                </button>
                <button className="border-[#AC702F] border-2 px-4 py-3 rounded-full w-full md:w-auto">
                  Buy Now
                </button>
              </div>
            </div>
          </div>

          <div className="border-2 border-[#AC702F] rounded-md w-80 text-start p-2">
            <img src={rolex36mm} alt="" className="mx-auto" />
            <div>
              <p className="text-lg font-semibold text-[#334155]">Rolex</p>
              <p className="text-[#334155]">36mm Stainless Steel</p>
              <p className="text-[#94A3B8] mt-2">
                Q Timex Malibu Stainless Steel Expansion Band Watch
              </p>
              <p className="font-semibold text-2xl text-[#0F172A]">N175,054</p>
              <div className="flex items-center gap-2">
                <img src={star} alt="" className="w-28" />
                <p className="text-[#334155]">18</p>
              </div>
            </div>
            <div className="mt-3">
              <p>
                <span className="font-bold text-[#AC702F]">6</span> left in
                stock
              </p>
              <div className="flex flex-col md:flex-row items-center gap-2">
                <img
                  src={increaseIcon}
                  alt=""
                  className="w-12 h-12 hidden md:block"
                />
                <button className="border-2 bg-[#AC702F] text-white px-4 py-3 rounded-full w-full md:w-auto">
                  Add To cart
                </button>
                <button className="border-[#AC702F] border-2 px-4 py-3 rounded-full w-full md:w-auto">
                  Buy Now
                </button>
              </div>
            </div>
          </div>

          <div className="border-2 border-[#AC702F] rounded-md w-80 text-start p-2">
            <img src={mondaine} alt="" className="mx-auto" />
            <div>
              <p className="text-lg font-semibold text-[#334155]">Mondaine</p>
              <p className="text-[#334155]">Classic 40mm Vegan Watch</p>
              <p className="text-[#94A3B8] mt-2">
                Robust design inspired by the renowned Swiss Railway clock...
              </p>
              <p className="font-semibold text-2xl text-[#0F172A]">N194,542</p>
              <div className="flex items-center gap-2">
                <img src={star} alt="" className="w-28" />
                <p className="text-[#334155]">42</p>
              </div>
            </div>
            <div className="mt-3">
              <p>
                <span className="font-bold text-[#AC702F]">6</span> left in
                stock
              </p>
              <div className="flex flex-col md:flex-row items-center gap-2">
                <img
                  src={increaseIcon}
                  alt=""
                  className="w-12 h-12 hidden md:block"
                />
                <button className="border-2 bg-[#AC702F] text-white px-4 py-3 rounded-full w-full md:w-auto">
                  Add To cart
                </button>
                <button className="border-[#AC702F] border-2 px-4 py-3 rounded-full w-full md:w-auto">
                  Buy Now
                </button>
              </div>
            </div>
          </div>

          <div className="border-2 border-[#AC702F] rounded-md w-80 text-start p-2">
            <img src={ligure} alt="" className="mx-auto" />
            <div>
              <p className="text-lg font-semibold text-[#334155]">Ligure</p>
              <p className="text-[#334155]">LWT23001N</p>
              <p className="text-[#94A3B8] mt-2">
                Steel silver with a diameter of 41 mm crafted perfectly for
                you...
              </p>
              <p className="font-semibold text-2xl text-[#0F172A]">N160,002</p>
              <div className="flex items-center gap-2">
                <img src={star} alt="" className="w-28" />
                <p className="text-[#334155]">8</p>
              </div>
            </div>
            <div className="mt-3">
              <p>
                <span className="font-bold text-[#AC702F]">17</span> left in
                stock
              </p>
              <div className="flex flex-col md:flex-row items-center gap-2">
                <img
                  src={increaseIcon}
                  alt=""
                  className="w-12 h-12 hidden md:block"
                />
                <button className="border-2 bg-[#AC702F] text-white px-4 py-3 rounded-full w-full md:w-auto">
                  Add To cart
                </button>
                <button className="border-[#AC702F] border-2 px-4 py-3 rounded-full w-full md:w-auto">
                  Buy Now
                </button>
              </div>
            </div>
          </div>

          <div className="border-2 border-[#AC702F] rounded-md w-80 text-start p-2">
            <img src={certina} alt="" className="mx-auto" />
            <div>
              <p className="text-lg font-semibold text-[#334155]">Certina</p>
              <p className="text-[#334155]">DS Action C0329291104100</p>
              <p className="text-[#94A3B8] mt-2">
                Inside the case lies a ETA movement and a Sapphire crystal.
              </p>
              <p className="font-semibold text-2xl text-[#0F172A]">N301,889</p>
              <div className="flex items-center gap-2">
                <img src={star} alt="" className="w-28" />
                <p className="text-[#334155]">24</p>
              </div>
            </div>
            <div className="mt-3">
              <p>
                <span className="font-bold text-[#AC702F]">6</span> left in
                stock
              </p>
              <div className="flex flex-col md:flex-row items-center gap-2">
                <img
                  src={increaseIcon}
                  alt=""
                  className="w-12 h-12 hidden md:block"
                />
                <button className="border-2 bg-[#AC702F] text-white px-4 py-3 rounded-full w-full md:w-auto">
                  Add To cart
                </button>
                <button className="border-[#AC702F] border-2 px-4 py-3 rounded-full w-full md:w-auto">
                  Buy Now
                </button>
              </div>
            </div>
          </div>

          <div className="border-2 border-[#AC702F] rounded-md w-80 text-start p-2">
            <img src={timex} alt="" className="mx-auto" />
            <div>
              <p className="text-lg font-semibold text-[#334155]">Timex</p>
              <p className="text-[#334155]">TW2W21200 Celestial Automatic</p>
              <p className="text-[#94A3B8] mt-2">
                Stainless steel open heart automatic watch
              </p>
              <p className="font-semibold text-2xl text-[#0F172A]">N175,054</p>
              <div className="flex items-center gap-2">
                <img src={star} alt="" className="w-28" />
                <p className="text-[#334155]">14</p>
              </div>
            </div>
            <div className="mt-3">
              <p>
                <span className="font-bold text-[#AC702F]">6</span> left in
                stock
              </p>
              <div className="flex flex-col md:flex-row items-center gap-2">
                <img
                  src={increaseIcon}
                  alt=""
                  className="w-12 h-12 hidden md:block"
                />
                <button className="border-2 bg-[#AC702F] text-white px-4 py-3 rounded-full w-full md:w-auto">
                  Add To cart
                </button>
                <button className="border-[#AC702F] border-2 px-4 py-3 rounded-full w-full md:w-auto">
                  Buy Now
                </button>
              </div>
            </div>
          </div>

          <div className="border-2 border-[#AC702F] rounded-md w-80 text-start p-2">
            <img src={seiko} alt="" className="mx-auto" />
            <div>
              <p className="text-lg font-semibold text-[#334155]">Seiko</p>
              <p className="text-[#334155]">SWR054P1 Selection Nano Watch</p>
              <p className="text-[#94A3B8] mt-2">
                Rectangular Ladies Quartz Watch with 2 Year Warranty.
              </p>
              <p className="font-semibold text-2xl text-[#0F172A]">N194,542</p>
              <div className="flex items-center gap-2">
                <img src={star} alt="" className="w-28" />
                <p className="text-[#334155]">10</p>
              </div>
            </div>
            <div className="mt-3">
              <p>
                <span className="font-bold text-[#AC702F]">6</span> left in
                stock
              </p>
              <div className="flex flex-col md:flex-row items-center gap-2">
                <img
                  src={increaseIcon}
                  alt=""
                  className="w-12 h-12 hidden md:block"
                />
                <button className="border-2 bg-[#AC702F] text-white px-4 py-3 rounded-full w-full md:w-auto">
                  Add To cart
                </button>
                <button className="border-[#AC702F] border-2 px-4 py-3 rounded-full w-full md:w-auto">
                  Buy Now
                </button>
              </div>
            </div>
          </div>

          <div className="border-2 border-[#AC702F] rounded-md w-80 text-start p-2">
            <img src={balmianb3} alt="" className="mx-auto" />
            <div>
              <p className="text-lg font-semibold text-[#334155]">Balmian</p>
              <p className="text-[#334155]">B3912.39.82</p>
              <p className="text-[#94A3B8] mt-2">
                Classic ladies watch with mother of pearl dial...
              </p>
              <p className="font-semibold text-2xl text-[#0F172A]">N160,002</p>
              <div className="flex items-center gap-2">
                <img src={star} alt="" className="w-28" />
                <p className="text-[#334155]">9</p>
              </div>
            </div>
            <div className="mt-3">
              <p>
                <span className="font-bold text-[#AC702F]">6</span> left in
                stock
              </p>
              <div className="flex flex-col md:flex-row items-center gap-2">
                <img
                  src={increaseIcon}
                  alt=""
                  className="w-12 h-12 hidden md:block"
                />
                <button className="border-2 bg-[#AC702F] text-white px-4 py-3 rounded-full w-full md:w-auto">
                  Add To cart
                </button>
                <button className="border-[#AC702F] border-2 px-4 py-3 rounded-full w-full md:w-auto">
                  Buy Now
                </button>
              </div>
            </div>
          </div>

          <div className="border-2 border-[#AC702F] rounded-md w-80 text-start p-2">
            <img src={casiomtp} alt="" className="mx-auto" />
            <div>
              <p className="text-lg font-semibold text-[#334155]">Casio</p>
              <p className="text-[#334155]">MTP-1302PD-3AVEF</p>
              <p className="text-[#94A3B8] mt-2">
                Analog quartz watch with date made of metal alloy...
              </p>
              <p className="font-semibold text-2xl text-[#0F172A]">N301,889</p>
              <div className="flex items-center gap-2">
                <img src={star} alt="" className="w-28" />
                <p className="text-[#334155]">19</p>
              </div>
            </div>
            <div className="mt-3">
              <p>
                <span className="font-bold text-[#AC702F]">6</span> left in
                stock
              </p>
              <div className="flex flex-col md:flex-row items-center gap-2">
                <img
                  src={increaseIcon}
                  alt=""
                  className="w-12 h-12 hidden md:block"
                />
                <button className="border-2 bg-[#AC702F] text-white px-4 py-3 rounded-full w-full md:w-auto">
                  Add To cart
                </button>
                <button className="border-[#AC702F] border-2 px-4 py-3 rounded-full w-full md:w-auto">
                  Buy Now
                </button>
              </div>
            </div>
          </div>

          <div className="border-2 border-[#AC702F] rounded-md w-80 text-start p-2">
            <img src={casiomw} alt="" className="mx-auto" />
            <div>
              <p className="text-lg font-semibold text-[#334155]">Casio</p>
              <p className="text-[#334155]">MW-240-1EVEF</p>
              <p className="text-[#94A3B8] mt-2">
                A diameter of 43.6 mm and is fitted with a Resin strap...
              </p>
              <p className="font-semibold text-2xl text-[#0F172A]">N175,054</p>
              <div className="flex items-center gap-2">
                <img src={star} alt="" className="w-28" />
                <p className="text-[#334155]">36</p>
              </div>
            </div>
            <div className="mt-3">
              <p>
                <span className="font-bold text-[#AC702F]">6</span> left in
                stock
              </p>
              <div className="flex flex-col md:flex-row items-center gap-2">
                <img
                  src={increaseIcon}
                  alt=""
                  className="w-12 h-12 hidden md:block"
                />
                <button className="border-2 bg-[#AC702F] text-white px-4 py-3 rounded-full w-full md:w-auto">
                  Add To cart
                </button>
                <button className="border-[#AC702F] border-2 px-4 py-3 rounded-full w-full md:w-auto">
                  Buy Now
                </button>
              </div>
            </div>
          </div>

          <div className="border-2 border-[#AC702F] rounded-md w-80 text-start p-2">
            <img src={garonne} alt="" className="mx-auto" />
            <div>
              <p className="text-lg font-semibold text-[#334155]">Garonne</p>
              <p className="text-[#334155]">KQ29Q475</p>
              <p className="text-[#94A3B8] mt-2">
                Rugged analog and digital sports watch for boys...
              </p>
              <p className="font-semibold text-2xl text-[#0F172A]">N194,542</p>
              <div className="flex items-center gap-2">
                <img src={star} alt="" className="w-28" />
                <p className="text-[#334155]">102</p>
              </div>
            </div>
            <div className="mt-3">
              <p>
                <span className="font-bold text-[#AC702F]">6</span> left in
                stock
              </p>
              <div className="flex flex-col md:flex-row items-center gap-2">
                <img
                  src={increaseIcon}
                  alt=""
                  className="w-12 h-12 hidden md:block"
                />
                <button className="border-2 bg-[#AC702F] text-white px-4 py-3 rounded-full w-full md:w-auto">
                  Add To cart
                </button>
                <button className="border-[#AC702F] border-2 px-4 py-3 rounded-full w-full md:w-auto">
                  Buy Now
                </button>
              </div>
            </div>
          </div>

          <div className="border-2 border-[#AC702F] rounded-md w-80 text-start p-2">
            <img src={balmainla} alt="" className="mx-auto" />
            <div>
              <p className="text-lg font-semibold text-[#334155]">Balmain</p>
              <p className="text-[#334155]">LA-20WH-2AEF</p>
              <p className="text-[#94A3B8] mt-2">
                Splash waterproof blue retro digital watch...
              </p>
              <p className="font-semibold text-2xl text-[#0F172A]">N160,002</p>
              <div className="flex items-center gap-2">
                <img src={star} alt="" className="w-28" />
                <p className="text-[#334155]">41</p>
              </div>
            </div>
            <div className="mt-3">
              <p>
                <span className="font-bold text-[#AC702F]">17</span> left in
                stock
              </p>
              <div className="flex flex-col md:flex-row items-center gap-2">
                <img
                  src={increaseIcon}
                  alt=""
                  className="w-12 h-12 hidden md:block"
                />
                <button className="border-2 bg-[#AC702F] text-white px-4 py-3 rounded-full w-full md:w-auto">
                  Add To cart
                </button>
                <button className="border-[#AC702F] border-2 px-4 py-3 rounded-full w-full md:w-auto">
                  Buy Now
                </button>
              </div>
            </div>
          </div>

          <div className="border-2 border-[#AC702F] rounded-md w-80 text-start p-2">
            <img src={lorus} alt="" className="mx-auto" />
            <div>
              <p className="text-lg font-semibold text-[#334155]">Lorus</p>
              <p className="text-[#334155]">Sport RRX09HX9</p>
              <p className="text-[#94A3B8] mt-2">
                Ladies sports watch. Case made of Steel silver...
              </p>
              <p className="font-semibold text-2xl text-[#0F172A]">N301,899</p>
              <div className="flex items-center gap-2">
                <img src={star} alt="" className="w-28" />
                <p className="text-[#334155]">45</p>
              </div>
            </div>
            <div className="mt-3">
              <p>
                <span className="font-bold text-[#AC702F]">6</span> left in
                stock
              </p>
              <div className="flex flex-col md:flex-row items-center gap-2">
                <img
                  src={increaseIcon}
                  alt=""
                  className="w-12 h-12 hidden md:block"
                />
                <button className="border-2 bg-[#AC702F] text-white px-4 py-3 rounded-full w-full md:w-auto">
                  Add To cart
                </button>
                <button className="border-[#AC702F] border-2 px-4 py-3 rounded-full w-full md:w-auto">
                  Buy Now
                </button>
              </div>
            </div>
          </div>

          <div className="border-2 border-[#AC702F] rounded-md w-80 text-start p-2">
            <img src={iceWatch} alt="" className="mx-auto" />
            <div>
              <p className="text-lg font-semibold text-[#334155]">Ice Watch</p>
              <p className="text-[#334155]">022801 ICE</p>
              <p className="text-[#94A3B8] mt-2">
                Smartwatch for kids with case made of Resin of 36 mm...
              </p>
              <p className="font-semibold text-2xl text-[#0F172A]">N111,700</p>
              <div className="flex items-center gap-2">
                <img src={star} alt="" className="w-28" />
                <p className="text-[#334155]">32</p>
              </div>
            </div>
            <div className="mt-3">
              <p>
                <span className="font-bold text-[#AC702F]">6</span> left in
                stock
              </p>
              <div className="flex flex-col md:flex-row items-center gap-2">
                <img
                  src={increaseIcon}
                  alt=""
                  className="w-12 h-12 hidden md:block"
                />
                <button className="border-2 bg-[#AC702F] text-white px-4 py-3 rounded-full w-full md:w-auto">
                  Add To cart
                </button>
                <button className="border-[#AC702F] border-2 px-4 py-3 rounded-full w-full md:w-auto">
                  Buy Now
                </button>
              </div>
            </div>
          </div>

          <div className="border-2 border-[#AC702F] rounded-md w-80 text-start p-2">
            <img src={calypso} alt="" className="mx-auto" />
            <div>
              <p className="text-lg font-semibold text-[#334155]">Calypso</p>
              <p className="text-[#334155]">Junior 10-15 K5801/4</p>
              <p className="text-[#94A3B8] mt-2">
                Digital kids watch Resin with a diameter of 35 mm
              </p>
              <p className="font-semibold text-2xl text-[#0F172A]">N194,542</p>
              <div className="flex items-center gap-2">
                <img src={star} alt="" className="w-28" />
                <p className="text-[#334155]">87</p>
              </div>
            </div>
            <div className="mt-3">
              <p>
                <span className="font-bold text-[#AC702F]">6</span> left in
                stock
              </p>
              <div className="flex flex-col md:flex-row items-center gap-2">
                <img
                  src={increaseIcon}
                  alt=""
                  className="w-12 h-12 hidden md:block"
                />
                <button className="border-2 bg-[#AC702F] text-white px-4 py-3 rounded-full w-full md:w-auto">
                  Add To cart
                </button>
                <button className="border-[#AC702F] border-2 px-4 py-3 rounded-full w-full md:w-auto">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </section>
      </section>

      <Footer />
    </main>
  );
}
