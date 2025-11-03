import { useState } from "react";
import CafeInfo from "../CafeInfo/CafeInfo";
import type { Votes, VoteType } from "../../types/votes";
import css from "./App.module.css";
import "../../css/App.css";

const initialVotes: Votes = {
  good: 0,
  neutral: 0,
  bad: 0,
};
function App() {
  const [votes, setVotes] = useState<Votes>(initialVotes);
  const handleVote = (type: VoteType) => {
    setVotes((prev) => ({
      ...prev,
      [type]: prev[type] + 1,
    }));
  };
  const resetVotes = () => setVotes(initialVotes);
  return (
    <div className={css.app}>
      <CafeInfo></CafeInfo>
    </div>
  );
}

export default App;
