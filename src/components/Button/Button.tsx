interface TootltipProps {
  title?: string;
}
import "./Button.css";
const styles = {
  container: {
    color: "blue",
  },
};
const Button: React.FC<TootltipProps> = ({ title = "Click Me" }) => {
  return (
    <div className="btn__container">
      <label className="btn__label">My Button</label>
      <button style={styles.container}>{title}</button>
      <div className="phone">
        <p className="phone_title">Test Title</p>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwWFUBj0nHpb7xOHcho0BdTndsF6U8CvNQZw&s" />
      </div>
    </div>
  );
};
export default Button;
