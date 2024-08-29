// import React from 'react'

type CardProp={
    image: string,
    title?: string,
    des?:string,

}

const Card = ({title, image}:CardProp) => {
  return (
    <div>
        <img src={image} alt="image" />
      <h1>{title}</h1>
      <p></p>
    </div>
  )
}

export default Card
