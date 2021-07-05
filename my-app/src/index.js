import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// class Square extends React.Component {
//     render() {
//         return (
//             <button className="square">
//                 {/* TODO */}
//             </button>
//         );
//     }
// }

// class Board extends React.Component {
//     renderSquare(i) {
//         return <Square />;
//     }

//     render() {
//         const status = 'Next player: X';

//         return (
//             <div>
//                 <div className="status">{status}</div>
//                 <div className="board-row">
//                     {this.renderSquare(0)}
//                     {this.renderSquare(1)}
//                     {this.renderSquare(2)}
//                 </div>
//                 <div className="board-row">
//                     {this.renderSquare(3)}
//                     {this.renderSquare(4)}
//                     {this.renderSquare(5)}
//                 </div>
//                 <div className="board-row">
//                     {this.renderSquare(6)}
//                     {this.renderSquare(7)}
//                     {this.renderSquare(8)}
//                 </div>
//             </div>
//         );
//     }
// }

// class Game extends React.Component {
//     render() {
//         return (
//             <div className="game">
//                 <div className="game-board">
//                     <Board />
//                 </div>
//                 <div className="game-info">
//                     <div>{/* status */}</div>
//                     <ol>{/* TODO */}</ol>
//                 </div>
//             </div>
//         );
//     }
// }

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

// ** List ** //
// const numbers = [1, 2, 3, 4, 5];
// const listItems = numbers.map((number) => 
//     <li>{number}</li>
// );
// // ReactDOM.render(<ul>{listItems}</ul>, document.getElementById('root'));

// export const NumberList = (props) => {
//     const numbers = props.numbers;
//     const listItems = numbers.map((number) => 
//         <li>{number}</li>
//     );
//     return (
//         <ul>{listItems}</ul>
//     );
// }

// ReactDOM.render(<NumberList numbers={numbers}/>, document.getElementById('root'));

// ** Keys ** //
// const numbers = [1, 2, 3, 4, 5];
// const listItems = numbers.map((number) =>
//     <li key={number.toString()}>
//         {number}
//     </li>
// );

// const posts = [
//     { id: 1, title: 'Hello world', content: 'Welcome to learning!' },
//     { id: 2, title: 'Installation', content: 'Install React from npm!' }
// ];

// export const Blog = (props) => {
//     const sidebar = (
//         <ul>
//             {props.posts.map((post) =>
//                 <li key={post.id}>
//                     {post.title}
//                 </li>
//             )}
//         </ul>
//     );

//     const content = props.posts.map((post) => 
//         <div key={post.id}>
//             <h3>{post.title}</h3>
//             <p>{post.content}</p>
//         </div>
//     );

//     return (
//         <div>
//             {sidebar}
//             <hr/>
//             {content}
//         </div>
//     )
// };
// ReactDOM.render(<Blog posts={posts}/>, document.getElementById('root'));


// ** Forms ** //
// class NameForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { value: '' };
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleChange(event) {
//         this.setState({value: event.target.value});
//     }

//     handleSubmit(event) {
//         console.log('Submitted name is: ' + this.state.value);
//         event.preventDefault();
//     }

//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <label>
//                     Name:
//                     <input type="text" value={this.state.value} onChange={this.handleChange} />
//                 </label>
//                 <input type="submit" value="Submit"/>
//             </form>
//         );
//     }
// };

// ReactDOM.render(<NameForm/>, document.getElementById('root'));

// class TextAreaForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { value: 'Initial value...' }
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleChange(event) {
//         this.setState({ value: event.target.value });
//     }

//     handleSubmit(event) {
//         console.log('Submitted value: ' + this.state.value);
//         event.preventDefault();
//     }

//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <label>
//                     Essay:
//                     <textarea value={this.state.value} onChange={this.handleChange} />
//                 </label>
//                 <br/>
//                 <input type="submit" value="Submit essay" />
//             </form>
//         );
//     }
// }

// ReactDOM.render(<TextAreaForm/>, document.getElementById('root'));

// class SelectBoxComponent extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { value: 'coconut' };
//         this.handleSubmit = this.handleSubmit.bind(this);
//         this.handleChange = this.handleChange.bind(this);
//     }

//     handleChange(event) {
//         this.setState({ value: event.target.value });
//     }

//     handleSubmit(event) {
//         console.log('Submitted value: ' + this.state.value);
//         event.preventDefault();
//     }

//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <select value={this.state.value} onChange={this.handleChange}>
//                     <option value='grapefruit'>Grapefruit</option>
//                     <option value='lime'>Lime</option>
//                     <option value='coconut'>Coconut</option>
//                     <option value='apple'>Apple</option>
//                 </select>
//                 <button type="submit">Submit</button>
//             </form>
//         );
//     }
// }

// ReactDOM.render(<SelectBoxComponent/>, document.getElementById('root'));

// export class Reservation extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             isGoing: true,
//             numberOfGuest: 2
//         };
//         this.handleInputChange = this.handleInputChange.bind(this);
//     }

//     handleInputChange(event) {
//         const target = event.target;
//         const value = target.type === 'checkbox' ? target.checked : target.value;
//         const name = target.name;
//         this.setState({ [name]: value });
//     }

//     render() {
//         return (
//             <form>
//                 <label>
//                     Is going:
//                     <input name="isGoing" type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange} />
//                 </label>
//                 <br />
//                 <label>
//                     Number of guests:
//                     <input name="numberOfGuest" type="number" value={this.state.numberOfGuest} onChange={this.handleInputChange} />
//                 </label>
//             </form>
//         );
//     }
// }

// ReactDOM.render(<Reservation/>, document.getElementById('root'));


// ** Lifting state ** //
// const scaleNames = {
//     c: 'Celsius',
//     f: 'Farenheit'
// };
// const convertToNumber = (temperature, convert) => {
//     const input = parseFloat(temperature);
//     if (Number.isNaN(input)) {
//         return '';
//     }
//     const result = convert(input);
//     return (Math.round(result * 1000) / 1000).toString();
// };

// const toCelsius = (value) => {
//     return (value - 32) * 5 / 9;
// };

// const toFarenheit = (value) => {
//     return (value * 9 / 5) + 32;
// };

// export const BoilingVerdict = (props) => {
//     if (props.celsius >= 100) {
//         return <p>The water would boil!</p>
//     }
//     return <p>The water would not boil!</p>
// }

// export class TemperatureInput extends React.Component {
//     constructor(props) {
//         super(props);
//         this.handleChange = this.handleChange.bind(this);
//     }

//     handleChange(e) {
//         this.props.onTemperatureChange(e.target.value);
//     }

//     render() {
//         const temperature = this.props.temperature;
//         const scale = this.props.scale;
//         return (
//             <fieldset>
//                 <legend>Enter temperature in {scaleNames[scale]}: </legend>
//                 <input value={temperature} onChange={this.handleChange} />
//             </fieldset>
//         );
//     }
// };

// export class Calculator extends React.Component {
//     constructor(props) {
//         super(props);
//         this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
//         this.handleFarenheitChange = this.handleFarenheitChange.bind(this);
//         this.state = { temperature: '', scale: 'c'};
//     }

//     handleCelsiusChange(temperature) {
//         this.setState({ temperature, scale: 'c'});
//         console.log(this.state);
//     }

//     handleFarenheitChange(temperature) {
//         this.setState({ temperature, scale: 'f'});
//         console.log(this.state);
//     }

//     render() {
//         const scale = this.state.scale;
//         const temperature = this.state.temperature;
//         const celsius = scale === 'f' ? convertToNumber(temperature, toCelsius) : temperature;
//         const farenheit = scale === 'c' ? convertToNumber(temperature, toFarenheit) : temperature;
//         return (
//             <div>
//                 <TemperatureInput scale='c' temperature={celsius} onTemperatureChange={this.handleCelsiusChange}/>
//                 <TemperatureInput scale='f' temperature={farenheit} onTemperatureChange={this.handleFarenheitChange}/>
//                 <BoilingVerdict celsius={parseFloat(celsius)} />
//             </div>
//         );
//     }
// }
// ReactDOM.render(<Calculator />, document.getElementById('root'));


//** Composition vs Inheritance */
// const FancyBorder = (props) => {
//     return (
//         <div className={'FancyBorder FancyBorder-' + props.color}>
//             {props.children}
//         </div>
//     );
// };

// const WelcomeDialog = () => {
//     return (
//         <FancyBorder color="blue">
//             <h1 className="DialogTitle">Welcome</h1>
//             <p className="DialogMessage">Thank you!</p>
//         </FancyBorder>
//     );
// };

// const Dialog = (props) => {
//     return (
//         <FancyBorder color="blue">
//             <h1 className="Dialog-title">
//                 {props.title}
//             </h1>
//             <p className="Dialog-message">
//                 {props.message}
//             </p>
//             {props.children}
//         </FancyBorder>
//     )
// };

// class SignUpDialog extends React.Component {
//     constructor(props) {
//         super(props);
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSignUp = this.handleSignUp.bind(this);
//         this.state = { login: ''};
//     }

//     handleChange(e) {
//         this.setState({login: e.target.value})
//     }

//     handleSignUp(e) {
//         alert(`Welcome aboard, ${this.state.login}!`);
//     }

//     render() {
//         return (
//             <Dialog title="Sign up please" 
//             message="This is a message from sign up dialog">
//                 <input type="text" value={this.state.login} onChange={this.handleChange}/>
//                 <button onClick={this.handleSignUp}>Sign me up!</button>
//             </Dialog>
//         )
//     }
// };

// ReactDOM.render(
// <div>
//     <WelcomeDialog />
//     <SignUpDialog/>
// </div>, document.getElementById('root'));