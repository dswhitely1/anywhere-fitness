import React from 'react';


class Login extends React.Component {

    state ={
        username: '',
        passowrd: '',
    }


    render(){
        return (
            <div>
                
                <h3>login</h3>

                <form onSUbmit={this.handleSubit}>
                <input type="text" name="username" placeholder="username" OnChange={this.handleChange} value={this.state.username}/>
                <input type="text" name="password" placeholder="password" OnChange={this.handleChange} value={this.state.passowrd}/>
                <button type="submit">Login</button>

                </form>
        
            
            </div>

        )
    }
}

export default Login