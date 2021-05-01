import React from 'react';

const Weather = props => (
  <div className="infoWeath">
  { props.city &&
    <div>
      <p>Температура : {props.temp} C°</p>
      <p>Влажность : {props.humidity} %</p>
      <p>Давление : {props.pressure} гПа</p>
      <p>Скорость ветра : {props.wind} м/с</p>
    </div>
  }
  <p className="error"> {props.error} </p>
  </div>
);

export default Weather;
