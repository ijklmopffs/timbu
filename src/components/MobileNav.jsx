import { Link } from "react-router-dom";
import iconDown from "../assets/chevron-down.svg";
import BrandModal from "./BrandModal";
import { useState } from "react";
import CategoriesModal from "./CategoriesModal";

export default function MobileNav({ onClose }) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [categoriesModal, setCategoriesModal] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  const toggleCategoryModal = () => {
    setCategoriesModal(!categoriesModal);
  };

  return (
    <div className="absolute right-5 flex items-center justify-center z-50">
      <div
        className="fixed inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      ></div>
      <div className="bg-white p-6 pr-2 rounded shadow-lg z-10 w-60">
        <div className="text-end flex flex-col">
          <Link
            to="/"
            className="flex items-center justify-end"
            onClick={toggleModal}
          >
            Brand
            <img src={iconDown} alt="" className="w-5 h-5" />
          </Link>
          {isModalOpen && <BrandModal onClose={toggleModal} />}
          <Link to="/" className="mr-5">
            Inspiration
          </Link>
          <Link
            to="/"
            className="flex items-center justify-end"
            onClick={toggleCategoryModal}
          >
            Categories
            <img src={iconDown} alt="" className="w-5 h-5" />
          </Link>
          {categoriesModal && <CategoriesModal onClose={toggleCategoryModal} />}
          <Link to="/" className="mr-5">
            Sales
          </Link>
          <Link to="/" className="mr-5">
            Terms of Service
          </Link>
          <Link to="/" className="mr-5">
            Privacy
          </Link>
          <Link to="/" className="mr-5">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
