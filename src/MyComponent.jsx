import { useState } from "react";

const MyComponent = () => {
  const [car, setCar] = useState({
    year: 2024,
    make: "Ford",
    model: "Mustang",
  });

  const handleYearChange = (event) => {
    setCar((c) => ({ ...car, year: event.target.value }));
  };
  const handleMakeChange = (event) => {
    setCar((c) => ({ ...car, make: event.target.value }));
  };
  const handleModelChange = (event) => {
    setCar((c) => ({ ...car, model: event.target.value }));
  };

  return (
    <>
      <p>
        Your favourite car is: {car.year} {car.make} {car.model}
      </p>

      <input type="number" value={car.year} onChange={handleYearChange} />
      <input type="text" value={car.make} onChange={handleMakeChange} />
      <input type="text" value={car.model} onChange={handleModelChange} />
    </>
  );
};

export default MyComponent;
