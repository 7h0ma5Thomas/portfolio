import React from 'react'
import { Link } from 'react-router-dom'
import pills from '@/assets/pills2.jpg'
import './home.scss'

export default function Home() {
  return (
    <div className='home-body'>
      <img className='home-body-pic' src={pills} alt="Deux mains tenant une pillule chacune" />
      <h1 className='home-body-title'>Le choix vous appartient</h1>
      <span className='home-body-red-pill'>
        <Link className='home-body-red-link' to='/page2'>O</Link>
      </span>
      <span className='home-body-blue-pill'>
        <Link className='home-body-blue-link' to='/404'>O</Link>
      </span>
    </div>
  )
}
