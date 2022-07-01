import { useCallback, useState } from "react";

export const useProjectForm = () => {
  const [selectedProjects, setSelectedProjects] = useState([]);
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      console.log(selectedProjects);
    },
    [selectedProjects]
  );

  const handleCheckboxToggle = useCallback(
    (checked, data) => {
      if (checked) {
        setSelectedProjects((prevState) => {
          const nextState = [...prevState];
          nextState.push(data);
          return nextState;
        });
      } else {
        setSelectedProjects((prevState) => {
          const itemToRemove = prevState.findIndex(
            (el) =>
              el.name === data.name &&
              el.type === data.type &&
              el.castingDirector === data.castingDirector
          );
          const nextState = [...prevState];
          nextState.splice(itemToRemove, 1);
          return nextState;
        });
      }
    },
    [setSelectedProjects]
  );

  return { handleSubmit, handleCheckboxToggle };
};
