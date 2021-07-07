import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import PokemonTitle from '../../components/pokemon/title'
import PokemonStats from '../../components/pokemon/stats'

function Pokemon() {

  const Router = useRouter()
  const [pokemon, setPokemon] = useState({})

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${Router.query.id}`, { method: 'get'})
      .then(body => body.json())
      .then(data => {
        const { abilities, height, name, sprites, stats, types, weight } = data
        setPokemon({ abilities, height, name, sprites, stats, types, weight })
      })
  })

  if(!pokemon){
    return <span>Carregando</span>
  }

  // console.log(Router)

  return (<>
    {console.log()}
    <PokemonTitle id={Router.query.id} name={pokemon.name} />
    <img
      src={pokemon.sprites.other["official-artwork"].front_default}
      alt={`imagem do pokemon ${pokemon.name}`}
      width={250}
    />
    <PokemonStats stats={pokemon.stats} />
  </>)
}

export default Pokemon