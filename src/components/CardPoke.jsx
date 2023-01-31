import React from 'react'

const CardPoke = ({allElemts}) => {
  return (
    <section>
        <h1> All Pokemon</h1>
        <div>
        <img src={allElemts?.sprites.other['official-artwork'].front_shiny}alt="logo" />
        <ul>
            <li>Name: {allElemts?.name}</li>
            <li> Height: {allElemts?.height}</li>
            <li>Weight: {allElemts?.weight}</li>
            <li>Type: {allElemts?.types[0].type.name}</li>
            
        </ul>
        </div>
    </section>
  )
}

export default CardPoke
