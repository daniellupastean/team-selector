import { useState } from "react";
import "./App.scss";
import candidates from "./assets/candidates.json";

export const App = () => {
  const [selectedCandidates, setSelectedCandidates] = useState([]);

  const handleAlgorithmStart = () => {
    setSelectedCandidates(selectTeam(candidates, 3, criteriaCheck));
  };

  return (
    <div className="wrapper">
      <div className="page-title">Team Selector - Las Vegas Algorithm</div>
      <div className="content-container">
        <div className="candidates-table">
          <table>
            <thead>
              <tr>
                <th className="id-candidate">ID</th>
                <th>Name</th>
                <th>Department</th>
              </tr>
            </thead>
            <tbody>
              {candidates.map((candidate) => (
                <tr key={candidate.id}>
                  <td>{candidate.id}</td>
                  <td>{candidate.name}</td>
                  <td>{candidate.department}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="select-container">
          <button onClick={handleAlgorithmStart}>EXECUTE</button>
          <div className="selected-candidates">
            {selectedCandidates.map((candidate) => (
              <div className="candidate" key={candidate.id}>
                <div className="name">{candidate.name}</div>
                <div className="department">{candidate.department}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

function criteriaCheck(team) {
  let hasFrontEnd = false;
  let hasBackEnd = false;
  let hasQA = false;

  team.forEach((member) => {
    if (member.department === "Frontend") {
      hasFrontEnd = true;
    } else if (member.department === "Backend") {
      hasBackEnd = true;
    } else if (member.department === "Quality Assurance") {
      hasQA = true;
    }
  });

  return hasFrontEnd && hasBackEnd && hasQA;
}

function selectTeam(candidates, teamSize, criteriaCheck) {
  let team;
  do {
    team = [];
    for (let i = 0; i < teamSize; i++) {
      let randomIndex = Math.floor(Math.random() * candidates.length);
      team.push(candidates[randomIndex]);
    }
  } while (!criteriaCheck(team));

  return team;
}
