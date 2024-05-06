import './App.css';
import Footer from './component/Footer/Footer';
import Lassen from './component/Lassen/Lassen';
import Service from './component/Service/Service';
import Vorteile from './component/Vorteile/Vorteile'
import Header from './component/Header/Header';
import Faq from './component/Faq/Faq';
import Project from './component/Project/Project';
import SliderCard from './component/Slider/SliderCard' 

function App() {
  return (
    <div>
      <Header />
      <Project />
      <SliderCard />
      <Service />
      <Vorteile />
      <Faq />
      <Lassen />
      <Footer />

    </div>
  );
}

export default App;
