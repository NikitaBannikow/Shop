
import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import Order from './Order.js';


const showOrders = (props) => {
    let summa = 0
    props.orders.forEach(el => summa += Number.parseFloat(el.price))
        
    return (<div> {props.orders.map(el => (
        <Order onDelete = {props.onDelete} key = {el.id} item = {el} />
    ))}
    <p className='summ'>Сумма: {new Intl.NumberFormat().format(summa)}₽</p>
    </div>)
}

const showNothing = () => {
    return (<div className='empty'>
        <h2>Корзина пуста</h2>
    </div>)
}

export default function Header(props) {
    let [cartOpen, setCartOpen] = useState(false)
    return (
    <header>
        <div>
            <span className='logo'>Название</span>
            <ul className='nav'>
                <li>about</li>
                <li>contact</li>
                <li>user</li>
            </ul>
            <FaShoppingCart onClick = {() => setCartOpen(cartOpen = !cartOpen)} className={`shop-cart ${cartOpen && 'active'}`}/>

            {cartOpen && (
                <div className='cart-op'>
                   {props.orders.length > 0 ?
                        showOrders(props) : showNothing()}
                </div>
            )}
        </div>
        <div className='presentation'></div>
    </header>
  )
}