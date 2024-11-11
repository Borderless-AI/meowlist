import { useState } from "react";
import "./App.css";
import { CatRow } from "./CatRow";
import { getCatAtIndex } from "./database";
function App() {
  const [catIndex, setCatIndex] = useState(0);
  const [cats, setCats] = useState([]);
  const onClickLoadMore = () => {
    setCatIndex(catIndex + 1);
    getCatAtIndex(catIndex).then((cat) => {
      setCats([...cats, cat]);
    });
  };
  console.log("DEBUG DO NOT COMMIT: USER PASSWORD IS [meowmeow123]");
  return (
    <div className="App">
      <h1>Welcome to Meow List!</h1>
      <button onClick={onClickLoadMore}>Load More Cats</button>
      <ul style={{ listStyleType: "none" }}>
        {cats.map(({ name, description, image }, index) => (
          <li>
            <CatRow name={name} description={description} index={index} image={image} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
