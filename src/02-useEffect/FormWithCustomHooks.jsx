import { Box, Button, Divider, TextField } from "@mui/material"
// import { useEffect, useState } from "react"
import { useForm } from "../hooks";

const initialValue = {
  nombre: '',
  password: '',
  email: '',
}

export const FormWithCustomHooks = () => {
  const { onChangeNombre, handleSubmit, nombre, password, email } = useForm(initialValue);

  

  return (
    <>
      <h1>Formulario simple</h1>
      <Divider/>
      <Box component={"form"} onSubmit={ handleSubmit }
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
            type="email"
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
          flexShrink: 3,
          width: "100%",
          margin: 3

        }}
        >
          <TextField
            fullWidth
            type="password"
            id="password"
            name="password"
            label="password"
            placeholder="ingrese la contraseña"
            value={password}
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

      {/* {
        (nombre === 'roy') && <Message/>
      } */}

    </>
  )
}
