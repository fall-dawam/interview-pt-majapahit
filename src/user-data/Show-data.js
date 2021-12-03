import { Component } from "react"
import Card from '../card/CardUIinsertdata.js';

class Showdata extends Component{
    render(){
        return(
            <div className="container-fluid d-flex justify-content-center">
                <div className="col-md-6">
                    <Card/>
                </div>
            </div>
        )
    }
}

export default Showdata;