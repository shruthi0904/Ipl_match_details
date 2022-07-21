import './index.css'

const LatestMatch = props => {
  const {matchDetails} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = matchDetails

  return (
    <div className="latest-match-card">
      <h1 className="latest-match-heading">Latest Matches</h1>
      <div className="latest-match-logo-innings-container">
        <div className="latest-match-and-logo">
          <div className="latest-match-container">
            <p className="competing-team">{competingTeam}</p>
            <p className="date">{date}</p>
            <p className="venue">{venue}</p>
            <p className="result">{result}</p>
          </div>
          <img
            src={competingTeamLogo}
            alt={`latest match ${competingTeam}`}
            className="competing-logo"
          />
        </div>
        <div className="innings-container">
          <p className="innings">First Innings</p>
          <p className="innings-value">{firstInnings}</p>
          <p className="innings">Second Innings</p>
          <p className="innings-value">{secondInnings}</p>
          <p className="man-of-match">Man Of The Match</p>
          <p className="man-of-match-value">{manOfTheMatch}</p>
          <p className="umpires">Umpires</p>
          <p className="umpires-value">{umpires}</p>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
