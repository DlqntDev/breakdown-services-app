import { useCallback, useState } from "react";
import projects from "../projects.json";

const sortEarliestFirst = (a, b) => {
  return new Date(a.postedDate) - new Date(b.postedDate);
};

export const useProjectsList = () => {
  const [data, setData] = useState(projects.projects);

  const handleSortData = useCallback(() => {
    const sorted = [...data.sort(sortEarliestFirst)];
    setData(sorted);
  }, [data, setData]);

  return { projects: data, handleSortData };
};
