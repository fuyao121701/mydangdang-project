import React from 'react'
import {NavLink} from 'react-router-dom'
class TitleListShow extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            list:[]
        }
    }
    componentDidMount(){
    }
    componentWillReceiveProps(nextProps){

    }
    render(){
        return(
            <div className="bookWrapper">
                <div className="bookTitle">
                    <span>{this.props.title}</span>
                    <span>{this.props.subTitle ? this.props.subTitle + " >" : ""}</span>
                </div>
                <div className={this.props.subTitle ? "bookDetail titleDetail" : "bookDetail titleDetailColumn"} >
                    {this.props.titleList.map((item,index)=>(
                        <div key={index}>{item}</div>
                    ))}
                </div>
            </div>
        )
    }
}

export default TitleListShow