import React from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'


const About = () => {
    return (
        <section className='about' id='about'>
            <div className='container'>
                <div className='banner'>
                    <div className='top'>
                        <h1 className='heading'>ABOUT US</h1>
                        <p>The only thing we're serious about is food.</p>
                    </div>
                    <p className='mid'>
                        Food is the heart of culture and connection, a symphony of flavors and aromas that nourishes both body and soul. It tells stories, evokes memories, and brings people together. From the simplest ingredients to the most elaborate dishes, food is a celebration of life and love.
                    </p>
                    <Link to={"/"}>Explore Menu
                        <span>
                            <HiOutlineArrowNarrowRight />
                        </span>
                    </Link>
                </div>
                <div className='banner'>
                    <img src='/about.png' alt='about'/>
                </div>
            </div>

        </section>
    )
}

export default About