import React from "react";

const RatingSelect = ({ select, selected }) => {
  const handleChange = (e) => {
    select(+e.currentTarget.value);
  };

  let arr = [];
  const arrValue = () => {
    for (let i = 0; i < 5; i++) {
      arr[i] = i + 1;
    }
  };

  /* let arr2 = [];
  const arr2Value = () => {
    for (let i = 6; i < 11; i++) {
      arr[i - 6] = i;
    }
  }; */

  const ratingValue = (item) => {
    return (
      <li>
        <input
          type="radio"
          value={item}
          name="rating"
          onChange={handleChange}
          selected={selected === item + 1}
        />
        <label> {item} </label>
      </li>
    );
  };

  return (
    <>
      {/* <ul className="rating" onLoad={arrValue()}>
        {arr.map(ratingValue)}
      </ul>

      {/* <ul className="rating" onLoad={arr2Value()}>
        {arr.map(ratingValue)}
  </ul> */}
      <ul className="rating">
        {Array.from({ length: 5 }, (_, i) => (
          <li key={`rating-${i + 1}`}>
            <input
              type="radio"
              id={`num${i + 1}`}
              name="rating"
              value={i + 1}
              onChange={handleChange}
              checked={selected === i + 1}
            />
            <label htmlFor={`num${i + 1}`}>{i + 1}</label>
          </li>
        ))}
      </ul>
    </>
  );
};

export default RatingSelect;
