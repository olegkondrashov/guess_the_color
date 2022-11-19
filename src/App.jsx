import { useState, useEffect } from 'react';
import './App.css'

function App() {

  const [color, setColor] = useState("");
  const [buttons, setButtons] = useState([]);
  const [isTrue, setIsTrue] = useState(undefined);
  
  const randomColor = () => (
    Math.floor(Math.random()*16777215).toString(16)
  );

  const generateRandomColor = () => {
    const mainColor = randomColor();
    setColor(mainColor);
    setButtons([mainColor, randomColor(), randomColor()].sort(
        () => 0.5 - Math.random()
      )
    );
  }

  useEffect(() => {
    generateRandomColor()
  }, [])

  const answers = (button) => {
    if(button === color) {
      setIsTrue(true)
      generateRandomColor()
    }
    else {
      setIsTrue(false)
    }
  }


  return (
    <div className="App">
      <div className='flex-box'>
        <div className='colored-box' style={{background:`#${color}`}}></div>
        <div className='buttons'>
          {buttons.map((button) => (
            <button onClick={() => 
              answers(button)}
              key={button} 
              className='color-name'>
                #{button}
            </button>
          ))}
        </div>
        {isTrue === true && <div className='answer answer-correct'>Correct answer</div>}
        {isTrue === false && <div className='answer answer-wrong'>Wrong answer</div>}
      </div>
    </div>
  )
}

export default App
