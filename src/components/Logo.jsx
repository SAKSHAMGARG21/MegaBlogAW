import React from 'react'
import { Link } from 'react-router-dom'

function Logo({ width = '100px' }) {
  return (
    <div className={`${width}`}>
      <Link to={"/"}>
        BLOGMania
      </Link>
    </div>
  )
}

export default Logo