import { Box, Button, Divider, Typography } from "@mui/material"
import { useCounter, useFetch } from "../hooks"
import { useEffect, useState } from "react";
import { Quote } from "./Quote";
import { LoadingQuote } from "./LoadingQuote";

export const MultipleCustomHooks = () => {
  const {addCounter, counter} = useCounter(1);
  const { newData, getData, isLoading } = useFetch(counter);

  const [counterValue, setCounterValue] = useState(false);
  
  const handleClick = () => {
    addCounter();
    setCounterValue(true);
  }
  
  useEffect(() => {
    getData();
    setCounterValue(false);
  }, [counterValue])
  

  return (
    <>
      <Typography>Breaking Qoutes</Typography>
      <Divider/>
      <Button variant="contained" onClick={handleClick} disabled = {isLoading}>
        other plus
      </Button>
      <Box>
        {
          isLoading
            ? 
              <LoadingQuote/>
            :
              <Quote newData = {newData}/>
        }
      </Box>

    </>
  )
}
