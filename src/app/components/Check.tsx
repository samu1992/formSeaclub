import React, { useState } from 'react'
import Image from 'next/image'
import '../globals.css'


export default function Checkbox (){
    const [checked, setChecked] = useState(false)
    const handleClick = () => {
        setChecked(!checked)
    }

    return (
        <div id='checkbox'
            className={`checkbox ${checked ? 'checked' : ''}`}
            onClick={handleClick}>
            <Image src='/check.svg' width={12} height={12} alt='check' />
        </div>
    )
}