import {Route, Routes} from "react-router-dom";
import {Heading, Center, Box} from '@chakra-ui/react'

import Home from "./Home";
import Detail from "./Detail";

const App = () => {
  return (
    <div className="App">
      {/* Navbar */}
      <Box w="100vw" bg="#b25819" p={6}>
        <Center>
          <Heading as="h1" color="#e2ded5">
            Yugi-Oh Card Deck
          </Heading>
        </Center>
      </Box>

      {/* Route */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/card/:id" element={<Detail/>}/>
        <Route path="*" element={<h2>404 Page not found!</h2>}/>
      </Routes>
    </div>
  );
};

export default App;
