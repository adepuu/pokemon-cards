import { useEffect, useState } from "react";
import searchIcon from "../../assets/search.png";
import { useDebouncedCallback } from "use-debounce";
import usePokemonList from "../../hooks/usePokemonList";

const SearchField: React.FC = () => {
  const [editing, setEditing] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { setSearchQuery: setSearchQueryGlobal } = usePokemonList();

  // Wait for 1 seconds before searching
  const debounced = useDebouncedCallback(
    (value) => {
      setSearchQuery(value);
      setSearchQueryGlobal(value);
    },
    // delay in ms (1s)
    1000
  );

  useEffect(() => {
    console.log(searchQuery);
  }, [searchQuery]);

  return (
    <div>
      {editing ? (
        <input
          onChange={(e) => debounced(e.target.value)}
          onBlur={() => setEditing(false)}
          className="px-4 py-[6px] text-sm rounded-xl"
          type="text"
          placeholder="Search..."
        />
      ) : (
        <img
          onClick={() => setEditing(true)}
          src={searchIcon}
          alt="pokemon logo"
          className="w-6 h-5 object-contain"
        />
      )}
    </div>
  );
};

export default SearchField;
