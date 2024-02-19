/* eslint-disable react/prop-types */
const ResultText = ({ result, text }) => {
  return (
    <h1 className="text-6xl text-offBlack font-extrabold italic">
      <span className="text-purple">{result ? result : "- -"}</span> {text}
      {result === 1 ? "" : "s"}
    </h1>
  );
};

export default ResultText;
