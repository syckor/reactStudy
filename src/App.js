
//import './App.css';
import MyHeader from './MyHeader';
import MyFooter from './MyFooter'

function App() {
  let name = "react";

  const style = {
    App: {
      backgroundColor: "black",
    },
    h2: {
      color: "red",
    },
    bold_text :{
      color: "green",
    },
  };
  const func = () => {
    return 'func'
  }

  const number = 5;

  return (
    <div style={style.App}>
      <MyHeader/>
        <h2 style={style.h2}>Hello {name} world {1+2} {func}</h2>
        <b style={style.bold_text} id="bold_text">
          {number}는 : {number % 2 === 0 ? "even" : "odd"}
        </b>
      <MyFooter/> 
    </div>
  );
}

export default App;
