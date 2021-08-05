function App() {
  const { Container } = ReactBootstrap;
  const { useState, useEffect } = React;
  const [pokemon, setPokemon] = useState([]);
  //const [query, setQuery] = useState("MIT");
  const [isError, setIsError] = useState(false);
  const [url, setUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon/1/"
  );
  const [isLoading, setIsLoading] = React.useState(false);
  console.log("Rendering App");
  
  useEffect(() => {   // Handles the LifeCycle Events
    console.log("Fetching data...");
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const result = await axios(url);
        console.log(result.data);
        setPokemon(result.data);
        var stuff = JSON.stringify(result.data);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };

    fetchData();
  }, []);
  return (
    <Container>

      {isError && <div>Something went wrong ...</div>}

      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <ul>
        {/* <li> Hi how's life, everything alright?  you've gotten this far, congrats 🎉 </li> */}
        Here's info on a random Pokemon (if you're into that sort of thing): 👻👾🤖<br></br><br></br>
        <li className="list">name: {pokemon.name}</li>
        {/* <li>species: {pokemon.species[url]}</li> */}
        <li>weight: {pokemon.weight}</li> 
        <li>height: {pokemon.height}</li> 
        <li>base experience: {pokemon.base_experience}</li>
        {/* <li><img src={pokemon.sprites.front_default}/></li> */}
        <br></br><a href={pokemon.location_area_encounters}>check out encounters here: {pokemon.location_area_encounters}</a>

      </ul>
      )}
    </Container>
  );
}
// ========================================
ReactDOM.render(<App />, document.getElementById("root"));
