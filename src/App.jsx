import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Accordion from './components/Accordian';
import QuizApp from './components/QuizApp';
import Todolist from './components/Todolist';
import Weather from './components/Weather';
import Signin from './components/Signin';


const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        {/* Navbar */}
        <nav className="bg-white shadow-md p-4">
          <span className='text-2xl bg-black text-white rounded-md inline'>MMA</span>
          <div className="max-w-7xl mx-auto flex justify-center space-x-4">
            <Link to="/" className="text-gray-700 font-semibold hover:text-indigo-600">Home</Link>
            <Link to="/accordion" className="text-gray-700 font-semibold hover:text-indigo-600">Accordion</Link>
            <Link to="/quiz" className="text-gray-700 font-semibold hover:text-indigo-600">Quiz</Link>
            <Link to="/todo" className="text-gray-700 font-semibold hover:text-indigo-600">Todo List</Link>
            <Link to="/weather" className="text-gray-700 font-semibold hover:text-indigo-600">Weather App</Link>
            <Link to="/signin">Login</Link>
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/accordion" element={<Accordion />} />
          <Route path="/quiz" element={<QuizApp />} />
          <Route path="/todo" element={<Todolist />} />
          <Route path="/weather" element={<Weather />} />
        </Routes>
      </div>
    </Router>
  );
};

// Home component
const Home = () => (
  <div className="flex justify-center items-center h-screen text-center">
    <h1 className="text-3xl font-bold text-gray-800">Welcome to the Quiz and FAQ App!</h1>
  </div>
);

export default App;
