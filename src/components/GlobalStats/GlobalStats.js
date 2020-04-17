import React from "react";


class GlobalStats extends React.Component {
    constructor() {
        super()
        this.state = {
            loading: false,
            casesConfirmed: "",
            totalCases: ""
        }
    }
    componentDidMount() {
        this.setState({ loading: true })
        fetch("https://api.covid19api.com/summary")
            .then(response => response.json())
            .then(data => {
                this.setState({ casesConfirmed: data.Global.NewConfirmed, totalCases: data.Global.TotalConfirmed, loading: false })
                console.log(data.Global)
            })

    }

    render() {
        return (
            <div>
                <p>New cases confirmed: {this.state.casesConfirmed}</p>
                <br />
                <p>Total Cases Confirmed: {this.state.totalCases}</p>
            </div>
        )
    }
}
export default GlobalStats