import React from 'react'

const showOrders = (props) =>{
let summa = 0
props.orders.forEach(el => summa += Number.parseFloat(el.price))
return(<div>
    {props.orders.map(el =>(
      <Order onDelete ={props.onDelete} key={el.id} item={el}/>
    ))}
    <p className='summa'>Сумма: {new Intl.NumberFormat().format(summa)}</p>
</div>)
}

export default function Header() {
  return (
    <header>
        <div>
            <span className='logo'>Название</span>
            <ul className='nav'>
                <li>about</li>
                <li>contact</li>
                <li>user</li>
            </ul>
        </div>
        <div className='presentation'></div>
    </header>

  )
}
