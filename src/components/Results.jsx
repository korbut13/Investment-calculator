import { formatter } from "../util/investment";

export default function Results({results, initialInvestment, annualInvestment}){
  console.log("hello",results)

  function deriveTotalInterest(arr, currIndex){
    const period = arr.slice(0, currIndex+1)
    const totalInterest = period.reduce((acc, curr) => acc + curr.interest, 0);
    return totalInterest;
  }
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment value</th>
          <th>Interest (year)</th>
          <th>Total Interest</th>
          <th>Invested capital</th>
        </tr>
      </thead>
      <tbody>
        {results.map((result, indexResult, arr) => {

          return <tr key={indexResult}>
            <th>{result.year}</th>
            <th>{formatter.format(result.valueEndOfYear)}</th>
            <th>{formatter.format(result.interest)}</th>
            <th>{formatter.format(deriveTotalInterest(arr, indexResult))}</th>
            <th>{formatter.format(initialInvestment + (indexResult+1)*annualInvestment)}</th>
          </tr>
        })}
      </tbody>
    </table>
  )
}
