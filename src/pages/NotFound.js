import React from 'react'
import { Link } from 'react-router-dom'

export const NotFound = () => (
  <div>
    <h1 className='title'>404!</h1>
    <h2 className='subtitle'>No existe la página</h2>
    <Link to="/" className="button is-info">Go Back</Link>
  </div>
)