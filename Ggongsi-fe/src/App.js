import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Main from "./Main"
import Input from "./Input"


const App = () => {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />}/>
      <Route path="/input" element={<Input />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
