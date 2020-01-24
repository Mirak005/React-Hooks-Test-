import React from 'react'

 function TextChange({state , handelText}) {
    return (
        <div className="text-container">
        <p className="text-change">{state.text ? state.text : "Change Me"}</p>
        <label>Live Text Change </label>
        <input
          type="text"
          maxLength="19"
          value={state.text}
          onChange={handelText}
        />
      </div>
    )
}
export default TextChange