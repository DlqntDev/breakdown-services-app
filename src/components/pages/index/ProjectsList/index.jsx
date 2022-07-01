import "./index.css";
import { useProjectsList } from "../../../../hooks/useProjectsList";
import { TableRow } from "./components/TableRow";
import { TableHeaders } from "./components/TableHeader";
import { useProjectForm } from "../../../../hooks/useProjectForm";

const ProjectsList = () => {
  const { projects, handleSortData } = useProjectsList();
  const { handleCheckboxToggle, handleSubmit } = useProjectForm();

  return (
    <div className="page-layout">
      <div className="flex flex-column container">
        <form onSubmit={handleSubmit} id="projects-form">
          <div className="flex flex-column">
            <p className="font-primary">PROJECTS</p>
            <div className="table">
              <TableHeaders onSortClick={handleSortData} />
              <div className="flex flex-column">
                {projects.map((data, index) => {
                  return (
                    <TableRow
                      onCheckboxToggle={handleCheckboxToggle}
                      key={index}
                      data={data}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </form>
        <button className="btn-submit font-primary" form="projects-form">
          SUBMIT
        </button>
      </div>
    </div>
  );
};

export default ProjectsList;
