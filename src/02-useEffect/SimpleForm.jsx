import { Box, Button, Divider, TextField } from "@mui/material"
import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {
  const [initValue, setNombre] = useState({
    nombre: '',
    apellido: '',
    email: ''
  });

  const {nombre, email} = initValue

  const onChangeNombre = ({target}) => {
    const {name, value} = target
    setNombre({
      ...initValue,
      [name]: value
    })
  }


  useEffect(() => {
    console.log("llamadas");
  }, [])
  
  useEffect(() => {
    console.log("cambio el formaulario")
  }, [initValue])

  useEffect(() => {
    console.log("cambiamos el  email");
  }, [email])

  return (
    <>
      <h1>Formulario simple</h1>
      <Divider/>
      <Box component={"form"} 
        sx={{
          width: "50%",
          textAlign: "center",
          borderColor:"blue",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
        sx={{
          flexShrink: 3,
          width: "100%",
          margin: 3

        }}
        >
          <TextField
            fullWidth
            id="nombre"
            name="nombre"
            label="nombre"
            placeholder="ingrese su nombre"
            value={nombre}
            onChange={onChangeNombre}
            
          />
        </Box>

        <Box
        sx={{
          flexShrink: 3,
          width: "100%",
          margin: 3

        }}
        >
          <TextField
            fullWidth
            id="email"
            name="email"
            label="email"
            placeholder="ingrese tu correo"
            value={email}
            onChange={onChangeNombre}
            
          />
        </Box>


        <Box
          sx={{
            width: "100%",
            flexShrink:2,
            margin: 3
          }}
        >
          <Button sx={{width: "100%"}} type="submit" variant="contained" >Send</Button>
        </Box>
      </Box>

      {
        (nombre === 'roy') && <Message/>
      }

    </>
  )
}
