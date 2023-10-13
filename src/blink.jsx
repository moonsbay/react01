/**
 * 
 */
import $ from "jquery"

$('h1').fadeOut(0).fadeIn(3000);




import React from "react";
import ReactDOM from "react-dom/client";


let root = ReactDOM.createRoot(document.querySelector('#root'));


//root.render(
//	<h1>XXX</h1>
//)



function App(){  //함수 컴포넌트
	
	let color = ['red', 'green', 'blue'];
	return(
	  <ol>
	  {
		  color.map((v, k)=><li key={k}>{v}</li>)
	  }
	    <li>red</li>
	    <li>green</li>
	    <li>blue</li>
	  </ol>
	
	)
}


class App2 extends React.Component{ // class형 컴포넌트 ..반드시 React.Component를 상속해서 써야한다
	
	
	lang=['java', 'python', 'c/c++', 'html', 'sql']
	constructor(){                  //상속한 클래스의 자동생성자가 없으므로 슈퍼 호출..???
		super();
		console.log("App2 constructor...");
	}
	render(){
		return(
			<ul>
			 {
			   this.lang.map((v, k)=> <li key={k}>{v}</li>)	 
				 
			 }
			
			</ul>
//			<ul>
//			  <li>java</li>
//			  <li>python</li>
//			  <li>c/c++</li>
//			</ul>
		)
	}
}

//root.render(<App/>)
root.render(<App2/>)







