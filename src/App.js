import { useEffect, useState } from 'react';
import './App.css';
import data from './mock_stores.json'

function App() {
  const [mock, setMock] = useState(data)

  useEffect(() => { mock.reduce((items, acc) => acc + items.value) }, [])
  console.log(mock);

  return (
    <div className="App">
      {mock.map(items => (<div key={items.store.id}>
        <p>{items.store.name}</p>
        {items.months.map(item => <p>{item.name}<input value={item.value} onChange={(e) => setMock(e.target.value)} /></p>)}


      </div>))}
    </div>
  );
}

export default App;
