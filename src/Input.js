export default function Input({
  city,
  setCity,
  handleSubmitClick,
  handleUnitChange,
}) {
  // Setting state for the Input.js values
  function handleCityChange(event) {
    setCity(event.currentTarget.value);
  }

  return (
    <form>
      <input
        className="input-field"
        type="text"
        id="city"
        placeholder="Vienna"
        value={city}
        onChange={handleCityChange}
      />
      <button className="submit" onClick={handleSubmitClick} type="button">
        Submit
      </button>
      <button onClick={handleUnitChange} type="button">
        Change unit
      </button>
    </form>
  );
}
