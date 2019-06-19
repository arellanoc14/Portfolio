import React from 'react';
import Home from './Home';
import Contact from './Contact';
import Resume from './Resume';
import { BrowserRouter,Route} from "react-router-dom";
function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Route path = '/' exact component = {Home} />
          <Route path = '/Resume' component = {Resume} />
        </BrowserRouter>
    </div>
  );
}

export default App;
