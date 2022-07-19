import React, { useState } from "react";

	export default function TextForms(props) {
		const [text, setText] = useState("");
		const [count,setCount] = useState({});
		// text="hi";// Wrong way to change state
		//setText("Enter the text2");// Corect way to change state
		const handleUpClick = () => {
			//    console.log("button is clicked" + text);
			let newText = text.toUpperCase();
			setText(newText);
		};

		function handleLoClick() {
			let newText = text.toLowerCase();
			setText(newText);
		}
		function handleClearClick() {
			let newText = "";
			setText(newText);
		}
		function copyText(){
			let mytext=document.getElementById("mybox");
			mytext.select();
			navigator.clipboard.writeText(mytext.value);
			/* Alert the copied text */
			alert("Copied the text: " + mytext.value);
		}
		
		//    const handleLoClick= ()=>{
		//     let newText=text.toLowerCase();
		//     setText(newText);
		// }
		const handleOnChange = (event) => {
			setText(event.target.value); //This will show the entered text time to time
		};
		
		const NoOfSentence = () => {
			let num=0;
			for (let i = 1; i <= text.length; i++) {
				if(text.charAt(i)==='.'|| text.charAt(i)==='?'|| text.charAt(i)==='!')
			num =num+1;
				}
		return (
		<>
		{num}
		</>
		);
		}
		function textData(){
			const str=text;
			var arr=str.split(" ");
			const chars={};
			for(let word of arr){
			if(chars[word])
				chars[word]++;
				else
				chars[word]=1;
			}
			setCount(chars);
				
			}
		function displayObject(){
			let txt = "";
				for (let x in count) {
				txt +=x+":"+count[x]+", ";
				};	
				// setCount(txt);
				return txt;
		}
			
			
		
		return (
			<>
				<h2>{props.titl}</h2>
				<div className="mb-2">
					<textarea
						className="form-control"
						value={text}
						id="mybox"
						onChange={handleOnChange}
						rows="6"
					></textarea>
				</div>
				<button className="btn btn-primary mx-1 my-1 " onClick={handleUpClick}>Convert to upercase</button>
				<button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to lowercase</button>
				<button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
				<button className="btn btn-primary mx-1 my-1" onClick={copyText}>Copied Text</button>
				<button className="btn btn-primary mx-1 my-1" onClick={textData}>Text Data</button> 
					
				
				<h2 className="my-2">Text Summary</h2>
				<p>
					No. of words=<b>{text.split(" ").length}</b> No. of characters=
					<b>{text.length}</b> 
					No. of Sentences: <b>{NoOfSentence()}</b>
			
				</p>
				<p>
					Time to read=<b>{0.003 * text.split(" ").length} Minutes</b>
				</p>
				<h2>Preview</h2>
				<p>{text}</p>
				<h2>text data</h2>
				{
					displayObject()
				}						
				
			</>
		);
	}
