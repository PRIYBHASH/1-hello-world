import React, { Component } from 'react';
import './ReactBasics.css';

class ReactBasics extends Component {
    
    constructor (props) {
        super (props)
        this.state = {
            users : [],
            username : "",
            password : "",
        }
    }

    add = () => {
        const username = this.state.username
        const password = this.state.password
        this.setState (previousState => ({
            users : [
                ...previousState.users,
                {
                    username : username,
                    password : password
                }
            ],
            username : "",
            password : ""
        }))
    }

    delete = () => {
        const username = this.state.username
        this.setState (previousState => ({
            users : previousState.users.filter (user => user.username !== username),
            username : "",
            password : ""
        }))
    }

    render () {
        return (
            <div className = "kpdivision">
            <table className = "kptable">
                <tr>
                    <td>
                        <label>
                            Enter Username : 
                        </label>
                    </td>
                    <td>
                            <input className = "field" placeholder = "Kumar Priybhash Singh" type = "text" value = {this.state.username} onChange = {(e) => this.setState ({username : e.target.value})}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label>
                            Enter Password : 
                        </label>
                    </td>
                    <td>
                            <input className = "field" placeholder = "Kum$ingh1" type = "password" value = {this.state.password} onChange = {(e) => this.setState ({password : e.target.value})}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label>
                            You entered : 
                        </label>
                    </td>
                    <td className = "content">
                        {this.state.username}
                    </td>
                </tr>
                <tr>
                    <td>
                        Decrypted Password : 
                    </td>
                    <td className = "content">
                        {this.state.password}
                    </td>
                </tr>
                <tr>
                    <td>
                        <button className = "clickable" onClick = {this.add}>Add</button>
                    </td>
                    <td>
                        <button className = "clickable" onClick = {this.delete}>Delete</button>
                    </td>
                </tr>
            </table>
            {this.state.users.map (user => <li> {user.username} - {user.password} </li>)}
            </div>
        )
    }
}

export default ReactBasics;