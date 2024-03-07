/**
 * Location information component to display event details.
 * @param {Object} props.info - The information about the event.
 * @param {number} props.info.id - The ID of the event.
 * @param {string} props.info.title - The title of the event.
 */
const LocationInfoBox = ({ info }) => {
  return (
    <div className="location-info">
      <h2>Event Location Info</h2>
      <ul>
        <li>
          ID: <strong>{info.id}</strong>
        </li>
        <li>
          TITLE: <strong>{info.title}</strong>
        </li>
      </ul>
    </div>
  )
}

export default LocationInfoBox
