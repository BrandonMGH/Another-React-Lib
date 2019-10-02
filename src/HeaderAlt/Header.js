import React from 'react'
import './Header.css'

export default function Header(props) {
    console.log(props.style)
    return (
        <div>
            <header className={props.style}> Header </header>
        </div>
    )
}
