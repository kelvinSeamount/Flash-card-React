export default function Cards({ cardobj, selectedId, handleClick }) {
  return (
    <li>
      <span
        onClick={() => handleClick(cardobj)}
        className={cardobj.id === selectedId.id ? "selected" : ""}
      >
        {cardobj.id === selectedId.id ? cardobj.answer : cardobj.question}
      </span>
    </li>
  );
}
