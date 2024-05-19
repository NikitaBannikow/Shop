import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Items from "./Components/Items";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      items: [
        {
          id: 1,
          title: 'Бутылка',
          img: "blini.jpg",
          desc: 'Хранит воду',
          category: 'Accessories',
          price: '1250.00'
        },
        {
          id: 2,
          title: 'Коврик',
          img: "kovrik.jpg",
          desc: 'На нем можно лежать',
          category: 'Accessories',
          price: '1500.00'
        },
        {
          id: 3,
          title: 'Коврик',
          img: "kovrik.jpg",
          desc: 'На нем можно лежать',
          category: 'Accessories',
          price: '1500.00'
        }
      ]
    }
  }
  
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Items items = {this.state.items} />
        <Footer />
      </div>)
  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if(el.id === item.id)
        isInArray = true
    })
    if (!isInArray)
      this.setState({orders: [...this.state.orders, item]})
  }

  delete0rder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }
}


export default App;
