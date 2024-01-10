import CurrencySelect from "./CurrencySelect";

interface Props {
  result: string;
  currencyList: string[];
  handleClick: () => void;
  setAmount: (amount: string) => void;
  setFromCountry: (fromCountry: string) => void;
  setToCountry: (toCountry: string) => void;
}
const CurrencyConverterContainer = ({
  result,
  currencyList,
  handleClick,
  setAmount,
  setFromCountry,
  setToCountry,
}: Props) => {
  return (
    <>
      <div id="converter-container">
        <h2>Currency Converter</h2>
        <input
          onChange={(event) => setAmount(event.target.value)}
          type="number"
          placeholder="Enter amount"
        />
        <CurrencySelect
          currencyList={currencyList}
          setCountry={setFromCountry}
        />
        <CurrencySelect currencyList={currencyList} setCountry={setToCountry} />
        <button onClick={handleClick}>Convert</button>
        <p>{result}</p>
      </div>
    </>
  );
};

export default CurrencyConverterContainer;
