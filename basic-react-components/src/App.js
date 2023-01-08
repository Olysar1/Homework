import "./App.css";
import { DisplayItemInfo } from "./DisplayItemInfo";

function App() {
  const logCharacters = (title, chars) => {
    console.log(
      `the book: ${title} has characters: ${chars.map((person) => person)}`
    );
  };

  const blue =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-tLuX7E6WdNGZO7H00rQYfg8MmUIa3fQKYg&usqp=CAU";

  const red =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdrQivzR3YbhzU6e03LZaPyqYjjlq9z2X8WQ&usqp=CAU";

  return (
    <div className="App">
      <DisplayItemInfo
        image={blue}
        name="The Blue Book"
        author="Blue Boy"
        synopsis="this is a book about sadness"
        characters={["Gurami", "Marta", "Rezo"]}
        logCharacters={logCharacters}
      />
      <DisplayItemInfo
        image={red}
        name="The Red Book"
        author="Red Boy"
        synopsis="this is a book about anger"
        characters={["Shaqro", "Zaqro", "The Milk Truck"]}
        logCharacters={logCharacters}
      />
    </div>
  );
}

export default App;
