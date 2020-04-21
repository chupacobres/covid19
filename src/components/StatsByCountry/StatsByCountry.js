import React from "react";
import Form from "react-bootstrap/Form"


class StatsByCountry extends React.Component {
    constructor() {
        super()
        this.state = {
            country: "",
            countryTitle: "",
            loading: false,
            confirmed: "",
            deaths: "",
            recovered: ""

        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
        fetch("https://api.covid19api.com/total/country/united-states")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    countryTitle: data[data.length - 1].Country,
                    confirmed: data[data.length - 1].Confirmed,
                    deaths: data[data.length - 1].Deaths,
                    recovered: data[data.length - 1].Recovered,
                    loading: false
                })
            })
    }
    handleChange(event) {
        this.setState({ country: event.target.value });
    }
    handleSubmit(event) {
        event.preventDefault();
        fetch("https://api.covid19api.com/total/country/" + this.state.country)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    countryTitle: data[data.length - 1].Country,
                    confirmed: data[data.length - 1].Confirmed,
                    deaths: data[data.length - 1].Deaths,
                    recovered: data[data.length - 1].Recovered,
                    loading: false
                })
            })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.country} name="country" placeholder="Enter Country" onChange={this.handleChange} />
                    <input type="submit" value="Submit" />
                </form>
                <br />
                <h3>{this.state.countryTitle}</h3>

                <p>Cases Confirmed: {this.state.confirmed}</p>

                <p>Total Death Toll: {this.state.deaths}</p>

                <p>Total Recovered: {this.state.recovered}</p>
            </div>
        )
    }
}





export default StatsByCountry;