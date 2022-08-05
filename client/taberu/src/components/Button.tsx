import React, { useState } from 'react'
import { Link } from "react-router-dom";
import './button.css';

type Props = {
  text: string;
  link: string;
}

const buttonCommon: React.FC<Props> = ({ link, text }) => {
  return <p className="button"><Link to={ link }>{ text }</Link></p>
}
  
export default buttonCommon;