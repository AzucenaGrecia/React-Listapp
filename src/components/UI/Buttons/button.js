import "./button.css";

export default function Button({ onPress, title }) {
  return <button onClick={onPress} className="button">{title}</button>;
}
