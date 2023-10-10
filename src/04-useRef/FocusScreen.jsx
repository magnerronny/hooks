import { Button, Divider, TextField, Typography } from "@mui/material"
import { useRef } from "react"

export const FocusScreen = () => {

  const inputRef = useRef();

  const onClick = () => {
    inputRef.current.select()
  }

  return (
    <>
      <Typography variant="h3" >Focus Screen</Typography>
      <Divider/>

      <TextField
        ref={inputRef}
        name="nombre"
        placeholder="ingrese su nombre"
      />

      <Button variant="contained" onClick={onClick } >
        Set Focus
      </Button>

    </>
  )
}
