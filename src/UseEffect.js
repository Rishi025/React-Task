import React, {useState} from 'react'

function UseEffect() {
    const[pos, setPos] = useState({x:0,y:0})

    const handleChange = (e)=>{
        setPos(
            {
                x:e.clientX,
                y:e.clientY
            }
        )
      
    }
    window.addEventListener('mousemove',handleChange )
  return (
    <div style={{
        height:"40px",
        width:"40px",
        background:"blue",
        transform:`translate(${pos.x}px, ${pos.y}px)`
    }}>
      
    </div>
  )
}

export default UseEffect
