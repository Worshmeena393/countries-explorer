import { useEffect, useState } from "react";
import CountryCard from "./components/CountryCard";
import SearchBar from "./components/SearchBar";
import RegionFilter from "./components/RegionFilter";
import "./App.css";

export default function App() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("all");

  useEffect(() => {
    async function fetchCountries() {
      setLoading(true);
      setError(null);

      try {
        let url = "https://restcountries.com/v3.1/all";

        if (search.length >= 2) {
          url = `https://restcountries.com/v3.1/name/${encodeURIComponent(
            search
          )}`;
        } else if (region !== "all") {
          url = `https://restcountries.com/v3.1/region/${region}`;
        }

        const response = await fetch(url);

        if (response.status === 404) {
          setCountries([]);
          return;
        }

        if (!response.ok) {
          throw new Error("Failed to fetch countries");
        }

        const data = await response.json();
        setCountries(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchCountries();
  }, [search, region]); // ✅ dependency array EXACT

  return (
    <div className="container">
      <h1>🌍 Countries Explorer</h1>

      <SearchBar search={search} setSearch={setSearch} />
      <RegionFilter region={region} setRegion={setRegion} />

      {loading && <p className="loading">Loading countries...</p>}

      {error && (
        <div className="error">
          <p>Error: {error}</p>
          <button onClick={() => window.location.reload()}>Retry</button>
        </div>
      )}

      {!loading && !error && countries.length === 0 && (
        <p>No results found</p>
      )}

      <div className="grid">
        {countries.map((country) => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </div>
    </div>
  );
}
