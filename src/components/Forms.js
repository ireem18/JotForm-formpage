import React from 'react';
import {Link} from "react-router-dom"




const Forms = props => (
      <>
      
    {props.contents.map((content) => {
      console.log(content)
      return (
        
        <div key={content.id}>
          <div className="full"style={{backgroundColor:'white'}}>
          <div className="cont">
            <div className="Form-Card">
            <div className="Form-Column" >
              <div>
              <Link to={{
                    pathname:`/content/${content.id}`,
                    state:{
                    id:content.id
                    }
                    }}>
                <div className="img" alt={content.id}>
               
                <p className="form-title">{content.title}</p><br/>
               
                </div>
                </Link>
               </div>
              
                </div>
              </div>
            </div>
          </div >
        
        </div>
      )
    })}
      </>
    );
  
export default Forms;