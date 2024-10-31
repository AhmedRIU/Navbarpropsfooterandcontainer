import "./Card.css";
import pic1 from "../../src/pic.jpeg";
const Card = (props) => {
  return (
    <div className="Card" style={{ overflow: "hidden" }}>
      <img
        src={pic1}
        alt=""
        width={333}
        style={{
          border: "2px solid black",
        }}
      />
      <h1>{props.title}</h1>
      <p>{props.Discryption}</p>
    </div>
  );
};

export default Card;
