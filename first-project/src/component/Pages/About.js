import React from 'react';
import axios from 'axios';

// const About =() =>{
//     return(
//         <h1>About page</h1>
//     )
        
// };
class About extends React.Component{
    constructor(props) {
        super(props)
    
    this.state = {
             name:"",
             username:"",
            list:[]
        }
    }



    componentDidMount(){
        axios.get("http://localhost:3003/users/")
        .then((response)=>{
           const rec= response.data;
           console.log(response.data,rec[0])
            this.setState(
                {
                    list:rec,
                    name:rec[0].name,
                    username:rec[0].username
                    
                }
            )
        
        })
           
    }
    
    render(){
        const {name,username}=this.state;
        const {list}=this.state 
        return(
          <div>
              {
                    list.map(listOfUser=>
                    <div><h2>{listOfUser.name}</h2></div>
                    )
              }

              {/* <h1>{list.name}{list.username}</h1>
              <h1>{name}{username}</h1> */}
          </div>  
        
        )
    }
}
export default About;