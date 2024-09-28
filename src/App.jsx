import ConverterForm from "./components/ConverterForm"

const App = () => {
  return (
    <div className="currency-converter">
      <h2 className="converter-title">Currency Converter</h2>
      <ConverterForm />
      <p style="text-align: center; color: #fff;">By Cyber Tunnel</p>
    </div>
  )
}

export default App;
