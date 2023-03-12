import React from "react";
import ContentContainer from "../contentcontainer";
import Counter from "../functions/calculator";

// should take children components
const Home: React.FC = () => {
  return (
    <>
      <ContentContainer> 
        <Counter></Counter>
      </ContentContainer>
    </>
  );
};

export default Home;