export default function MainContent() {
  return (
    <div className="MainContent--container">
      <div className="MainContent--imgContainer">
          <img
            src="src/assets/photo-grid.png"
            alt="Photo-grid"
            className="Maincontent--photoGrid"
          />
      </div>

      <div className="MainContent--text">
          <h1>Online Experiences</h1>
          <h3>
            Join unique interactive activities led by one-of-a-kind hosts—all
            without leaving home.
          </h3>
      </div>
    </div>
  );
}
