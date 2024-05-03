import Card from "../../components/Card";
import Header from "../../components/Header";
import MobileWrapper from "../../components/MobileWrapper";
import usePokemonList from "../../hooks/usePokemonList";

const ListPage: React.FC = () => {
  const { pokemonList, loading, error } = usePokemonList();
  if (error) return <div>Something is wrong :(</div>
  return (
    <MobileWrapper>
      <Header withSearch/>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="px-5 py-4 grid grid-cols-2 gap-5">
          {pokemonList.map((each, index) => <Card key={index} name={each.name} />)}
        </div>
      )}
    </MobileWrapper>
  );
};

export default ListPage;
