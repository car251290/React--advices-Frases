import React from 'react';
import './App.css';
import axios from 'axios';
import {useState,useEffect} from 'react'
const App = () => {
    const [advice, setAdvice] = useState([]);

    const fetchAdvice = async(advice) => {
        const response = await axios.get(`https://api.adviceslip.com/${advice}`);
          setAdvice (response.data.slip);

          //setAdvice('advice');
          //this.setState({advice});
          setAdvice({advice});

        
    }
    useEffect((advice)=>{
      fetchAdvice({advice})
    },[advice])


        return(
            <div className='app'>
            <div className='card'>
              <h1 classname='heading'>{advice}</h1>
              <button className = "button" onClick={()=> setAdvice({advice})} >
                  <span>Give me the best advice!</span>
              </button>
            </div>
            </div>
        );
    
}


//class App extends React.Component {
  
 //   state = { 
   //     advice:'',
//}

  //  componentDidMount(){
    //    this.fetchAdvice();
    //}
    //FECTH THE API FOR THE ADVICE 
    //fetchAdvice = () => {
        //GET THE IPA
    //    axios.get('https://api.adviceslip.com/advice')
     //   .then((response)=>{
     //      const{advice} = response.data.slip;

     //      this.setState({advice});

     //   })
     //   .catch((error)=>{
     //       console.log(error)

     //   });
   // }
   // render(){
        //for get the advice in this.state
    //    const {advice} = this.state;

       
   // }
//}
export default App;