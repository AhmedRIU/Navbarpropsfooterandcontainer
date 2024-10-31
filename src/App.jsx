import Card from "./components/Card";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Footer />
      <div style={{ display: "flex" }}>
        <Card
          title="This is first Card 1"
          Discryption="First Discryption of card 1"
        />
        <Card
          title="This is first Card 2"
          Discryption="First Discryption of card 2"
        />
        <Card
          title="This is first Card 3"
          Discryption="First Discryption of card 3"
        />
        <Card
          title="This is first Card 4"
          Discryption="First Discryption of card 4"
        />
        <Card
          title="This is first Card 4"
          Discryption="First Discryption of card 4"
        />
      </div>
    </div>
  );
}

export default App;
