import React, {useState}from 'react';
import './BMI.css'



const BMI = () => {

    const [age, setAge] = useState();
    const [weight, setWeight] = useState();
    const [height, setHeight] = useState();
    const [bmi, setBmi] = useState();
    const [msg, setMsg] = useState('');



    const reload = () => { 
        window.location.reload()
    }


    const handleCalulations = (e) => {
        e.preventDefault()

        if(weight === 0 || height ===0){
            alert('hello plase enter a valid numberr')
        }

        else{
            let bmiFormula = (weight / (height * height) * 10000);
            setBmi(bmiFormula.toFixed(2))
        }

          if (bmi < 18.5) {
            setMsg("Underweight");
          } else if (bmi >= 18.5 && bmi <= 24.9) {
            setMsg("Normal Weight");
          } else if (bmi >= 25 && bmi <= 29.9) {
            setMsg("Overweight");
          } else {
            setMsg("Obesity");
          }     
    }
    return(
        <div className="app">
            <div className="container">
                <h1 className="title">BMI CALCULATOR</h1>
         

         <form onSubmit={handleCalulations}>
            <div>
                <label className="labels">Age:</label><br/>
                <input className="bmi-input" type="number" placeholder="Age" value={age} onChange={(e) => setAge (e.target.value)}  />
            </div>

            <div>
                <label className="labels">Weight:</label><br/>
                <input className="bmi-input" type="number" placeholder="Weight" value={weight} onChange={(e) => setWeight (e.target.value)} />
            </div>

            <div>
                <label className="labels">Height:</label><br/>
                <input className="bmi-input" type="number" placeholder="Height" value={height} onChange={(e) => setHeight (e.target.value)} />
            </div>

            <div>
                <button className='btn' type="submit"> Caluclate</button>
                <button className="btn btn-reload" type="submit" onClick={reload}>Reload</button>
            </div>

            <div className='result'>
                <h3>Age: {age}</h3>
                <h3>Your BMI is:{bmi}</h3>
                <p className='p-msg'>{msg}</p>
            </div>

         
         </form>
        </div>
        </div>
    )
}

export default BMI;