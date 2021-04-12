import logo from './logo.svg';
import './App.css';
import './components/Header/Header';
import {useEffect, useState} from 'react';
import React from 'react';
import Header from './components/Header/Header';
import List from './components/List/List';
import axios from 'axios';
import AddNewItem from './components/AddNewItem/AddNewItem';

function App() {
  const [Listing, setList] = useState(["example1", "example2"]);
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/todos`).then(
            res => {
                const todos = res.data.map( e => e.title);
                setList(todos);
            }
        )
        
    }, []);
    const AddItem =(item) =>{
      //If a post API was available it would go here
      //but since none were provided I used react states
      setList([item,...Listing]);
    }
   
    
  return (
    <div className="App">
      <Header />
      <List list={Listing} />
      <AddNewItem AddItem={AddItem}/>
      
    </div>
  );
}

export default App;
export const AppContext = React.createContext(App);
