import { useState } from "react";
import CafeInfo from "../CafeInfo/CafeInfo";
import VoteOptions from "../VoteOptions/VoteOptions";
import VoteStats from "../VoteStats/VoteStats";
import Notification from "../Notification/Notification";

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
  const totalVotes = votes.good + votes.neutral + votes.bad;
  const positiveRate = totalVotes
    ? Math.round((votes.good / totalVotes) * 100)
    : 0;
  return (
    <div className={css.app}>
      <CafeInfo></CafeInfo>
      <VoteOptions
        onVote={handleVote}
        onReset={resetVotes}
        canReset={totalVotes > 0}
      ></VoteOptions>
      {totalVotes > 0 ? (<VoteStats votes={votes} totalVotes={totalVotes} positiveRate={positiveRate}></VoteStats>) : (<Notification></Notification>) } 
    </div>
  );
}

export default App;
