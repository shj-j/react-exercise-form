import React, {Component} from 'react';
import './myProfile.less';

class Form extends Component{
    state={
        name: "",
        gender:"",
        description:"",
        checkbox: "",
    }
    handleSubmit=(event)=>{
        console.log(JSON.stringify(this.state))
        event.preventDefault();
    }
    handleNameChange=(event)=>{
        this.setState({
            name: event.target.value,
        })
    }
    handleGender=(event)=>{
        this.setState({
            gender:event.target.value,
        })
    }
    handleDescription=(event)=>{
        this.setState({
            description:event.target.value,
        })
    }
    handleCheckbox=()=>{
        this.setState({
            checkbox:event.target.value
        })
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit} className="form">
                <h1 className="title">My Profile</h1>
                <div className="form-content"> 
                    <h3 className="lable_title">Name</h3>
                    <input className="input_text" type="text" onChange={this.handleNameChange} value = {this.state.name} placeholder="Your name"/>
                    <h3 className="lable_title">Gender</h3>
                    <select className="input_text" value={this.state.gender} onChange= {this.handleGender} placeholder="Female" >
                        <option value="Female">Female</option>
                        <option value="Male">Male</option>
                    </select>
                    <h3 className="lable_title">Description</h3>
                    <textarea value={this.state.description}
                    placeholder="Description about yourself" onChange={this.handleDescription} />

                    <div className="agreement-div">
                        <input type="checkbox" onChange={this.handleCheckbox}/>
                        <p className="agreement-p"> I have read the terms of conduct</p>
                    </div>
                </div>
                <input className="submit" type="submit" value="Submit"/>
            </form>
        );
    }
}
export default Form