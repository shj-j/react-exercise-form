import React, {Component} from 'react';

class Form extends Component{
    state={
        name: "Your name",
        gender:"Female",
        description:"Description about yourself",
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
            <form onSubmit={this.handleSubmit}>
                <h1>My Profile</h1>
                <div>
                    <h3>Name</h3>
                    <input htmlFor="name" type="text" onChange={this.handleNameChange} value = {this.state.name}/>
                </div>
                <div>
                    <h3>Gender</h3>
                    <select value={this.state.gender} onChange= {this.handleGender} >
                        <option value="Female">Female</option>
                        <option value="Male">Male</option>
                    </select>
                </div>
                <div>
                    <h3>Description</h3>
                    <textarea value={this.state.description} onChange={this.handleDescription} />
                </div>
                <div style={{display:'flex', alignItems:'center'}}>
                    <input type="checkbox" onChange={this.handleCheckbox}/>
                    <p> I have read the terms of conduct</p>
                </div>
                <input type="submit" value="submit"/>
            </form>
        );
    }
}
export default Form