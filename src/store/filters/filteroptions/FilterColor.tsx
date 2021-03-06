import React, { Dispatch } from "react";

interface Props {
  filter: any;
  dispatch: Dispatch<any>;
  options: string[];
}

const FilterColor = ({ filter, dispatch, options }: Props) => {
  return (
    <div className="filter">
      <div>
        {options.map(option => (
          <div
            className="filter-inputs"
            onClick={() => dispatch({ type: "color", payload: option })}
          >
            <input
              type="checkbox"
              checked={filter.filter.color.includes(option)}
            />
            <label key={option}>{option}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterColor;
