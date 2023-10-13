/**
 * 
 */

import React from "react";
import ReactDOM from "react-dom/client";
import Alpha from './util/alpha.js';



class App extends React.Component{
	
	constructor(){
		super();
		
		this.alphas = []
		for(let i=0; i<10; i++)
		   this.alphas[i]= new Alpha();
		console.log(this.alphas);
	}
	
	
	render(){
		return(
			<table style={{borderCollapse:'collapse'}} border={1} width={500}> 
        	  <thead>
				<tr>
				  <th>line</th>
				  <th>column</th>
				  <th>fg</th>
				  <th>bg</th>
				  <th>ch</th>
				  <th>alpha</th>
				</tr>			  
			  </thead>
			  <tbody>
			    {
					this.alphas.map((v, k)=>
					  <tr key={k}>
					    <td align="right">{v.line}</td>
					    <td align="right">{v.column}</td>
					    <td align="center">{v.fg}</td>
					    <td align="center">{v.bg}</td>
					    <td align="center">{v.ch}</td>
					    <td align="center" style={{color:v.fg, background:v.bg}}>{v.ch}</td>
					  </tr>
					)
				}
			  </tbody>
			</table>
		)
	}
}

let root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App/>)








