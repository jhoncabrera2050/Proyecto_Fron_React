
import React from 'react';
import 'bulma/css/bulma.css'
import '@fortawesome/fontawesome-free/js/all'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Cliente from './pages/Clientes';
import { ModalContextProvider } from './contexts/modal/modalContexts';

function App() {
  return (
    <ModalContextProvider>
      <Router>
        <Routes>
          <Route exact path="/" Component={Home}></Route>
          <Route exact path="/cliente" Component={Cliente}></Route>
        </Routes>
      </Router>
    </ModalContextProvider>

  );
}

export default App;
