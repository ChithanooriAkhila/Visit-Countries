import './index.css'

const Countries = props => {
  const {countriesList, addToVisitedCountries} = props

  const addToVisitedItem = event => {
    addToVisitedCountries(event.target.id)
  }

  return (
    <div className="countries-container">
      <h1>Countries</h1>
      <ul className="countries-list">
        {countriesList.map(countryItem => (
          <li key={countryItem.id} className="each-country">
            <p>{countryItem.name}</p>
            {countryItem.isVisited ? (
              <p>Visited</p>
            ) : (
              <button
                type="button"
                id={countryItem.id}
                onClick={addToVisitedItem}
                className="visit-button"
              >
                Visit
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Countries
