import React, { createContext } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Header from "../Components/Header/Header";
export const TopicContext = createContext([]);
const Main = () => {
  const topicsData = useLoaderData();
  const topics = topicsData.data;
  console.log(topics);
  return (
    <div className="px-7">
      <TopicContext.Provider value={topics}>
        <Header></Header>
        <Outlet></Outlet>
      </TopicContext.Provider>
    </div>
  );
};

export default Main;
