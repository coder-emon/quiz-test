import React, { useContext } from "react";
import { TopicContext } from "../../Layout/Main";
import Topic from "../Topic/Topic";

const Home = () => {
  const topics = useContext(TopicContext);
  return (
    <div>
      <div className="grid grid-cols-4 gap-3 items-center justify-center content-center">
        {topics.map((topic) => (
          <Topic topic={topic} key={topic.id}></Topic>
        ))}
      </div>
    </div>
  );
};

export default Home;
