import React from "react";
import Card from "react-bootstrap/Card"


class StatsByCountry extends React.Component {
    constructor() {
        super()
        this.state = {
            country: "",
            countryTitle: "",
            loading: false,
            confirmed: "",
            deaths: "",
            recovered: "",
            error: ""

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
                if (data.message == undefined) {
                    this.setState({
                        error: "",
                        countryTitle: data[data.length - 1].Country,
                        confirmed: data[data.length - 1].Confirmed,
                        deaths: data[data.length - 1].Deaths,
                        recovered: data[data.length - 1].Recovered,
                        loading: false
                    })
                }
                if (data.message !== undefined) {
                    this.setState({ error: "Country not found" })
                }
            }
            )
    }

    render() {
        return (
            <div>
                <Card>
                    <Card.Text>
                        {this.state.error}
                    </Card.Text>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" value={this.state.country} name="country" placeholder="Enter Country" onChange={this.handleChange} />
                        <input type="submit" value="Submit" />
                    </form>
                    <Card.Body>
                        <Card.Title> {this.state.countryTitle} </Card.Title>
                        <Card.Text>
                            Cases Confirmed: {this.state.confirmed}
                        </Card.Text>
                        <Card.Text>
                            Total Death Toll: {this.state.deaths}
                        </Card.Text>
                        <Card.Text>
                            Total Recovered: {this.state.recovered}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
export default StatsByCountry;