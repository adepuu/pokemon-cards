import React, { useState, useRef, useEffect } from "react";
import Logo from "../../assets/logo.png";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

interface NavbarProps {
  showSearchIcon?: boolean;
}

const Navbar: React.FC = ({ showSearchIcon }: NavbarProps) => {
  const [isSearch, setIsSearch] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

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

  const toHome = () => {
    navigate("/");
  };

  return (
    <nav className="navbar divide-y">
      <div className="flex justify-between py-2 align-middle ">
        <div className="logo cursor-pointer lg:ml-8" onClick={toHome}>
          <img src={Logo} alt="logo" />
        </div>
        {showSearchIcon && !isSearch ? (
          <div className="search cursor-pointer" onClick={toggleSearch}>
            <FaSearch className="text-white text-3xl mr-8" />
          </div>
        ) : null}

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
        ) : null}
      </div>
    </nav>
  );
};

export default Navbar;
