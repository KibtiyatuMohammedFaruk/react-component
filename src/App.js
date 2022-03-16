import logo from './logo.svg';
import './App.css';
import{ Navbar } from "./components/Navbar";
import{ Paragraph } from "./components/Paragraph";
import{ Input} from "./components/Input";
import{ MySelf } from "./components/Myself";
import{ Counter } from "./components/counter";

function App() {
  return <div className="App">
      <Navbar />
      <Paragraph />
      <Input />
      <MySelf name="Kibtiya"  age={20} gender="female" />
      <MySelf name="John"  age={21} gender="male" />
      <MySelf name="kofi"  age={19} gender="male" />
      <MySelf name="Maria"  age={20} gender="female" />
      <MySelf name="Kibty"  age={40} gender="female" />
      <Counter />
    </div>;
  }

export default App;
