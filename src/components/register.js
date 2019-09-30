import React from 'react';



class register extends React.Component{

  render(){
    return (
        <form>
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />
        </form>
        );
    }
}

export default register;