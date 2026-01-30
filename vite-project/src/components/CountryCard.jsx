export default function CountryCard({ country }) {
  return (
    <div className="card">
      <img
        src={country.flags?.png}
        alt={country.name?.common}
      />
      <h3>{country.name?.common}</h3>
      <p>Region: {country.region ?? "N/A"}</p>
      <p>
        Population:{" "}
        {country.population
          ? country.population.toLocaleString()
          : "N/A"}
      </p>
    </div>
  );
}
