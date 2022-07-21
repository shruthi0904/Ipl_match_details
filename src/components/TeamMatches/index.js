import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {
    teamInfo: {
      teamBannerUrl:
        'https://assets.ccbp.in/frontend/react-js/kxp-team-img.png',
      latestMatchDetails: {
        umpires: 'C Shamshuddin, RK Illingworth',
        result: 'Kings XI Punjab Won by 5 wickets',
        manOfTheMatch: 'S Dhawan',
        id: '1216546',
        date: '2020-10-20',
        venue: 'At Dubai International Cricket Stadium, Dubai',
        competingTeam: 'Delhi Capitals',
        competingTeamLogo:
          'https://assets.ccbp.in/frontend/react-js/dc-logo-img.png',
        firstInnings: 'Delhi Capitals',
        secondInnings: 'Kings XI Punjab',
        matchStatus: 'Won',
      },
      recentMatches: [
        {
          umpires: 'AK Chaudhary, Nitin Menon',
          result: 'Sunrisers Hyderabad Won by 69 runs',
          manOfTheMatch: 'JM Bairstow',
          id: '1216542',
          date: '2020-10-08',
          venue: 'At Dubai International Cricket Stadium, Dubai',
          competingTeam: 'Sunrisers Hyderabad',
          competingTeamLogo:
            'https://assets.ccbp.in/frontend/react-js/srh-logo-img.png',
          firstInnings: 'Sunrisers Hyderabad',
          secondInnings: 'Kings XI Punjab',
          matchStatus: 'Lost',
        },
      ],
      isLoading: true,
    },
  }

  componentDidMount() {
    this.getTeamInfo()
  }

  getTeamInfo = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const lms = data.latest_match_details
    const newLatestMatchDetails = {
      umpires: lms.umpires,
      result: lms.result,
      manOfTheMatch: lms.man_of_the_match,
      id: lms.id,
      date: lms.date,
      venue: lms.venue,
      competingTeam: lms.competing_team,
      competingTeamLogo: lms.competing_team_logo,
      firstInnings: lms.first_innings,
      secondInnings: lms.second_innings,
      matchStatus: lms.match_status,
    }

    const rm = data.recent_matches

    const newRecentMatches = rm.map(eachItem => ({
      umpires: eachItem.umpires,
      result: eachItem.result,
      manOfTheMatch: eachItem.man_of_the_match,
      id: eachItem.id,
      date: eachItem.date,
      venue: eachItem.venue,
      competingTeam: eachItem.competing_team,
      competingTeamLogo: eachItem.competing_team_logo,
      firstInnings: eachItem.first_innings,
      secondInnings: eachItem.secondInnings,
      matchStatus: eachItem.match_status,
    }))
    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: newLatestMatchDetails,
      recentMatches: newRecentMatches,
    }
    console.log(updatedData)
    this.setState({teamInfo: updatedData, isLoading: false})
  }

  render() {
    const {teamInfo, isLoading} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = teamInfo

    return (
      <div className="team-matches-card">
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          <div className="responsive-team-match">
            <img src={teamBannerUrl} className="banner-img" alt="team banner" />
            <LatestMatch
              matchDetails={latestMatchDetails}
              key={latestMatchDetails.id}
            />
            <ul className="recent-matches-container">
              {recentMatches.map(eachMatch => (
                <MatchCard key={eachMatch.id} matchDetails={eachMatch} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
