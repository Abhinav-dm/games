import React from 'react'
import '../baner/baner.css';


const Baner = () => {
    return (
        <>
            <div className='main-background'>
                <div className='default-margin'>
                    <div className='baner-sub'>
                        <p className='baner-guide'>guide</p>
                        <p className='baner-guide-text'>new player guide</p>
                    </div>
                </div>
            </div>
            <div className='container-main'>
                <div className='container'>
                    <div className='guide_shape'>
                        <div className='container-guide-shape'>
                            <p className='everbody_heros'>what is everbody heros?</p>
                        </div>
                        <div className='container-guide-shape_red'>
                            <p className='everbody_heros_red'>what is tabletop roleplay?</p>
                        </div>
                        <div className='container-guide-shape'>
                            <p className='everbody_heros_play'>how do i play</p>
                        </div>
                        <div className='container-guide-shape'>
                            <p className='everbody_heros_play'>how do i gm?</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Baner