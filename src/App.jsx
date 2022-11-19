import ChartArea from './components/ChartArea';
import { useFetchData } from './hooks/useFetchData';

function App() {
  const {data, years, isLoading, setFilters} = useFetchData();
  const handleFilter = (e)=>{
    const index = e.target.value;
    const filter = index === "all" ? {'year': null, 'month': null} : years[index];

    setFilters(filter);
  }
  return (
    <div className="App">
      { isLoading ? <h1>Loading....</h1> : <ChartArea data={data}/> }
      <br/>
      <h4>Filters</h4>
      <br/>
      <div>
        <select onChange={handleFilter}>
          <option default value="all">All</option>
          {
            years.map((items, index)=><option key={index} value={index}>{items.year} - mes: {items.month}</option>)
          }
        </select>
      </div>
    </div>
  )
}

export default App;
