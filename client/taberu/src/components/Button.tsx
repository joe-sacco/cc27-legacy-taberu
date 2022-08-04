import React, { useState } from 'react'
import './button.css';

type Props = {
  text: string;
  link: string;
}


const ButtonCommon: React.FC<Props> = ({ link, text }) => {
  return <p className="button"><a href={ link }>{ text }</a></p>
}
  
export default ButtonCommon;