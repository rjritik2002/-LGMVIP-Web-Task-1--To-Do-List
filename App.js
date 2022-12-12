import React from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { useState } from 'react';
import ListComp from './ListComp';


const App = () => {
  const [inputList, setInputList] = useState();
  const [newItem, setNewItem] = useState([]);

  const year = new Date().getFullYear();

  const inputEvent = (event) => {
    setInputList(event.target.value);
  }

  const showItems = () => {
    setNewItem((oldItem) => {
      return [...oldItem, inputList];
    });
    setInputList("");
  };

  return (
    <>
      <div className="container">
        <div className='center_div'>
          <h1>ToDo List</h1>
          <br />
          <input type='text'
            placeholder='Add an Items'
            onChange={inputEvent}
            value={inputList}
          />
          <Button
            color='primary'
            className='add_btn'
            onClick={showItems}>
            <AddIcon />
          </Button>
          <br />
          <ol>
            {
              newItem.map((val, index) => {
                return <ListComp text={val} key={index} />
              })
            }
          </ol>
        </div>
        <footer className="footer">
          <p>Copyright &copy; {year} Ritik Kumar</p>
        </footer>
      </div>
    </>
  )
}

export default App;