import React, { useState } from "react";
import data from "./data";

function App() {
  const [count, setCount] = useState();
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    console.log(typeof amount);
    if (count <= 0) {
      amount = 1;
    }
    if (count > 8) {
      amount = 8;
    }
    setText(data.slice(0, amount));
  };

  return (
    <section className="section-center">
      <h3>tired of boring ipsum</h3>
      <form className="loremipsum" onSubmit={handleSubmit}>
        <label htmlfor="amount">Paragraph:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type="submit" className="btn">
          Generate
        </button>
        <article>
          {text.map((item, index) => {
            return <p key={index}> {item}</p>;
          })}
        </article>
      </form>
    </section>
  );
}

export default App;
