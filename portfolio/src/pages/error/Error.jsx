import React from 'react'
import failureBig from '@/assets/failure_big.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import './error.scss'

export default function Error() {
  return (
    <div className='error-body'>
        <Link className='error-body-title-link' to='/home'>
          <h1 className='error-body-title'>La page n'existe pas</h1>
        </Link>
      <img className='error-body-pic' src={failureBig} alt="code erreur" />
      <div className='error-body-ctn'>
        <button className='error-body-btn'>
          <Link className='error-body-btn-link' to='/home'>
            <FontAwesomeIcon className='chevron' icon={faArrowsRotate} />
          </Link>
        </button> 
      </div>
    </div>
  )
}
