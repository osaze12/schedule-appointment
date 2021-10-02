import { Box } from "@chakra-ui/layout";
import "./App.css";
import { Main } from "./layout/main";
import { Sidebar } from "./layout/sidebar";
import { useMediaQuery } from "@chakra-ui/react";
import { SmallDeviceInfo } from "./components/SmallDeviceInfo";

function App() {
  const [smDevice] = useMediaQuery("(max-width: 989px)");

  return !smDevice ? (
    <Box className="App">
      <Box position="fixed">
        <Sidebar />
      </Box>
      <Box marginLeft="220px">
        <Main />
      </Box>
    </Box>
  ) : (
    <SmallDeviceInfo />
  );
}

export default App;
