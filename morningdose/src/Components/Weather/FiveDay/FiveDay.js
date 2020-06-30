import React from 'react';

function FiveDay({listData}) {



const rowOne=listData.slice(0,8)
const rowTwo=listData.slice(8,16)
const rowThree=listData.slice(16,24)
const rowFour=listData.slice(24,32)
const rowFive=listData.slice(32,40)

  
  
let fiveDayTempsOne = <h1>Loading</h1>
let fiveDayTempsTwo = <h1>Loading</h1>
let fiveDayTempsThree = <h1>Loading</h1>
let fiveDayTempsFour = <h1>Loading</h1>
let fiveDayTempsFive = <h1>Loading</h1>


if(listData[0]) {
  fiveDayTempsOne = rowOne.map(obj => {
  return<li>{Math.round(obj.main.temp)}</li>
  })
}
if(listData[0]) {
  fiveDayTempsTwo = rowTwo.map(obj => {
    return<li>{Math.round(obj.main.temp)}</li>
  })
}
if(listData[0]) {
  fiveDayTempsThree = rowThree.map(obj => {
    return<li>{Math.round(obj.main.temp)}</li>
  })
}
if(listData[0]) {
  fiveDayTempsFour = rowFour.map(obj => {
    return<li>{Math.round(obj.main.temp)}</li>
  })
}
if(listData[0]) {
  fiveDayTempsFive = rowFive.map(obj => {
    return<li>{Math.round(obj.main.temp)}</li>
  })
}
    
  return (
    <div className="FiveDay">
        <h1>FiveDay</h1>
        <ul class="row">{fiveDayTempsOne}</ul>
        <ul class="row">{fiveDayTempsTwo}</ul>
        <ul class="row">{fiveDayTempsThree}</ul>
        <ul class="row">{fiveDayTempsFour}</ul>
        <ul class="row">{fiveDayTempsFive}</ul>
        <h6>hi</h6>
    </div>
  );
}

export default FiveDay;
