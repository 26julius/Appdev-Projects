import { Link } from "react-router-dom"
const games = [
    {id: 1, name: 'Teamfight Tactics', description: 'game 1' },
    {id: 2, name: 'Valorant', description: 'game 2' },
    {id: 3, name: '2XKO', description: 'game 3' },
    {id: 4, name: 'League of Legends', description: 'game 4' }
]
export default function Games () {
    return(
        <>
        <h1>Games List</h1> 
        <ul>
            {games.map((game)=>(
                
            <li><Link to={`/games/${game.id}`} state={game}>{game.name}</Link> - {game.description}</li>
            ))}
        </ul>
        </>
    )
}