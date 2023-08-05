import Navbar from "./Navbar";
import MainContent from "./MainContent";
import Card from "/src/Card.jsx";
import data from "/src/data.js";
function App() {
  const card = data.map((item) => <Card {...item} />);

  return (
    <>
      <Navbar />
      <MainContent />
      <div className="app--cardList">{card}</div>
    </>
  );
}

export default App;
