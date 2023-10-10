import { Button } from "@mui/material"
import { useCounter } from "../hooks/useCounter"

export const CounterWithCustomHooks = () => {
  const { counter, addCounter, subtract, resetCounter } = useCounter(10);
  return (
    <>
      <h1>Counter with hook {counter}</h1>
      <hr/>
      <Button variant="contained" onClick={() => addCounter() } >+1</Button>
      <Button variant="contained" onClick={() => resetCounter() } >Reset </Button>
      <Button variant="contained" onClick={() => subtract() } >-1</Button>
    </>
  )
}
