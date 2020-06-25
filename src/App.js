import React from "react";
import "./App.css";
import NasaPhoto from "./components/NasaPhoto"
import { CardHeader, Button,CardFooter} from "reactstrap";




function App() {

return (
 
  
    <div className="App">
      <CardHeader>Header</CardHeader>
      <p>
      {/* <span role="img" aria-label='go!'>🚀</span> */}
      </p>

       <NasaPhoto/>
      <Button color="warning">React Button!</Button>
      <CardFooter>Footer</CardFooter>

    </div>
    
  );
}

export default App; 
  