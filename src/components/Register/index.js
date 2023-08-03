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

const Register = props => (
  <>
    <Header />
    <RegisterContext.Consumer>
      {value => {
        const {
          getRegistered,
          registerError,
          name,
          topic,
          updateError,
          updateName,
          updateTopic,
        } = value

        const submitForm = event => {
          event.preventDefault()
          if (name !== '') {
            const {history} = props
            getRegistered()
            history.replace('/')
          } else {
            updateError()
          }
        }

        return (
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
              alt="website register"
            />
            <form>
              <h1>Let us join</h1>
              <label htmlFor="name">NAME</label>
              <input
                type="text"
                placeholder="Your name"
                id="name"
                value={name}
                onChange={event => updateName(event.target.value)}
              />
              <label htmlFor="topics">TOPICS</label>
              <select
                id="topics"
                value={topic}
                onChange={event => updateTopic(event.target.value)}
              >
                {topicsList.map(each => (
                  <option key={each.id} value={each.id}>
                    {each.displayText}
                  </option>
                ))}
              </select>
              <button type="submit" onClick={submitForm}>
                Register Now
              </button>
              {registerError ? <p>please enter your name?</p> : null}
            </form>
          </div>
        )
      }}
    </RegisterContext.Consumer>
  </>
)

export default Register
