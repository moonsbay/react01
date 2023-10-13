/**
 * 
 */
import $ from "jquery"
import React from "react";
import ReactDOM from "react-dom/client";
//import createRoot from "react-dom/client";
//window.onload = function(){
//	
//}
//
//$(document).ready(function(){
//	
//});

$('h1').slideUp(0)
       .slideDown(3000);
       
let root = ReactDOM.createRoot(document.querySelector('#root'));
//let root = createRoot(document.querySelector('#root'));

let lang = ['java', 'css', 'html', 'javascript']

root.render(
    <ol>
    {   //이 안에는 표현식만 올 수 있다
		//lang.map((v, i)=> <li>xxx</li>), map함수는 배열맵핑하는 함수..v:밸류, i:인덱스
		lang.map((v,i)=><li key={i}>{v}</li>)
	}
    </ol>   	
)

//  root.render(
//	  <ol>
//	  {
//		  [<li>java</li>, <li>css</li>, <li>html</li>]
//	  }
//	  </ol>
//  )






//root.render(
////	<h1>React에서 출력됨</h1>  //  이거 주석처리 안하면 에러뜸...왜?... 같은 레벨의 태그를 두개 넣을 수 없다(child는 상관없다)
                                // 그래서 여러개 태그 쓰려면 <></>  또는 <div></div>로 전체를 감싸면 된다
                                //  그리고 싱글태그일 경우 <hr/> 반드시 "/" 붙여줘야한다
//	<ol>
//	  <li>java</li>
//	  <li>css</li>
//	  <li>c++</li>
//	  <li>html</li>
//	  <li>react</li>
//	</ol>
//)