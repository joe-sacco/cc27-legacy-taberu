import React from 'react';
import '../styles/components/Upload.css';


export default function Upload(props: any) {

  return (
    <label htmlFor={`upload-button-${props.name}`}>
      <input
        accept="image/*"
        className="upload_input"
        id={`upload-button-${props.name}`}
        name={props.name}
        multiple
        type="file"
        onChange={props.onChange}
      />
      <span className="upload_button" variant="contained" {...props}>
        {props.children}
      </span>
    </label>
  );
}
