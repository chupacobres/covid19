import React from "react";
import Card from "react-bootstrap/Card"

let tempDate = new Date();
let date = (tempDate.getMonth() + 1) + "/" + tempDate.getDate() + "/" + tempDate.getFullYear()

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
                    loading: false
                })
            })

    }

    render() {
        return (
            <div>
                <Card>
                    <Card.Body>
                        <Card.Title> Worldwide as of {date} </Card.Title>
                        <Card.Text>
                            New cases confirmed: {this.state.casesConfirmed}
                        </Card.Text>
                        <Card.Text>
                            Total Cases Confirmed: {this.state.totalCases}
                        </Card.Text>
                        <Card.Text>
                            New Deaths Confirmed: {this.state.newDeaths}
                        </Card.Text>
                        <Card.Text>
                            Total Deaths Confirmed: {this.state.totalDeaths}
                        </Card.Text>
                        <Card.Text>
                            New Cases Recovered: {this.state.newRecovered}
                        </Card.Text>
                        <Card.Text>
                            Total Cases Recovered: {this.state.totalRecovered}
                        </Card.Text>
                    </Card.Body>
                </Card>

            </div >
        )
    }
}
export default GlobalStats