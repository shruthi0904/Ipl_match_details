import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const {competingTeamLogo, competingTeam, result, matchStatus} = matchDetails
  const statusClassName = matchStatus === 'Lost' ? 'loss' : 'won'

  return (
    <li className="match-card">
      <img
        className="match-logo"
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
      />
      <p className="match-heading">{competingTeam}</p>
      <p className="match-result">{result}</p>
      <p className={statusClassName}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
