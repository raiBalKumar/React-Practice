import React, { Component } from "react";
import { connect } from "react-redux";
import { Sparklines, SparklinesLine } from "react-sparklines";

import Chart from "../components/chart";
import GoogleMap from "../components/google_maps";

class Display extends Component {
  displayData(data) {
    const name = data.city.name;
    const temp = data.list.map(weather => weather.main.temp);
    const pressure = data.list.map(weather => weather.main.pressure);
    const humidity = data.list.map(weather => weather.main.humidity);
    const { lon, lat } = data.city.coord;

    return (
      <tr key={data.city.id}>
        <td>
          <GoogleMap lon={lon} lat={lat} />
        </td>
        <td>
          <Chart data={temp} color="red" />
        </td>
        <td>
          <Chart data={pressure} color="green" />
        </td>
        <td>
          <Chart data={humidity} color="orange" />
        </td>
      </tr>
    );
  }
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>{this.props.data.map(this.displayData)}</tbody>
      </table>
    );
  }
}
const mapStateToProps = state => {
  return { data: state.weather };
};

export default connect(mapStateToProps)(Display);
