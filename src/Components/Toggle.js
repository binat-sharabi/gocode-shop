import { useState } from "react";

function Toggle(){
    const [isVisible, setIsVisible]=useState(true);

    return(
        <div>
        {(isVisible?<div>hello</div>:<div></div>)}
        <button onClick={()=>setIsVisible(!isVisible)}>toggle</button>
        </div>
    );
}

export default Toggle;