export default function RegionFilter({ region, setRegion }) {
  return (
    <select value={region} onChange={(e) => setRegion(e.target.value)}>
      <option value="all">All</option>
      <option value="africa">Africa</option>
      <option value="americas">Americas</option>
      <option value="asia">Asia</option>
      <option value="europe">Europe</option>
      <option value="oceania">Oceania</option>
    </select>
  );
}
