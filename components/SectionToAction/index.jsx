import React from 'react'
import { RichText } from 'prismic-reactjs';
import Img from "gatsby-image"


function SectionFullImg({ title, iconImage, buttonLabel, buttonLink}) {
  return (
    <>
      <h1 style={{ fontSize: '4rem' }}>{title}</h1>
      <a href={buttonLink} target="_blank" rel="noreferrer">{buttonLabel}</a>
      <Img fluid={iconImage} />
    </>
  )
}


function SectionDescription({ title, paragraph, buttonLabel, buttonLink}) {
  return (
    <>
      <h1 style={{ fontSize: '4rem' }}>{title}</h1>
      {RichText.render(paragraph)}
      <a href={buttonLink} target="_blank" rel="noreferrer">{buttonLabel}</a>
    </>
  )
}

function SectionToAction({ title, paragraph, buttonLabel, buttonLink, iconImage }) {
  const Component = iconImage ? SectionFullImg : SectionDescription
  const props = {
    title,
    buttonLabel,
    buttonLink,
    ...(iconImage && { iconImage }),
    ...(paragraph && { paragraph })
  }
  return (
    <article style={{ padding: '20vh 0', minHeight: 'auto'}}>
      <Component {...props} />
    </article>
  )
}

export default SectionToAction;
