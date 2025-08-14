export default function Log({ pakistan }) {
  return (
    <ol id="log">
      {pakistan.map((turn, index) => (
        <li key={index}>
          Player <strong>{turn.player}</strong> selected row <strong>{turn.square.row}</strong>, col <strong>{turn.square.col}</strong>
        </li>
      ))}
    </ol>
  );
}
