import React from 'react'

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
