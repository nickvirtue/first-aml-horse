import React from "react";
import {useObserver} from "mobx-react-lite";


const App = () => {
  return useObserver(() => {
    return (
        <h1>First AML Horse</h1>
    );
  });
};

export default App;
