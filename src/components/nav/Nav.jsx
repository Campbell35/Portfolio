import React from 'react'
import {MdHome} from 'react-icons/md'
import {IoIosInformationCircle} from 'react-icons/io'
import {ImBriefcase} from 'react-icons/im'
import {ImProfile} from 'react-icons/im'
import {IoIosContact} from 'react-icons/io'
import './nav.css'


const Nav = () => {
  return (
    <nav>
      <a href="#"><MdHome/></a>
      <a href="#about"><IoIosInformationCircle/></a>
      <a href="#experience"><ImBriefcase/></a>
      <a href="#portfolio"><ImProfile/></a>
      <a href="#contact"><IoIosContact/></a>
    </nav>
  )
}

export default Nav