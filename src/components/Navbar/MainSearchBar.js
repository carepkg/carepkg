import React, { useState } from "react";
import SearchBar from "material-ui-search-bar";
// import AutoComplete from "material-ui/AutoComplete";
import { MuiThemeProvider } from "material-ui/styles";

const MainSearchBar = (props) => {
  const [searchText, setSearchText] = useState("");
  const submitSearch = () => {
    return;
  };
  return (
    <MuiThemeProvider>
      <SearchBar
        name="searchText"
        value={searchText}
        onChange={(newValue) => setSearchText(newValue)}
        style={{
          lineHeight: "32px",
          width: "100%",
          height: "44px",
          borderRadius: 8,
          margin: "4px",
        }}
        onRequestSearch={() => submitSearch(searchText)}
      />
    </MuiThemeProvider>
  );
};

export default MainSearchBar;
