export default function TabButton({ children, onSelect, isSelcted }) {
  console.log('TabButton component rendered');
  return (
  <li>
    <button className={isSelcted ? "active" : ""} onClick={onSelect}>
      {children}
    </button>
  </li>); 
}
