/* eslint-disable react/prop-types */
const ArrowButton = ({ type, iconSrc, onClick }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="z-10 my-8 lg:my-0 bg-purple rounded-full p-5 w-16 h-16 hover:cursor-pointer transition-transform hover:scale-105 hover:bg-offBlack"
    >
      <img src={iconSrc} alt="Arrow icon" />
    </button>
  );
};

export default ArrowButton;
