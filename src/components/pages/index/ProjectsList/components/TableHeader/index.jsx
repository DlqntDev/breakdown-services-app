import "./index.css";

const headers = ["Name", "Type", "Casting Director", "Posted Date"];

export const TableHeaders = ({ onSortClick }) => {
  return (
    <div className="grid table-columns table-header">
      <div></div>

      {headers.map((text, index) => {
        return (
          <div
            key={`header-cell-${index}`}
            className={`${text === "Posted Date" && "cursor-pointer"}`}
            onClick={() => {
              if (text === "Posted Date") {
                onSortClick();
              }
            }}
          >
            <p className="font-secondary header-text">{text}</p>
          </div>
        );
      })}
    </div>
  );
};
