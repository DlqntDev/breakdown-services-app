import { useCallback } from "react";
import "./index.css";

export const TableRow = ({ data, onCheckboxToggle }) => {
  const handleCheckboxToggle = useCallback(
    (e) => {
      onCheckboxToggle(e.target.checked, data);
    },
    [onCheckboxToggle, data]
  );

  return (
    <div className="grid table-columns row">
      <div className="cell">
        <input onChange={handleCheckboxToggle} type="checkbox" />
      </div>
      <div className="cell">
        <p className="font-secondary">{data.name}</p>
      </div>

      <div className="cell">
        <p className="font-secondary">{data.type}</p>
      </div>

      <div className="cell">
        <p className="font-secondary">{data.castingDirector}</p>
      </div>
      <div className="cell">
        <p className="font-secondary">{data.postedDate}</p>
      </div>
    </div>
  );
};
