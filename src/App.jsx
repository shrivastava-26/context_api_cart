import './App.css'
import Item from './component/Item';

function App() {

  return (

    <div className='App'>
       
       <h3>E-Commerce</h3>
       <Item name="Laptop" price={20000} />
       <Item name= "Mobile" price={10000}/>
       <Item name= "Led Tv" price={70000} />

    </div>
  
  )
}

export default App
