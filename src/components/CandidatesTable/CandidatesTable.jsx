import candidates from "../../assets/candidates.json";
import "./CandidatesTable.scss";

export const CandidatesTable = () => {
  return (
    <div className="candidates-table">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>
          {candidates.map((candidate, index) => (
            <tr key={index}>
              <td>{candidate.name}</td>
              <td>{candidate.department}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
