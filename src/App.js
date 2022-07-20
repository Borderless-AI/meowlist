import { useState } from "react";
import "./App.css";
import { CatRow } from "./CatRow";
import { CATS } from "./cats";
function App() {
  const [catIndex, setCatIndex] = useState(0);
  const cats = CATS.slice(0, catIndex).reverse();
  const [isLoading, setIsLoading] = useState(false)
  const onClickLoadMore = () => {
    setIsLoading(true)
    new Promise((r) => setTimeout(r, Math.random(1000) + 1000)).then(() => {
      setCatIndex(catIndex + 1);
      setIsLoading(false)
    });
  };
  return (
    <div className="App">
      <h1>Welcome to Meow List!</h1>
      <h2>There are {CATS.length - catIndex} left to load!</h2>
      <button disabled={isLoading} onClick={onClickLoadMore}>Load More Cats</button>
      <ul style={{ listStyleType: "none" }}>
        {cats.map(({ name, description }, index) => (
          <li>
            <CatRow name={name} description={description} index={index}/>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
