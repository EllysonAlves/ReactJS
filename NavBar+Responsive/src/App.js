
import Styles from './App.css'
import Nav from './components/Nav1';
import Footer from './components/Footer';

function App() {
  return (

    <div>
      <div className={Styles.Body}>
        <Nav />
        <Footer />
      </div>
      
    </div>
   
  );
}

export default App;