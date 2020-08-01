import React, { Component } from 'react'
import axios from 'axios'

class Highlights extends Component {
    constructor(props){
        super(props)
        this.state = {
            places: []
        }
    }

    async fetchData () {
        const response = await axios.get("http://localhost:5000/api/places/highlights?quantity=3")
        this.setState({
            places: response.data
        })
    }

    componentDidMount(){
        this.fetchData()
    }

    render() {

        const highlightsImgs = this.state.places.length > 0 ? 
        this.state.places.map(place => (<div style={{width: "256px", height:"256px"}}> <img src={place.imageUrl} alt="travel"/> </div>))
        : <div style={{width: "256px", height:"256px"}}> <img src="https://3.bp.blogspot.com/-T_2Mk0VWsPs/WKh_DNP_02I/AAAAAAAABF4/oBTlwNI52u8mdo9Y5deIxBzg7Em4n2pvQCLcB/s400/loading%2Bgif%2B1.gif" alt="travel"/> </div>
      
        return (
            <div>
                {highlightsImgs}
            </div>
        )
    }
}

export default Highlights
