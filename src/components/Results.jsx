import React from "react";
import { calculateInvestmentResults, formatter } from "../util/investment";

export const Results = ({ userInput }) => {
  console.log(userInput);
  const resultData = calculateInvestmentResults(userInput);
  const initialInvestMent =
    resultData[0].valueEndOfYear -
    resultData[0].interest -
    resultData[0].annualInvestment;
  console.log(resultData);
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultData.map((YearData) => {
          const totalInterest =
            YearData.valueEndOfYear -
            YearData.annualInvestment * YearData.year -
            initialInvestMent;
            const totalAmountInvested=YearData.valueEndOfYear-totalInterest
          return (
            <tr key={YearData.year}>
              <td>{YearData.year}</td>
              <td>{formatter.format(YearData.valueEndOfYear)}</td>
              <td>{formatter.format(YearData.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
