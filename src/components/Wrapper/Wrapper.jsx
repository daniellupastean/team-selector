import { CandidatesTable } from "../CandidatesTable/CandidatesTable";
import "./Wrapper.scss";

export const Wrapper = () => {
  return (
    <div className="wrapper">
      <div className="page-title">Team Selector - Las Vegas Algorithm</div>
      <div className="content-container">
        <CandidatesTable />
        <div className="select-container">Selection Zone</div>
      </div>
    </div>
  );
};
