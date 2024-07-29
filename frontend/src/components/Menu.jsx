import React from 'react'
import {data} from '../restApi.json'
const Menu = () => {
    return (
        <section className='menu' id='menu'>
            <div className='container'>
                <div className='heading_section'>
                    <h1 className='heading'>POPULAR DISHES</h1>
                    <p>
                        Popular dishes are timeless treasures, beloved for their rich flavors and comforting familiarity. They transcend borders and cultures, from savory pizza and sushi to aromatic curries and hearty pasta. Each bite offers a taste of tradition, a hint of home, and a shared experience that brings people closer together
                    </p>
                </div>
                <div className='dishes_container'>
                    {
                        data[0].dishes.map(element=>{
                            return(
                                <div className='card' key={element.id}>
                                    <img src={element.image} alt={element.title}/>
                                    <h3>{element.title}</h3>
                                    <button>{element.category}</button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </section>
    )
}

export default Menu