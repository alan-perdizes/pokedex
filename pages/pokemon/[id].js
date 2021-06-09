import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

function Pokemon() {

  const Router = useRouter()

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon${Router.query.id}`, { method: 'get'})
      .then(body => body.json())
      .then(data => {
        
      })
  })

  // console.log(Router)

  return (<>
    <h1>Hello Pokemon {Router.query.id}</h1>
  </>)
}

export default Pokemon