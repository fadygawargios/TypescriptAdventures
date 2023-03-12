import React from "react";
import ContentContainer from "../contentcontainer";
import Input from "../input";

// should take children components
const Chat: React.FC = () => {
  return (
    <>
    <ContentContainer> 
      <Input/>
    </ContentContainer>
    </>
  );
};

export default Chat;