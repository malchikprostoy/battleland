import { Container } from "@mui/material";
import Bland from "./components/Bland";

export default function App() {
  return (
    <Container maxWidth="sx" sx={{ padding: "10px", background: "#181818" }}>
      <Bland />
    </Container>
  );
}
