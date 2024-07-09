const BrandModal = ({ onClose }) => {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="fixed md:left-40 lg:left-80 flex items-center justify-center z-50">
      <div
        className="fixed inset-0 bg-black bg-opacity-50"
        onClick={handleOverlayClick}
      ></div>
      <div className="bg-white p-6 rounded shadow-lg z-10 flex justify-between gap-40">
        <div>
          <h2 className="font-semibold text-[#0F172A] text-start">
            Luxury Brands
          </h2>
          <ul className="list-disc list-inside text-start">
            <li>Montblanc</li>
            <li>Baume & Mercier</li>
            <li>Oris</li>
            <li>Rado</li>
            <li>Fortis</li>
            <li>Raymond Weil</li>
            <li>Roamer</li>
            <li>Richard Mille</li>
            <li>Hauer</li>
            <li>Seiko</li>
            <li>Tissot</li>
            <li>Maurice Lacroix</li>
            <li>Lorus</li>
            <li>Timex</li>
            <li>Certina</li>
            <li>Rolex</li>
            <li>Balmain</li>
          </ul>
        </div>
        <div>
          <h2 className="font-semibold text-[#0F172A] text-start">
            Designer Watch Brands
          </h2>
          <ul className="list-disc list-inside text-start">
            <li>Vivienne Westwood</li>
            <li>Versace</li>
            <li>Casio</li>
            <li>Diesel</li>
            <li>Emporio Armani</li>
            <li>Ligure</li>
            <li>Fossil</li>
            <li>Guess</li>
            <li>Maserati</li>
            <li>Rotary</li>
            <li>Sekonda</li>
            <li>Swatch</li>
            <li>Mondaine</li>
            <li>Icewatch</li>
            <li>Calypso</li>
            <li>Garonne</li>
          </ul>
        </div>
        <div>
          <h2 className="font-semibold text-[#0F172A] text-start">
            Luxury Jewellery
          </h2>
          <ul className="list-disc list-inside text-start">
            <li>Ambush</li>
            <li>Balenciaga</li>
            <li>Common Lines</li>
            <li>Dsquared2</li>
            <li>Juicy Couture</li>
            <li>MICHAEL Michael Kors</li>
            <li>Missoma</li>
            <li>Olivia Burton</li>
            <li>Radley</li>
            <li>Swarovski</li>
            <li>Ted Baker</li>
            <li>Tory Burch</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BrandModal;
