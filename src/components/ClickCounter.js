import React from 'react'

 function ClickCounter({state , handelCount , handelReset}) {
    return (
        <div className="click-count">
        <p className="number-click"> You Clicked {state.count.toString().length<2 ? `0${state.count}`:state.count } Times</p>
        <button className="click-me-btn" onClick={handelCount}>
          Click me
        </button>
        <button
          style={{ display: "block", margin: "0.5rem" }}
          className="click-me-btn"
          onClick={handelReset}
        >
          Reset Count
        </button>
      </div>
    )
}
export default ClickCounter