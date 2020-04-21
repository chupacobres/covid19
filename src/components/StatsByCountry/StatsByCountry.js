import React from "react";

let urlToFetch = "https://api.covid19api.com/dayone/country/";

class StatsByCountry extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            country: "",
            countryTitle: "",
            loading: false,
            url: [],
            confirmed: "",
            deaths: "",
            recovered: ""

        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({ country: event.target.value });
    }
    handleSubmit(event) {
        event.preventDefault();
        this.setState({ url: urlToFetch + this.state.country });
        fetch(this.state.url)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    countryTitle: data[data.length - 2].Country,
                    confirmed: data[data.length - 2].Confirmed,
                    deaths: data[data.length - 2].Deaths,
                    recovered: data[data.length -2].Recovered,
                    loading: false
                })   
                console.log(data[data.length - 2])       
            })
            this.setState({country:""})
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.country} name="country" placeholder="Enter Country" onChange={this.handleChange} />
                    <input type="submit" value="Submit" />
                </form>
                <h1>{this.state.countryTitle}</h1>
                <br />
                <p>Cases Confirmed: {this.state.confirmed}</p>
                <br />
                <p>Total Death Toll: {this.state.deaths}</p>
                <br />
                <p>Total Recovered: {this.state.recovered}</p>
            </div>
        )
    }
}





export default StatsByCountry;