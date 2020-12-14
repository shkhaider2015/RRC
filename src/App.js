import React from "react";
import InputOutput from "./Components/inputOutput";
import { Store } from "./Components/reducer";
import { Provider } from "react-redux";


class App extends React.Component {
  

  render() {
    return (
      <div>
        <h1>App</h1>
        <Provider store={Store} >
        <InputOutput />

        </Provider>
      </div>
    );
  }
}

export default App;
