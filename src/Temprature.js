import React from 'react';

function Temperature({title,body,url}) {
    const [tempValue, setTemp] = React.useState(22);
return <div> 
<h2>This is another assignment of useState </h2>
Temperature is : <button onClick={() => setTemp(tempValue+1)}>
    +
  </button>  {tempValue} degree  
   <button onClick={() => setTemp(tempValue-1)} style={{marginLeft: '4px'}}>
       -
  </button>
 </div>
}

export default Temperature;
