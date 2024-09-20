import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Homepage from './Component/Homepage/Homepage';
import Duration from './Component/Duration/Duration';
import Advantages from './Component/Advantages/Advantages';
import Benefits from './Component/Benefits/Benefits';
import Alumini from './Component/Alumini/Alumini';
import FAQsection from './Component/FAQ/FAQ';
import Footer from './Component/Footer/Footer';

function App() {
  return (
    <>
    <Homepage/>
    <Duration/>
    <Advantages/>
    <Benefits/>
    <Alumini/>
    <FAQsection/>
    <Footer/>
    </>
  );
}

export default App;
