import React from 'react';
import { Link } from 'react-router-dom';

import Chart from './Chart';

class Form extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      contents:[]
    }
  }
  
   async componentDidMount() {
   
    const api_call = await fetch(
      `https://api.jotform.com/form/${this.props.location.state.id}/submissions?apiKey=0db00cc496eed9b622b66dc269d05d3a`
    );
    const data = await api_call.json();
    console.log(data);
    this.setState({ contents: data.content });
    
  }
  render(){
    
   
      return (
        <div>
        <div className="table-container">
        <table className="table" border="3">
            <thead>
              <tr style={{color:'#FF7F00'}}>
                
                <th style={{paddingRight:"80px"}}>Form Id</th>
                <th style={{paddingRight:"80px"}}>Form Name</th>
                <th style={{paddingRight:"80px"}} >Gender</th>
                <th style={{paddingRight:"80px"}}>Student Name</th>
                <th style={{paddingRight:"80px"}}>Student Id</th>
                <th style={{paddingRight:"80px"}}>Student E-mail</th>
                <th style={{paddingRight:"80px"}}>Student E-mail</th>
                 <th style={{paddingRight:"80px"}}>Date</th>

              </tr>
            </thead>
            <tbody>
            {
              this.state.contents.map(content =>(

                <tr style={{color:"white"}}>
                    <td>{content.id}</td>
                    <td>{content.answers[1].text}</td>
                    <td>{content.answers[3].answer}</td>
                    <td>{content.answers[4].prettyFormat}</td>
                    <td>{content.answers[5].answer}</td>
                    <td>{content.answers[6].answer}</td>
                    <td>{content.answers[7].answer}</td>
                    <td>{content.created_at}</td>
                    
                </tr>
              ))
            }
            </tbody>
        </table>
         
        </div>
         <Link to="/">
            <div className="home-container" >
              <button className="btn-2 "style={{color:"black",fontSize:"20"}}>
               Forms
              </button>
            </div>
            </Link>
            <Chart />
       </div>
      
      )
    
    
  }
 
}

export default Form;

