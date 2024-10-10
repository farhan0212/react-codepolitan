import { useState } from "react";
import PropTypes from "prop-types";

const Search = (props) => {
  const [search, setSearch] = useState("");

  const searchChange = () => {
    props.searchChange(search);
  };

  const searchKeydown = (e) => {
    if (e.key === "Enter") {
      searchChange();
    }
  };

  return (
    <>
      <div>
        Search Article :{" "}
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={searchKeydown}
        />
        <button onClick={searchChange}>Cari</button>
      </div>
      <small>
        Ditemukan {search} sebanyak {props.totalPosts}
      </small>
    </>
  );
};

export default Search;

Search.propTypes = {
  searchChange: PropTypes.func.isRequired,
  totalPosts: PropTypes.number.isRequired,
};
