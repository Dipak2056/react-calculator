import React from 'react';

export const Display = ({textToDisp}) => {
  return (
    <div>
         <div id="result" className="result">
                {textToDisp || '0.00'}
            </div>

    </div>
  )
}

