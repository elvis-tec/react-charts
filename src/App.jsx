import { useState } from 'react';
import ChartArea from './components/ChartArea';
import { ChartBar } from './components/ChartBar';
import { ChartPie } from './components/ChartPie';
import { useFetchData } from './hooks/useFetchData';

function App() {
  const {data, years, isLoading, setFilters} = useFetchData();
  const [chart, setChart] = useState("area");
  const handleFilter = (e)=>{
    const index = e.target.value;
    const filter = index === "all" ? {'year': null, 'month': null} : years[index];

    setFilters(filter);
  }

  const handleChart = (e)=>{
    const index = e.target.value;
    setChart(index);
  }
  return (
    <div className="App">
      {
        isLoading ? <h1>Is Loading...</h1> : (chart === "area" ? <ChartArea data={data} /> : ( chart === "bar" ? <ChartBar data={data}/> : (chart === "pie" ? <ChartPie data={data}/> : null)))
      }
      <br/>
      <h4>Charts</h4>
      <br/>
      <div>
        <select onChange={handleChart}>
          <option default value="area">Área</option>
          <option value="pie">Pie</option>
          <option value="bar">Barras</option>
        </select>
      </div>
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
