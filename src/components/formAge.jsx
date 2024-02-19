import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  year: z.string().regex(/^\d{4}$/),
  month: z.string().regex(/^(0?[1-9]|1[0-2])$/),
  day: z.string().regex(/^(0?[1-9]|[12][0-9]|3[01])$/),
});

const calculateAge = (dob) => {
  const now = new Date();
  const birthDate = new Date(
    parseInt(dob.year),
    parseInt(dob.month) - 1,
    parseInt(dob.day)
  );
  let age = now.getFullYear() - birthDate.getFullYear();
  const monthDiff = now.getMonth() - birthDate.getMonth();
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && now.getDate() < birthDate.getDate())
  ) {
    age--;
  }
  const month = (now.getMonth() + 12 - birthDate.getMonth()) % 12;
  const day =
    now.getDate() < birthDate.getDate()
      ? birthDate.getDate() - now.getDate()
      : now.getDate() - birthDate.getDate();
  return { years: age, months: month, days: day };
};

const FormAge = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    getValues,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const [age, setAge] = useState(null);

  const onSubmit = () => {
    const data = getValues();
    const ageData = calculateAge(data);
    setAge(ageData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Year:</label>
          <Controller
            name="year"
            control={control}
            defaultValue=""
            render={({ field }) => <input {...field} type="number" />}
          />
          {errors.year && <span>{errors.year.message}</span>}
        </div>
        <div>
          <label>Month:</label>
          <Controller
            name="month"
            control={control}
            defaultValue=""
            render={({ field }) => <input {...field} type="number" />}
          />
          {errors.month && <span>{errors.month.message}</span>}
        </div>
        <div>
          <label>Day:</label>
          <Controller
            name="day"
            control={control}
            defaultValue=""
            render={({ field }) => <input {...field} type="number" />}
          />
          {errors.day && <span>{errors.day.message}</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
      {age && (
        <div>
          <h2>Age</h2>
          <p>Years: {age.years}</p>
          <p>Months: {age.months}</p>
          <p>Days: {age.days}</p>
        </div>
      )}
    </div>
  );
};

export default FormAge;
