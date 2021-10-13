import React from 'react'
import { RichText } from 'prismic-reactjs';

function Banner({ title }) {
  return (
    <div style={{ width: 'calc(100vw - 144px)', height: 'calc(100vh - 144px)', display: 'flex', background: '#000', alignItems: 'flex-end', padding: '70px'}} >
      <h1 style={{color: '#FFF', fontSize: '6rem', maxWidth: 792, lineHeight: '122px' }}>{RichText.asText(title)}</h1>
    </div>
  )
}

export default Banner
