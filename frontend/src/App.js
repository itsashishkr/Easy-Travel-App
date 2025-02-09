import { useEffect } from "react";
import "./App.css";
import Layout from "./Components/Layout/Layout";
import axios from "axios";

function App() {
  const getData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/"); // Fetch data from backend
      console.log(response.data); // Log the data for debugging
    } catch (error) {
      console.error("Error fetching data:", error); // Handle errors
    }
  };

  useEffect(() => {
    getData(); // Call the getData function once when the component is mounted
  }, []);

  return <Layout />;
}
export default App;
