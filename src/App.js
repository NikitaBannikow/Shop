import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

class App extends React.Component() {
  constructor(props){
    super(props)
    this.state = {
      items: [
        {
          
        }
      ]
    }
  }
  render() {
    return (
    <div className="wrapper">
      <Header/>
      <Footer/>
      </div>
    );
  }
}

export default App;
