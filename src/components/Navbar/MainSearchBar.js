import React, { useState } from "react";
import SearchBar from "material-ui-search-bar";
// import AutoComplete from "material-ui/AutoComplete";
import { MuiThemeProvider } from "material-ui/styles";

const MainSearchBar = () => {
  const [searchText, setSearchText] = useState("");
  return (
    <MuiThemeProvider>
      <SearchBar
        name="searchText"
        value={searchText}
        onChange={newValue => setSearchText(newValue)}
        style={{
          lineHeight: "32px",
          width: "58.3%",
          height: "44px",
          borderRadius: 8,
          margin: "4px"
        }}
      />
    </MuiThemeProvider>
  );
};

export default MainSearchBar;
