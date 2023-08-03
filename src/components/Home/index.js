import {Link} from 'react-router-dom'

import RegisterContext from '../../context/RegisterContext'
import Header from '../Header'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

const Home = () => (
  <>
    <Header />
    <RegisterContext.Consumer>
      {value => {
        const {isRegistered, name, topic} = value

        const topicText = topicsList.filter(each => each.id === topic)

        return (
          <div>
            {isRegistered ? (
              <>
                <h1>Hello {name}</h1>
                <p>{`Welcome to ${topicText[0].displayText}`}</p>
              </>
            ) : (
              <>
                <h1>Welcome to Meetup</h1>
                <p>Please register for the topic</p>
                <Link to="/register">
                  <button type="button">Register</button>
                </Link>
              </>
            )}
            <img
              src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
              alt="meetup"
            />
          </div>
        )
      }}
    </RegisterContext.Consumer>
  </>
)

export default Home
