import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {id, name, teamImgUrl} = teamDetails

  return (
    <Link to={`/team-matches/${id}`} className="item-link">
      <li className="team-card">
        <img className="team-img" src={teamImgUrl} alt={name} />
        <p className="team-name">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
