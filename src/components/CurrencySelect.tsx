interface Props {
  currencyList: string[];
  setCountry: (data: string) => void;
}
const CurrencySelect = ({ currencyList, setCountry }: Props) => {
  return (
    <>
      <select
        style={{ fontFamily: "monospace" }}
        onChange={(event) => setCountry(event?.target.value)}
      >
        {currencyList &&
          currencyList.map((list, index) => (
            <option key={index}>{list}</option>
          ))}
      </select>
    </>
  );
};

export default CurrencySelect;
