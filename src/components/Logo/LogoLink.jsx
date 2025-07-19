import React from 'react';
import { Link } from "react-router-dom";
import classNames from 'classnames';
import Logo from './Logo';
import { LogoFull } from './LogoFull';
import AmcfLogo from '../../assets/images/amcf-logo.png';

function LogoLink({to, full, size}) {
  const wrapperClass = classNames({
    "tyn-logo" : true,
    [`tyn-logo-${size}`] : size
  })
  return (
    <Link to={to} className={wrapperClass}>{full ? <LogoFull /> :  <img src={AmcfLogo} alt="logo" />}</Link>
  )
}

export default LogoLink