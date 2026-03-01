import "./App.css";
import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <div>
        <h1>Hello blogger</h1>
        <Button variant="contained" color="error" size="small">
          Click Me
        </Button>
        <br />
        <br />
        <Stack spacing={2} direction="row">
          <Button variant="outlined" startIcon={<DeleteIcon />}>
            Delete
          </Button>
          <Button variant="contained" endIcon={<SendIcon />}>
            Send
          </Button>
          <Button variant="text">Text</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
        </Stack>
      </div>
    </>
  );
}

export default App;
