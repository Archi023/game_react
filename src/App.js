import { useState } from "react";
import Button from "./Button";
import './App.css';

function App() {
  const [total, setTotal] = useState(0);
  const [noOfClick, setNoOfClick] = useState(0);

  const incr = (no) => {
    setTotal(total + no);
    setNoOfClick(noOfClick + 1);
  };
  return (
    <div className="App">
        <p><h1>
        BUTTON GAME 
        </h1>
      </p>
    
      <div className="box">
      <p>
        <h2>
        Rule:- You can click any of the 3 buttons out of 9 and if total goes
        greater than 10 you will win or you lose....
        </h2>
      </p>
      </div>
      <div>
      <h1>{total}</h1>
      {noOfClick <= 2 && (
        <>
          <div className="buttons">
            <Button incr={incr} count={2} />
            <Button incr={incr} count={5} />
            <Button incr={incr} count={1} />
            <Button incr={incr} count={3} />
            <Button incr={incr} count={2} />
            <Button incr={incr} count={4} />
            <Button incr={incr} count={1} />
            <Button incr={incr} count={3} />
            <Button incr={incr} count={5} />
          </div>
        </>
      )}

      {noOfClick > 2 ? total > 10 ? <div class="trueresult">You Win</div> : <div class="falseresult">You Lose</div>: <></>}
      </div>
    </div>
  );
}

export default App;
