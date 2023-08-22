import { useState } from "react";
import { questions } from "./App";
import Cards from "./Cards";

export default function Flashcard() {
  const [selectedId, setSelectedId] = useState({
    id: 0,
    answer: "",
  });

  function handleClick(data) {
    const { id, answer } = data;
    setSelectedId({
      id,
      answer,
    });
  }

  return (
    <div>
      <ul className="flashcards">
        {questions.map((card) => (
          <Cards
            selectedId={selectedId}
            handleClick={handleClick}
            cardobj={card}
            key={card.id}
          />
        ))}
      </ul>
    </div>
  );
}
