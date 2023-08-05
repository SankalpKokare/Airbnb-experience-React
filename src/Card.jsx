import data from "/src/Card.jsx";

export default function Card(prop) {
  return (
    <div className="Card--container">
      <img
        src={`src/assets/${prop.coverImg}`}
        alt="Thumbnail"
        className="Card--thumbnail"
      />
      <div className="card--textContent">
        <div className="card--stats">
          <img
            src="src/assets/star.png"
            alt="Rating.png"
            className="Card--star"
          />
          <span>{prop.stats.rating} </span>
          <span className="grey">({prop.stats.reviewCount}) • </span>
          <span className="grey">{prop.location}</span>
        </div>
        <p> {prop.title}</p>
        <p>
          <span className="bold">From ${prop.price}</span> / person
        </p>
      </div>
    </div>
  );
}
