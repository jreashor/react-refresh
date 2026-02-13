export default function TabButton({ children, isSelcted, ...props }) {
  console.log('TabButton component rendered');
  return (
  <li>
    <button className={isSelcted ? 'active' : ''} {...props}>
      {children}
    </button>
  </li>); 
}
