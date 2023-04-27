import React, { useEffect, useState } from 'react'
import './ScrollToTheTop.css'

export default function ScrollToTheTop() {
    let [showButton, setShowButton] = useState(false)

    useEffect(()=>{
        const handleScrollButtonVisibility = () => {
            window.pageYOffset > 250 ? setShowButton(true) : setShowButton(false)
        }

        window.addEventListener('scroll', handleScrollButtonVisibility)

        return () => {
            window.removeEventListener('scroll', handleScrollButtonVisibility)
        }
    },[])

    let scrollUp = () =>{
        window.scrollTo({
            top:0,
            behavior:'smooth',
        })
    }
    return (
        <>
        {showButton && (
            <div className='btnToTop' onClick={scrollUp} >
                <svg xmlns="http://www.w3.org/2000/svg" id='btn-scrollTop' class="icon icon-tabler icon-tabler-arrow-badge-up-filled" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M11.375 6.22l-5 4a1 1 0 0 0 -.375 .78v6l.006 .112a1 1 0 0 0 1.619 .669l4.375 -3.501l4.375 3.5a1 1 0 0 0 1.625 -.78v-6a1 1 0 0 0 -.375 -.78l-5 -4a1 1 0 0 0 -1.25 0z" stroke-width="0" fill="currentColor"></path>
                </svg>
            </div>
        )}
        </>
    )
}
