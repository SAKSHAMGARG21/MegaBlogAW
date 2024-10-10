import React from 'react'
import { Link } from 'react-router-dom'

function Logo({ width = '100px' }) {
  return (
    <div className={`${width}`}>
      <Link to={"/"}>
        Logo
      </Link>
    </div>
  )
}

export default Logo