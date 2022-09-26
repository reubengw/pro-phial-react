import "./App.css";
import Panel from "./components/Panel";
import NavBar from "./components/NavBar";
import ColorPalette from "./components/ColorPalette";

function App() {
  const colorscheme = [
    { hexcode: "#9a8c98", label: "primary-dark" },
    { hexcode: "#c9ada7", label: "primary-light" },
    { hexcode: "#f2e9e4", label: "primary-lighter" },
    { hexcode: "#22223b", label: "accent-dark" },
    { hexcode: "#4a4e69", label: "accent-light" },
  ];
  return (
    <div className="App">
      <NavBar></NavBar>
      <Panel></Panel>
      <ColorPalette colorscheme={colorscheme}></ColorPalette>
    </div>
  );
}

export default App;
