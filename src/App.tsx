import React from 'react';
import { 
  BarChart, Bar,
  LineChart, Line,
  AreaChart, Area,
  PieChart, Pie,
  XAxis, YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell
} from './components/Chart';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Mobile UI Sample</h1>
      </header>
      
      <main className="App-main">
        <h2>Chart Components</h2>
        
        <div className="chart-container">
          <h3>Bar Chart</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart>
              <CartesianGrid />
              <XAxis />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar />
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        <div className="chart-container">
          <h3>Line Chart</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart>
              <CartesianGrid />
              <XAxis />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line />
            </LineChart>
          </ResponsiveContainer>
        </div>
        
        <div className="chart-container">
          <h3>Pie Chart</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie>
                <Cell />
                <Cell />
                <Cell />
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </main>
    </div>
  );
}

export default App; 
