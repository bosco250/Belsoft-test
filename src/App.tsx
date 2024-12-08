import About from "./Components/Aboutus/About";
import FridayFounder from "./Components/Sponsor/FridayFounder";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Community from "./Components/Sponsor/Community";
import FridayComming from "./Components/Sponsor/FridayComming";
import WhySponser from "./Components/Sponsor/WhySponser";
import Offers from "./Components/WeOffer/Offers";
import Attenders from "./Components/Attenders/Attenders";
import Faq from "./Components/Faq/Faq";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className=" overflow-hidden w-screen bg-white ">
      <Header />
      <Hero />
      <About />
      <Offers />
      <WhySponser />
      <FridayComming />
      <Community />
      <FridayFounder />
      <Attenders />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
