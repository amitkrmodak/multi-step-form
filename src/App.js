import logo from './logo.svg';
import bg_sidebar_desktop from "./images/bg-sidebar-desktop.svg"; 
import './App.css';
import Steps from "./steps.js";
function App() {
  return (
    <div className="App">
      <table>
        <tr>
          <td>
              <img src={bg_sidebar_desktop} style={{height: '100vh'}}/>
              <div>
                <Steps number="1" name="YOUR INFO"/>
                <Steps number="2" name="SELECT PLAN"/>
                <Steps number="3" name="ADD-ONS"/>
                <Steps number="4" name="SUMMARY"/>

              </div>
          </td>
          <td style={{width:'100vh', height:'100vh', display:'flex', justifyContent:'center',alignItems:'center', verticalAlign:'middle'}}>
            <div style={{width:'50%'}}>
              <div>
                <span style={{fontSize:'60px', fontWeight:'bold'}}>Personal info</span>
                <p style={{fontSize:'15px', color:'gray'}}>Please provide your name, email address and phone number.</p>
              </div>
              <div className='input_field'>
                <div>
                  <span style={{ display: 'block' }} >Name</span>
                  <span className='errorMsg'>Error Message</span>
                </div>
               
                <input type='text' placeholder='e.g. Stephen King'/>

              </div>
              <div className='input_field'>
                <div>
                  <span style={{ display: 'block' }}>Email</span>
                  <span className='errorMsg'>Error Message</span>
                </div>
               
                <input type='text' placeholder='e.g. stephenking@gmail.com'/>

              </div>
              <div className='input_field'>
                <div>
                  <span style={{ display: 'block' }} >Phone No</span>
                  <span className='errorMsg'>Error Message</span>
                </div>
               
                <input type='text' placeholder='e.g. +1 25495632145'/>

              </div>
            </div>
          </td>
        </tr>
      </table>
    </div>
  );
}
export default App;
