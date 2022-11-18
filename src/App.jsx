import { useFetchData } from './hooks/useFetchData';

function App() {
  const {data, isLoading} = useFetchData();
  return (
    <div className="App">
      { isLoading ? <h1>Loading....</h1> : null }
      {
        data.map((item)=><p>{item.Branch}</p>)
      }
    </div>
  )
}

export default App;
