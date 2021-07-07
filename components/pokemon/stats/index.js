import React from 'react'

function PokemonStats (props) {

  if(!props.stats) {
    return <span>Carregando</span>
  }

  return (
    <div>
      <table>
        <thead>
           <tr>
             <th colSpan={2}>Stats</th>
           </tr>
        </thead>
        <tbody>
          {/*console.log(props.stats)*/}
          {props.stats.map((stat, index) => {
            return (
              <tr key={index}>
                <td> {stat.stat.name} </td>
                <td> {stat.base_stat} </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default PokemonStats