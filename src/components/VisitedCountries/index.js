import './index.css'

const VisitedCountries = props => {
  const {visitedCountries, deleteFromVisitedCountries} = props

  const removeFromVisitedCountries = event => {
    deleteFromVisitedCountries(event.target.id)
  }

  return (
    <div>
      <h1>Visited Countries</h1>
      <ul className="visited-countries-container">
        {visitedCountries.length === 0 ? (
          <p className="heading">No Countries Visited Yet!</p>
        ) : (
          visitedCountries.map(country => (
            <li key={country.id} className="visited-country">
              <img
                src={country.imageUrl}
                alt="thumbnail"
                className="country-image"
              />
              <div className="remove-container">
                <p>{country.name}</p>
                <button
                  type="button"
                  id={country.id}
                  onClick={removeFromVisitedCountries}
                  className="remove-button"
                >
                  Remove
                </button>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  )
}

export default VisitedCountries
