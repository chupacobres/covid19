import React from "react";


class GlobalStats extends React.Component {
    constructor() {
        super()
        this.state = {
            loading: false,
            casesConfirmed: "",
            totalCases: "",
            newDeaths: "",
            totalDeaths: "",
            newRecovered: "",
            totalRecovered: ""
        }
    }
    componentDidMount() {
        this.setState({ loading: true })
        fetch("https://api.covid19api.com/summary")
            .then(response => response.json())
            .then(data => {
                this.setState({ 
                    casesConfirmed: data.Global.NewConfirmed, 
                    totalCases: data.Global.TotalConfirmed, 
                    newDeaths: data.Global.NewDeaths, 
                    totalDeaths: data.Global.TotalDeaths,
                    newRecovered: data.Global.NewRecovered, 
                    totalRecovered: data.Global.TotalRecovered,
                    loading: false })
                console.log(data.Global)
            })

    }

    render() {
        return (
            <div>
                <h2>Global Statistics for Covid-19</h2>
                <p>New cases confirmed: {this.state.casesConfirmed}</p>
                <br />
                <p>Total Cases Confirmed: {this.state.totalCases}</p>
                <br />
                <p>New Deaths Confirmed: {this.state.newDeaths}</p>
                <br />
                <p>Total Deaths Confirmed: {this.state.totalDeaths}</p>
                <br />
                <p>New Cases Recovered: {this.state.newRecovered}</p>
                <br />
                <p>Total Cases Recovered: {this.state.totalRecovered}</p>
            </div>
        )
    }
}
export default GlobalStats