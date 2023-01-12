import './App.css';
import BlocProducts from './componenets/BlocProducts';
import Contact from './componenets/Contact';
import Counter from './componenets/Counter';

// function componenet

function App() {

  // data from server
  const contacts = [
    { fullanme:"chourabi taher", phone:"93863732" },
    { fullanme:"chourabi taher", phone:"93863732" },
    { fullanme:"chourabi taher", phone:"93863732" },
    { fullanme:"chourabi taher", phone:"93863732" },
    { fullanme:"chourabi taher", phone:"93863732" },
    { fullanme:"chourabi taher", phone:"93863732" },
    { fullanme:"chourabi taher", phone:"93863732" },
    { fullanme:"chourabi taher", phone:"93863732" }
  ];



  return (
    <div className="App">

      {
        /*contacts.map( (tmp)=>{

          return <Contact fullname={ tmp.fullanme }  phone={ tmp.phone } />
      

        } )*/
      }
 
      {
        <BlocProducts />
         
      }

      {
        /**
         * <Counter />
         */
      }
      
      
    </div>
  );
}

export default App;
