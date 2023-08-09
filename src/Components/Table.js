import React from 'react'
import '../App.css';

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'INR',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const TableHead = () =>{
  return (
    <thead>
       <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest</th>
            <th>Total Interest</th>
            <th>Invested Captial</th>
        </tr>
    </thead> 
  )
}

const TableBody = (props) => {
  const data = props.data
  const initalInvestment = props.initalInvestment
  return (
    <tbody>
    {data.map((i , ind)=>(
        <tr key={ind}>
            <td>{i.year}</td>
            <td>{formatter.format(i.savingsEndOfYear)}</td>
            <td>{formatter.format(i.yearlyInterest)}</td>
            <td>{formatter.format(i.savingsEndOfYear - initalInvestment + i.yearlyContribution * i.year)}</td>
            <td>{formatter.format(initalInvestment +  i.yearlyContribution * i.year)}</td>
        </tr>
        ))
      }
    </tbody>
    )
}

const Table = (props) => {
  console.log(props);
  const data = props.data
  const initalInvestment = props.initalInvestment
  
  return(
    <table>  
        <TableHead/>
        <TableBody  data ={data} initalInvestment={initalInvestment}/>
    </table>
  )
}

export default Table