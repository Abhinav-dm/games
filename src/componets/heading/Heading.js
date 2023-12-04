import React from 'react'
import '../heading/heading.css'
import fighter1 from '../assets/images/fighter1.png'

const Heading = () => {
    return (
        <>
            <div className='container-main-heading'>
                <div className='container_rarer'>
                    <div className='fighter_heading'>
                        <div className='w_tabletop '>
                            <h1 className='w_fighter_heading'>heading</h1>
                            <p className='pera_heading'>
                                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
                            </p>
                        </div>
                        <div>
                            <img src={fighter1} className='cliped-fighter2' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Heading