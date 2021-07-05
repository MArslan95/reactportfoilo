import React from 'react'
import './portfoilolist.scss'
export default function PortfoiloList({title,active,setSelected,id}) {
    return (
        <li className={active?"portfoilolist active":"portfoilolist"} onClick={() =>setSelected(id)}>
            {title}
        </li>
    )
}
