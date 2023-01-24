import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';

const Hello = () => {
  return (
    <div>
      <h1>Streaming IP Camera Nodejs</h1>
      <div className="Hello">
        <button type="button">
          <span role="img" aria-label="books">
            📚
          </span>
          Get stream
        </button>
        <canvas id="chanel1" width="auto" height="auto" />
      </div>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
