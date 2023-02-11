import React, { useState } from "react";
import PropTypes from "prop-types";

//create your first component
// const TrafficLight = () => {
// 	const [ color, setColor] = useState("red");
// 	return (
// 	<Light />	
// 	);
// };

// export default Home;
// ReactDOM.render(<TrafficLight />, document.querySelector('#app'));

// const Home = (props) => {
// 	const [color, setColor] = useState(null);

// 	return (
// 		<div className="text-center mt-5">
// 			<h1>Traffic Light</h1>
// 			<div className="traffic-light">
// 				<div
// 					className={
// 						color === "red" ? "red active glass" : "red inactive"
// 					}
// 					onClick={() => setColor("red")}
// 				/>
// 				<div
// 					className={
// 						color === "yellow"
// 							? "yellow active glass"
// 							: "yellow inactive"
// 					}
// 					onClick={() => setColor("yellow")}
// 				/>
// 				<div
// 					className={
// 						color === "green"
// 							? "green active glass"
// 							: "green inactive"
// 					}
// 					onClick={() => setColor("green")}
// 				/>
// 			</div>
// 		</div>
// 	);
// }

// Home.propTypes = {
// 	color: PropTypes.string
// };
// export default Home;

// export default function App() {
// 	const [litPos, setLitPos] = useState(-1);
// 	const toggle = (color) => {
// 		if(color === "red"){
// 			if (litRed == "white") {
// 			   setLitRed("red");
// 			} else {
// 			   setLitRed("white");
// 			}
// 			setLitYellow("white");
// 			setLitGreen("white");
// 		 }
// 		//Code for yellow and red
// 	  };
  
// 	return (
// 	  <div className="App">
// 		<div id="traffic-light">
// 		  <button
// 			id="top"
// 			style={{ backgroundColor: litPos === 0 ? 'red' : 'white' }}
// 			onClick={() => setLitPos(litPos === 0 ? -1 : 0)}
// 		  />
// 		  <button
// 			id="middle"
// 			style={{ backgroundColor: litPos === 1 ? 'yellow' : 'white' }}
// 			onClick={() => setLitPos(litPos === 1 ? -1 : 1)}
// 		  />
// 		  <button
// 			id="bottom"
// 			style={{ backgroundColor: litPos === 2 ? 'green' : 'white' }}
// 			onClick={() => setLitPos(litPos === 2 ? -1 : 2)}
// 		  />
// 		</div>
// 	  </div>
// 	);
//   }
export default class Home extends React.Component{
	constructor(){
		super();
		this.state = {
			clickedLight:null
		};
	}
	render(){
		console.log(this.state);
		let redExtraClass = '';
		if(this.state.clickedLight == 'red') redExtraClass = 'selected';
		let yellowExtraClass = '';
		if(this.state.clickedLight == 'yellow') yellowExtraClass = 'selected';
		let greenExtraClass = '';
		if(this.state.clickedLight == 'green') greenExtraClass = 'selected';
		return <div>
			<div id="trafficTop"></div>
			<div id="container">
				<div className={"red light " + redExtraClass} onClick={() => this.setState({clickedLight: 'red'})}></div>
				<div className={"yellow light " + yellowExtraClass} onClick={() => this.setState({clickedLight: 'yellow'})}></div>
				<div className={"green light " + greenExtraClass} onClick={() => this.setState({clickedLight: 'green'})}></div>
			</div>
		</div>
	}
}