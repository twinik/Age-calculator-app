/* eslint-disable react/prop-types */
import { useState } from "react";
import Input from "./input";
import ArrowButton from "./arrowButton";
import arrowIcon from "../../public/icon-arrow.svg";

const Form = ({ setAge }) => {
  const [date, setDate] = useState({
    day: "",
    month: "",
    year: "",
  });
  const [error, setError] = useState(false);
  const [dayError, setDayError] = useState("");
  const [monthError, setMonthError] = useState("");
  const [yearError, setYearError] = useState("");

  const calculateAge = () => {
    validations();

    if (!error) {
      const currentDate = new Date();
      const currentYear = currentDate.getFullYear();
      const currentMonth = currentDate.getMonth() + 1;
      const currentDay = currentDate.getDate();

      const inputYear = parseInt(date.year);
      const inputMonth = parseInt(date.month);
      const inputDay = parseInt(date.day);

      let years = currentYear - inputYear;
      let months = currentMonth - inputMonth;
      let days = currentDay - inputDay;

      if (months < 0 || (months === 0 && days < 0)) {
        years -= 1;
      }
      if (months < 0) {
        months += 12;
      }
      if (days < 0) {
        days += 30;
      }
      setAge({ years, months, days });
    }
  };

  const validations = () => {
    switch (true) {
      case date.day === "":
        setError(true);
        setDayError("This field is required");
        break;
      case date.month === "":
        setError(true);
        setMonthError("This field is required");
        break;
      case date.year === "":
        setError(true);
        setYearError("This field is required");
        break;
      case date.day < 1 || date.day > 31:
        setError(true);
        setDayError("Must be a valid day");
        break;
      case date.month < 1 || date.month > 12:
        setError(true);
        setMonthError("Must be a valid month");
        break;
      case date.year < 1800:
        setError(true);
        setYearError("Must be a valid year");
        break;
      case date.year > new Date().getFullYear():
        setError(true);
        setYearError("Must be in the past");
        break;
      default:
        setError(false);
        setDayError("");
        setMonthError("");
        setYearError("");
    }
  };

  return (
    <>
      <div className="flex flex-row">
        <div className="flex-col">
          <Input
            title="DAY"
            placeholder="DD"
            value={date.day}
            setValue={(value) => setDate({ ...date, day: value })}
            error={error}
          />
          {error && (
            <p className="text-lightRed text-xs ml-2 font-normal italic">
              {dayError}
            </p>
          )}
        </div>
        <div className="flex-col">
          <Input
            title="MONTH"
            placeholder="MM"
            value={date.month}
            setValue={(value) => setDate({ ...date, month: value })}
            error={error}
          />
          {error && (
            <p className="text-lightRed text-xs ml-2 font-normal italic">
              {monthError}
            </p>
          )}
        </div>
        <div className="flex-col">
          <Input
            title="YEAR"
            placeholder="YYYY"
            value={date.year}
            setValue={(value) => setDate({ ...date, year: value })}
            error={error}
          />
          {error && (
            <p className="text-lightRed text-xs ml-2 font-normal italic">
              {yearError}
            </p>
          )}
        </div>
      </div>
      <div className="flex justify-center items-center lg:justify-end">
        <ArrowButton onClick={calculateAge} iconSrc={arrowIcon} />
      </div>
    </>
  );
};

export default Form;
