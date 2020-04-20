import React from "react";

class StatsByCountry extends React.Component {
    constructor() {
        super()
        this.state = {
            country: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleChange(event) {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
        console.log("changed")
    }
    handleClick() {
        console.log("submitted")
    }

    render() {
        return (
            <form>
                <input type="text" value={this.state.country} name="country" placeholder="Type Country" onChange={this.handleChange} />
            </form>
        )
    }
}





export default StatsByCountry;