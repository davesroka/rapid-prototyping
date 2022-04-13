import React, { Component } from "react";
import { emptyTank, fillTank, getTanks, heatTank } from "./api.service";

const Tank = ({ tank, fill, empty, heat }) => (
  <div className="panel is-success">
    <header className="panel-heading">
      <p>{tank.name}</p>
    </header>
    <div className="card-content">
      <div className="content">
        <ul>
          <span className="panel-block">amount: {tank.amount}</span>
          <span className="panel-block">temp: {tank.temp}</span>
        </ul>
      </div>
    </div>
    <footer className="card-footer">
      <button onClick={() => fill(tank)} className="card-footer-item">
        Fill
      </button>
      <button onClick={() => empty(tank)} className="card-footer-item">
        Empty
      </button>
      <button onClick={() => heat(tank)} className="card-footer-item">
        Heat
      </button>
    </footer>
  </div>
);

class Tanks extends Component {
  constructor(props) {
    super(props);
    this.state = { tanks: [] };
  }

  fillTank = async (tank) => {
    const newTank = await fillTank(tank);
    const tanks = [...this.state.tanks]
    tanks[newTank.id]=newTank;
    this.setState({ tanks });
  };

  emptyTank = async(tank)=>{
    const newTank = await emptyTank(tank);
    const tanks = [...this.state.tanks]
    tanks[newTank.id]=newTank;
    this.setState({ tanks });
  }
  heatTank = async(tank)=>{
    const newTank = await heatTank(tank);
    console.log(newTank)
    const tanks = [...this.state.tanks]
    tanks[newTank.id]=newTank;
    this.setState({ tanks });
  }

  async componentDidMount() {
    const tanks = await getTanks();
    this.setState({ tanks });
  }

  render() {
    const { tanks } = this.state;
    return (
      <div className="columns">
        {tanks?.map((tank) => (
          <Tank
            key={tank.id}
            tank={tank}
            fill={this.fillTank}
            empty={this.emptyTank}
            heat={this.heatTank}
          />
        ))}
      </div>
    );
  }
}

export default Tanks;
