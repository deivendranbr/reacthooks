import React from 'react';
import Basichooks from "./Basichooks";
import Reducerhook from "./Reducerhook";
import Reactlazy from "./Reactlazy";
import Modal from "./Reactportal";

function App() {
  return (
    <div className="App">
      <Basichooks></Basichooks>
      <Reducerhook></Reducerhook>
      <Reactlazy></Reactlazy>
      <Modal>
        <button>Modal button</button>
      </Modal>
    </div>
  );
}

export default App;
