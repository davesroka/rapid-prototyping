import React, {Component} from 'react';

const Tank = ({id, name}) => (
    <div className="card">
        <header className="card-header">
            <p className="card-header-title">
                {name}
            </p>
        </header>
        <div className="card-content">
            <div className="content">
                Content
            </div>
        </div>
        <footer className="card-footer">
            <a href="#" className="card-footer-item">Fill</a>
            <a href="#" className="card-footer-item">Empty</a>
            <a href="#" className="card-footer-item">Heat</a>
        </footer>
    </div>
)

class Tanks extends Component {
    constructor(props) {
        super(props);
        this.state = ({tanks: []})
    }

    async componentDidMount() {
        const response = await fetch(`http://localhost:3000/tanks`);
        const tanks = await response.json();
        this.setState({tanks});
    }

    render() {
        const {tanks} = this.state;
        return (
            <div>
                {tanks?.map(tank => <Tank {...tank} />)}
            </div>
        );
    }
}


export default Tanks;
