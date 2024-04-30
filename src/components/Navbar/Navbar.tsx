import React, { useState, useRef, useEffect } from "react";
import Logo from "../../assets/logo.png";
import { FaSearch } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [isSearch, setIsSearch] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const toggleSearch = () => {
    setIsSearch(!isSearch);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
      setIsSearch(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar divide-y">
      <div className="flex justify-between py-2 align-middle ">
        <div className="logo cursor-pointer ml-8">
          <img src={Logo} alt="logo" />
        </div>

        {isSearch ? (
          <div className="search-input">
            <input
              ref={inputRef}
              type="text"
              id="inputName"
              name="inputName"
              className="rounded py-1 mr-8"
              placeholder=" Search..."
            />
          </div>
        ) : (
          <div className="search cursor-pointer" onClick={toggleSearch}>
            <FaSearch className="text-white text-3xl mr-8" />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
