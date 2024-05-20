import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Items from "./Components/Items";
import Order from "./Components/Order";
import Categories from "./Components/Categories";
import ShowFullItem from "./Components/ShowFullItem";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'Бутылка',
          img: "blini.jpg",
          desc: 'Хранит воду',
          category: 'accessories',
          price: '1250.00'
        },
        {
          id: 2,
          title: 'Коврик',
          img: "kovrik.jpg",
          desc: 'На нем можно лежать',
          category: 'equipment',
          price: '1500.00'
        },
        {
          id: 3,
          title: 'Штани',
          img: "kovrik.jpg",
          desc: 'Их можно носить',
          category: 'clothes',
          price: '1500.00'
        }
      ],
      showFullItem: false,
      fullItem: {}
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }
  
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
        <Categories chooseCategory = {this.chooseCategory}/>
        <Items onShowItem = {this.onShowItem} items = {this.state.currentItems} onAdd={this.addToOrder}/>
        {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem = {this.onShowItem} item = {this.state.fullItem} />}
        <Footer />
      </div>)
  }

  onShowItem(item) {
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
  }

  chooseCategory(category) {
    if(category === 'all') {
      this.setState({currentItems: this.state.items})
      return
    }

    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
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
}


export default App;
