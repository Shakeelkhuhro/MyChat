import React from "react";

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="Find a user" />
      </div>
      <div className="userChat">
        <img
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.FJZHoNcGE97P-sobD2Q0TgAAAA%26pid%3DApi&f=1&ipt=0e7938eccb5d99afba37e2babbceacc2828d8398420b90061e3ef3f7a12a4300&ipo=images"
          alt="user"
        />
        <div className="userChatInfo">
          <span>Shakeel</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
