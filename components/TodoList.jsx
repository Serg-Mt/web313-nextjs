import styles from '@/styles/ToDoList.module.css';
import { useState } from 'react';


function toggleCheckBox(array, index) {
  const
    elem = array[index];
  elem.c = !elem.c;
  return [...array.slice(0, index), elem, ...array.slice(index + 1)]
}

export function ToDoList() {
  const
    [value, setValue] = useState('-start-'),
    [list, setList] = useState([
      { id: 0, c: true, s: 'task 1' },
      { id: 1, c: false, s: 'tssk 2' }]);



  return <div className={styles.todolist}>
    <h2>To Do List</h2>
    <input value={value} onChange={evt => setValue(evt.target.value)} />
    <button onClick={() => {
      setList([...list, { id: Date.now(), c: false, s: value }])
      // setValue('');
    }}>Add</button>
    <ol>
      {list.map(({ id, c, s }, index) => <li key={id}><label>
        <input type="checkbox" checked={c}
          // onChange={() => setList(list.with(index, Object.assign({}, list[index], { c: !list[index].c })))} 
          onChange={() => setList(toggleCheckBox(list, index))}
        />
        {s}
      </label>
        <button onClick={() => setList(list.toSpliced(index, 1))}>❌</button>
      </li>)}
    </ol>
    {/* <span>{Date.now()}</span> */}
  </div>
}

function Form({ newItem }) {
  const
    [value, setValue] = useState('_++++_');
  return <>
    <input value={value} onChange={evt => setValue(evt.target.value)} />
    <button onClick={() => newItem(value)}>Add</button>
  </>;
}

export function ToDoList1() {
  const
    [list, setList] = useState(['item 1', 'item 2']);
  return <>
    <Form newItem={val => setList([...list, val])} />
    <ol>
      {list.map(el => <li>{el}</li>)}
    </ol>
    <hr />
    <Parent />
  </>
}

function Child({ value, setValue }) {
  return <>
    value={value}
    <button onClick={()=>setValue(value-1)}>-1</button>
    <button onClick={()=>setValue(value+1)}>+1</button>
    <button onClick={()=>setValue(100)}>100</button>
    <button onClick={()=>setValue(1000)}>1000</button>
    <button onClick={()=>setValue(value-10)}>-10</button>
  </>;
}
function Parent() {
  const
    [state, setState] = useState('99');
  return <>
    <Child value={state} setValue={setState}/>
    <hr/>
    <Child value={state} setValue={setState}/>
  </>;
}