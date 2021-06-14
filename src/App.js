import logo from './logo.svg';
import './App.css';
import { API } from 'aws-amplify';
import axios from 'axios' ;
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

const getData = () =>{
  //axios.get('https://5tua63v9d7.execute-api.us-east-1.amazonaws.com/dev/testcors').then(res => console.log("response",res)).catch(err => console.log("error",err));
  API.get('triblePostInsertAPI','/insertpost').then(response => console.log("lambda response",response)).catch(err => console.log("Error",err));
}

function App() {
  return (
    <div className="App">
      <h2>Hello</h2>
      <button onClick={getData}>Api Get</button>
      {/* <AmplifySignOut /> */}
    </div>
  );
}

//export default withAuthenticator(App);
export default App;