/* eslint-disable react/prop-types */
import ResultText from "./resultText";

const ShowAge = ({ age }) => {
  return (
    <div>
      <ResultText result={age.years} text="year" />
      <ResultText result={age.months} text="month" />
      <ResultText result={age.days} text="day" />
    </div>
  );
};

export default ShowAge;
