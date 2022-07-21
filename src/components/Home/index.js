import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {iplTeamsList: [], isLoading: true}

  componentDidMount() {
    this.getTeamsList()
  }

  getTeamsList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data
    const updatedData = teams.map(eachData => ({
      name: eachData.name,
      id: eachData.id,
      teamImgUrl: eachData.team_image_url,
    }))
    this.setState({iplTeamsList: updatedData, isLoading: false})
  }

  render() {
    const {iplTeamsList, isLoading} = this.state

    return (
      <div className="home-page">
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="app-content">
            <div className="app-heading-container">
              <img
                className="app-logo"
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                alt="ipl logo"
              />
              <h1 className="app-heading">IPL Dashboard</h1>
            </div>
            <ul className="teams-container">
              {iplTeamsList.map(eachTeam => (
                <TeamCard key={eachTeam.id} teamDetails={eachTeam} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default Home
