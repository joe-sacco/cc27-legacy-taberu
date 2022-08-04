import React, { useState } from 'react'
import './button.css';

type Props = {
  text: string;
  link: string;
}

const ButtonChild: React.FC<Props> = ({ link, text }) => {
  return <p className="button"><a href={ link }>{ text }</a></p>
}
  
export default ButtonChild;
