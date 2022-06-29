import './App.css';
import SideImg from './components/SideImg';
import Form from './components/Form';
import { useState } from "react"
import Validation from './components/validationCard';

function App() {
  const [submit, setSubmit] = useState(true)
  const [name, setName] = useState("")
  const onSubmit = (e) => {
    e.preventDefault();
    setSubmit(false)
  }
  const onChange = ({target: {value}}) => {
    setName(value)
  }
  return (
    <div className="container-fluid">
      <div className="App">
        { submit ? <div className="row">
        <SideImg />
        <Form onSubmit={onSubmit} name={name} onChange={onChange} />
        </div> : <Validation userName={name} />}
      </div>
    </div>
  );
}

export default App;
