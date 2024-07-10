const CategoriesModal = ({ onClose }) => {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="fixed top-[10.5rem] md:top-0 md:left-40 lg:left-[30rem] flex items-center justify-center z-50">
      <div
        className="fixed inset-0 bg-black bg-opacity-50"
        onClick={handleOverlayClick}
      ></div>
      <div className="bg-white p-6 rounded shadow-lg z-10 text-end md:text-start">
        <p>Luxury Brands</p>
        <p>Designer Watch Brands</p>
        <p>Luxury Jewelry</p>
      </div>
    </div>
  );
};

export default CategoriesModal;
