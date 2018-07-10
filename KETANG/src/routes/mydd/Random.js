import React from "react";
import ReactDOM from "react-dom";

    export default class Random extends React.Component {
     constructor(props){
         super(props);
         this.state = {
             som1:"sddc",
         }
     }

     componentWillMound(){
         this.som()
         this.setState({
             som1:this.random,
         })

     }
     som = ()=>{
         var ary = new Array('A','B','C','D','E','F','G','H','I','J','K','L','M','N','P','Q','R','S','T','U','V','W','X','Y','Z',
             'a','b','c','d','e','f','g','h','i','j','k','m','n','p','Q','r','s','t','u','v','w','x','y','z',
             '2','3','4','5','6','7','8','9')
         var newAry = [];
         for (var i = 0; i < 4; i++) {
             let index =  Math.floor(Math.random()*ary.length);
             newAry.push(ary[index]);
         }
         let random =  newAry.join("");
         this.random = random;
         this.setState({
             som1:this.random,
         })
     }


     render() {


         console.log(this.random);
         return <div onClick={this.som}>
             { this.state.som1 }
         </div>
     }

 }