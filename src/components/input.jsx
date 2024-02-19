/* eslint-disable react/prop-types */
const Input = ({ title, placeholder, value, setValue, error }) => {
  const titleClass = error
    ? "text-lightRed text-sm font-semibold mb-1"
    : "text-smokeyGrey text-sm font-semibold mb-1";

  const inputClass = error
    ? "text-xl text-offBlack font-bold w-24 lg:w-32 p-3 border-2 border-lightRed rounded-lg focus:outline-none focus:border-lightRed"
    : "text-xl text-offBlack font-bold w-24 lg:w-32 p-3 border-2 border-lightGrey rounded-lg focus:outline-none focus:border-purple";

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="flex flex-col mx-2 mb-2 tracking-wider">
      <label className={titleClass}>{title}</label>
      <input
        className={inputClass}
        type="number"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default Input;
