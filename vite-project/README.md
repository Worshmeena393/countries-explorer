# 🌍 Countries Explorer

A React application that allows users to explore countries around the world using real data from the **REST Countries API**.  
Users can search for countries, filter by region, and view basic information about each country.

---

## 🚀 Features

- Load real country data from an API
- Search countries by name (input)
- Filter countries by region (dropdown)
- Display loading state while fetching data
- Show error state with a Retry button
- Responsive country cards
- Safe rendering (handles missing fields)
- Bonus feature implemented: "No results found" message

---

## 🛠️ Technologies Used

- React (functional components, useState, useEffect)
- JavaScript (ES6)
- REST Countries API
- CSS for styling

---

## 🌐 API Endpoints Used

- Get all countries: `https://restcountries.com/v3.1/all`  
- Search by name: `https://restcountries.com/v3.1/name/{name}`  
- Filter by region: `https://restcountries.com/v3.1/region/{region}`

---

## 📦 Data Fields Used from API

For each country:

- Country name: `name.common`
- Flag image: `flags.png`
- Region: `region`
- Population: `population`

Optional fields (if needed):

- Capital: `capital[0]`
- Country code: `cca3`

---

## 📊 State Management

The app uses the following state variables:

- `countries` → array of countries
- `loading` → boolean for loading state
- `error` → string or null for error messages
- `search` → string for search input
- `region` → string for region filter (default: `"all"`)

---

## ▶️ How to Run the Project

1. **Clone the repository:**

```bash
git clone https://github.com/your-username/countries-explorer
cd countries-explorer

npm install
npm run dev
Open in browser: http://localhost:5173

