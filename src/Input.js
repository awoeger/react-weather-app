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
      <label htmlFor="city">Name your city</label>
      <input
        type="text"
        id="city"
        placeholder="Vienna"
        value={city}
        onChange={handleCityChange}
      />
      <button onClick={handleSubmitClick} type="button">
        Submit
      </button>
      <button onClick={handleUnitChange} type="button">
        Change temperature unit
      </button>
    </form>
  );
}
