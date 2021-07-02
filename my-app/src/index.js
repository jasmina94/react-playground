import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
    render() {
        return (
            <button className="square">
                {/* TODO */}
            </button>
        );
    }
}

class Board extends React.Component {
    renderSquare(i) {
        return <Square />;
    }

    render() {
        const status = 'Next player: X';

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

// ========================================

//   ReactDOM.render(
//     <Game />,
//     document.getElementById('root')
//   );

// const user = {
//     username: 'Tijana',
//     age: 17
// };

// const elementMine = <p>Hello there, {user.username}!</p>

// ReactDOM.render(
//     elementMine,
//     document.getElementById('root')
// )

// function tick() {
//     const element = (
//         <div>
//             <h1>Hello world!</h1>
//             <h2>It is {new Date().toLocaleTimeString()}</h2>
//         </div>
//     );
//     ReactDOM.render(element, document.getElementById('root'));
// }

// setInterval(tick, 1000);



// class Welcome extends React.Component {
//     constructor (props) {
//         super(props);
//     }

//     render () {
//         return (
//             <h2>Welcome, {this.props.name} </h2>
//         )
//     }
// }

// const element = <Welcome name="Tijana"/>;
// ReactDOM.render(element, document.getElementById('root'));

// const Welcome = (props) => {
//     return (
//         <div>
//             <h1>Welcome</h1>
//             <h2>You are the best, {props.name}</h2>
//         </div>
//     );
// };

// const elementMine = <Welcome name="Tijana"/>;
// ReactDOM.render(elementMine, document.getElementById('root'));

// export const Clock = (props) => {
//     return (
//         <div>
//             <h1>Hello, world!</h1>
//             <h2>It is {props.date.toLocaleTimeString()}</h2>
//         </div>
//     );
// };

// function tick() {
//     ReactDOM.render(
//         <Clock date={new Date()}/>,
//         document.getElementById('root')
//     );
// }

// setInterval(tick, 1000);

// class Clock extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {date: props.date ? props.date : new Date()};
//     }

//     // runs after component is rendered
//     componentDidMount() {
//         this.timerId = setInterval(
//             () => this.tick(), 1000
//         );
//     }

//     // runs when component is removed from DOM
//     componentWillUnmount() {
//         clearInterval(this.timerId);
//     }

//     tick() {
//         const newDate = new Date(this.state.date);
//         newDate.setSeconds(newDate.getSeconds() + 1);
//         this.setState((state, props) => (
//             {
//                 date: newDate
//             }
//         ));
//     }

//     render() {
//         return (
//             <div>
//              <h1>Helloooo world!</h1>
//              <h2>It is {this.state.date.toLocaleTimeString()}</h2>
//             </div>
//         );
//     }
// };

// ReactDOM.render(<Clock/>, document.getElementById('root'));

// const customTime = new Date("July 4 1776 12:55:55")
// export const App = () => {
//     return (
//         <div>
//             <Clock date={customTime}/>
//             <Clock/>
//             <Clock/>
//         </div>

//     );
// };

// ReactDOM.render(<App/>, document.getElementById('root'));


// ** Events ** //
// class Toggle extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {isToggleOn: true};
//         this.handleClick = this.handleClick.bind(this);
//     }

//     handleClick() {
//         console.log('click happened')
//         this.setState(prevState => ({
//             isToggleOn: !prevState.isToggleOn
//         }));
//     }

//     render() {
//         return (
//             <button onClick={this.handleClick}>
//                 {this.state.isToggleOn ? 'ON' : 'OFF'}
//             </button>
//         )
//     }
// }

// class MyButton extends React.Component {
//     constructor(props) {
//        super(props);
//        this.state = {
//            isToggleOn: true, 
//            value: ''
//         } 
//     }

//     clickMe() {
//         console.log('click happened')
//         const value = document.getElementById('textId').value;
//         this.setState(prevState => ({
//             isToggleOn: !prevState.isToggleOn,
//             value: value
//         }));
//     }

//     render() {
//         return (
//             <div>
//                 <input type="text" id="textId"></input>
//                 <button onClick={this.clickMe.bind(this)}>Click</button>
//                 <p>{this.state.value}</p>
//             </div>
//         )
//     }
// }

// ReactDOM.render(
//     // <Toggle/>, 
//     <MyButton/>,
//     document.getElementById('root')
// );

//** Conditional rendering   ***//
// export const Greeting = (props) => {
//     const isLoggedIn = props.isLoggedIn;
//     if (isLoggedIn) {
//         return <UserGreeting/>;
//     } else {
//         return <GuestGreeting/>;
//     }
// }

// export const UserGreeting = () => {
//     return <h1>Welcome back!</h1>;
// }


// export const GuestGreeting = () => {
//     return <h1>Please sign in!</h1>;
// }

// export const LoginButton = (props) => {
//     return (
//         <button onClick={props.onClick}>
//             Login
//         </button>
//     )
// }

// export const LogoutButton = (props) => {
//     return (
//         <button onClick={props.onClick}>
//             Logout
//         </button>
//     )
// }

// class LoginControl extends React.Component {
//     constructor(props) {
//         super(props);
//         this.handleLoginClick = this.handleLoginClick.bind(this);
//         this.handleLogoutClick = this.handleLogoutClick.bind(this);
//         this.state = {isLoggedIn: false};
//     }

//     handleLoginClick() {
//         this.setState({isLoggedIn: true});
//     }

//     handleLogoutClick() {
//         this.setState({isLoggedIn: false});
//     }

//     render() {
//         const isLoggedIn = this.state.isLoggedIn;
//         let  button;

//         if (isLoggedIn) {
//             button = <LogoutButton onClick={this.handleLogoutClick}/>;
//         } else {
//             button = <LoginButton onClick={this.handleLoginClick}/>;
//         }

//         return (
//             <div>
//                 <Greeting isLoggedIn={isLoggedIn}/>
//                 {button}
//             </div>
//         )
//     }
// }

// ReactDOM.render(<LoginControl/>, document.getElementById('root'));