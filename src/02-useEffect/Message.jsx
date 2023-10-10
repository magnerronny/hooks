import { useEffect, useState } from "react"

export const Message = () => {

  const [coords, setCoords] = useState({
    x:0,
    y:0
  })
  
  useEffect(() => {
    // console.log("Message Mounted");
    const onMouseMove = ({x, y}) => {
      const coords = {x, y}
      setCoords(coords);
    }

    window.addEventListener('mousemove', onMouseMove)

    return () => {
      // console.log("message Unmounted");
      window.removeEventListener('mousemove', onMouseMove);
    }
  
  }, [])
  

  return (
    <>
      <h1> Usuario ya existe </h1>
      {JSON.stringify(coords)};
    </>
  )
}
