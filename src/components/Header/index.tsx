import pokemonLogo from "../../assets/pokemon-logo.png";
import searchIcon from "../../assets/search.png";

interface HeaderProps {
  withSearch?: boolean;
}

const Header: React.FC<HeaderProps> = ({ withSearch }) => {
  return (
    <header className="py-2 p-6 flex justify-between items-center border-b-[1px] border-chronicle">
      <img
        src={pokemonLogo}
        alt="pokemon logo"
        className="h-full w-auto object-contain"
      />
      {withSearch ? (
        <img
          src={searchIcon}
          alt="pokemon logo"
          className="w-6 h-5 object-contain"
        />
      ) : null}
    </header>
  );
};

export default Header;
