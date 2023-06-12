import React,{Component} from "react";
import './App.css'
import Popup from "./Component/Popup";
import axios from 'axios'
export default class APP extends Component{
  // The super(props) line calls the constructor of the parent class (React.Component) and passes in the props object.
  constructor(props){
    super(props)
    // state object has five properties: 
    this.state={
      name:'',
      phonenumber:'',
      email:'',
      message:'',
      // sent property is used to track whether the form has been submitted
      sent:'false',
      //  property is used to control whether a popup is displayed.
      showPopop:false
    }
  }
  haldelFullName= e =>{
   this.setState({
    name:e.target.value
   })
  }
  haldelEmail= e =>{
    this.setState({
      email:e.target.value
    })
  }
  haldelPhoneNumber= e =>{
    this.setState({
      phonenumber:e.target.value
    }) 
  }
  haldelMessage= e=>{
    this.setState({
      message:e.target.value
    })
  }
  haldelSubmit= async e  =>{
    e.preventDefault()
   await axios.post('/api/sendEmail',this.state).then(res=>{
    this.setState({
      sent:true
    })
   }).then(()=>this.setState({
    showPopop:true
   })).catch(()=>this.setState({
    showPopop:true
   }))
    // console.log(this.state)
    // this.setState({
      // showPopop:true,
      // send:true
    // })
  }
  resetform=()=>{
 this.setState({
  name:'',
  phonenumber:'',
  email:'',
  message:'',
  sent:'false',
  showPopop:false
 })
  }
  render()
  {
    return(
      // fragment <React.Fragment> component and can help you improve the performance of your React components
      <>
      <div className="form">
        <h1>Contacts</h1>
        <form onSubmit={this.haldelSubmit}>
          <div className="text">
            <input type="text" placeholder="Full Name" required onChange={this.haldelFullName} value={this.state.name}/>
            <span>
              <label></label>
            </span>
          </div>
          <div className="text">
            <input type="number" placeholder="phone Number" required onChange={this.haldelPhoneNumber} value={this.state.phonenumber}/>
            <span>
              <label></label>
            </span>
          </div>
          <div className="text">
            <input type="email" placeholder="Email" required onChange={this.haldelEmail} value={this.state.email}/>
            <span>
              <label></label>
            </span>
          </div>
          <div className="text">
            <textarea type="text" required onChange={this.haldelMessage} value={this.state.message}/>
            <span className="text_span"></span>
              <label className="text_label">Message</label>
          </div>
          <div className="button">
            <button type="submit">SEND</button>
          </div>
        </form>
      </div>
      {
        this.state.sent && this.state.showPopop ?<Popup msg='Message as been send successfully!' 
        resetform={this.resetform}/> : this.state.showPopop ? <Popup msg='message as not be send something went wrong' 
        resetform={this.resetform}/> : null
      }
      </>
    )
  }
}