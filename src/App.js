import { useState } from "react";
import CharacterContainer from "./components/CharacterContainer";
import Container from "./components/Container";
import Header from "./components/Header";
import Welcome from "./components/Welcome";

function App() {
  const [characters, setCharacers] = useState(null);

  const reqApi = async () => {
    const api = await fetch(
      `https://simpsons-quotes-api.herokuapp.com/quotes?count=4`
    );
    const frase = await api.json();
    setCharacers(frase);
    console.log(frase);
  };

  

  return (
    <Container>
      <Header />
      <Welcome reqApi={reqApi}/>

      {characters? (
        
      <CharacterContainer characters={characters}/>
      ):(
        <></>
      )}
    </Container>
  );
}

export default App;
