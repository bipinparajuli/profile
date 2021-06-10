import React from 'react'
import {FaArrowLeft} from 'react-icons/fa'
import {Link} from 'react-router-dom'
const BackIcon = () => {
    return (
        <Link className="back" to="/">
            <FaArrowLeft />
        </Link >
    )
}

export default BackIcon
