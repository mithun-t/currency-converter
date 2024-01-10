import { useEffect, useState } from "react";
import axios from "axios";
import "../src/App.css";
import CurrencyConverterContainer from "./components/CurrencyConverterContainer";

function App() {
  const [currencyList, setCurrencyList] = useState([]);
  const [fromCountry, setFromCountry] = useState("");
  const [toCountry, setToCountry] = useState("");
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(true);

  //
  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        url: "https://currency-exchange.p.rapidapi.com/listquotes",
        headers: {
          "X-RapidAPI-Key":
            "8b3794ddb1msh97fb1a307bd5b83p1c2625jsn58f5c00c04d3",
          "X-RapidAPI-Host": "currency-exchange.p.rapidapi.com",
        },
      };
      try {
        const response = await axios.request(options);
        setCurrencyList(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  //
  const handleClick = async () => {
    if (amount === "") {
      alert("Enter amount to convert");
      return;
    } else if (parseFloat(amount) < 0) {
      alert("Can't enter negative amount");
      return;
    } else if (fromCountry === toCountry) {
      setResult(amount);
      return;
    }
    const options = {
      method: "GET",
      url: "https://currency-exchange.p.rapidapi.com/exchange",
      params: {
        from: `${fromCountry}`,
        to: `${toCountry}`,
        q: `${amount}`,
      },
      headers: {
        "X-RapidAPI-Key": "8b3794ddb1msh97fb1a307bd5b83p1c2625jsn58f5c00c04d3",
        "X-RapidAPI-Host": "currency-exchange.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      setResult((parseFloat(response.data) * parseFloat(amount)).toFixed(2));
    } catch (error) {
      alert(error);
    }
  };
  //

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <CurrencyConverterContainer
          currencyList={currencyList}
          result={result}
          handleClick={handleClick}
          setAmount={setAmount}
          setFromCountry={setFromCountry}
          setToCountry={setToCountry}
        />
      )}
    </>
  );
}
//
export default App;
