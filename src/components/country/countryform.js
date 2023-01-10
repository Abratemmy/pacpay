import React, { Component } from 'react';
import data from './country.js';
import { AiOutlineLock } from "react-icons/ai"
export class Countryform extends Component {
    constructor(props) {
        super(props);
        this.state = {
            country: "Nigeria",
        };
        // this.handleChange = this.handleChange.bind(this);
    }
    // handleChange(e) {
    //     console.log("country Selected!!");
    //     this.setState({ country: e.target.value });
    // }
    render() {
        return (
            <div>
                <div className="speaking-form">
                    <label>Location</label>

                    {/* <div class="inner-addon left-addon">
                        <i class="glyphicon glyphicon-user"><AiOutlineLock className='icon' /></i>
                        <select type="text" name={this.props.name} placeholder="country" value={this.state.country} onChange={this.props.handleChange} className="inputfield">
                            {data.map(item => {
                                return (
                                    <option value={item.value} key={item.id}>{item.country}</option>
                                )
                            })}

                        </select>
                    </div> */}
                </div>
            </div>
        )
    }
}

export default Countryform
