import React from "react";
import NavBar from "./NavBar";
import Search from "./Search";
import Chats from "./Chats";
// import Chat from "./Chat";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <NavBar />
      <Search />
      <Chats />
      {/* <Chat /> */}
    </div>
  );
};

export default Sidebar;
