import { useState } from "react";
import text from "./data";

const App = () => {
  const [value, setValue] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

   
    const numberOfParas = Object.fromEntries(formData)["numberOfParas"];
    setValue(numberOfParas);
  };

  return (
    <>
      <section className="section-center">
        <h4>TIRED OF BORING LOREM IPSUM?</h4>
        <form className="lorem-form" onSubmit={handleSubmit}>
          <label for="numberOfParas">Paragraphs: </label>
          <input
            name="numberOfParas"
            type="number"
            max="8"
            min="1"
            step="1"
          ></input>
          <button type="submit" className="btn">
            Generate
          </button>
        </form>

        <div className="lorem-text">
          {text
            .filter((_, index) => {
              return value > index;
            })
            .map((ele) => {
              return <p>{ele}</p>;
            })}
        </div>
      </section>
    </>
  );
};
export default App;
