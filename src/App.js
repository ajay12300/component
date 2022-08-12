import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
        <HelloWorld name="Ajay" surname="yadav"/> 
      {/* <HelloWorld name="Sujay" surname="Patil"/>
       <HelloWorld name="Jay" surname="Bhise"/>
       <HelloWorld name="Vijay" surname="More"/>  

      <Welcome></Welcome>
      <Message></Message> */}
      <Counter/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
        
      </header>
    </div>
  );
}
export default App;
