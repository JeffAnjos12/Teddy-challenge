import Header from "../Helper/Header/Header";
import { styled } from "@mui/material";
import List from "../Helper/List/List";


function Costumers() {
  const StyledBody = styled("div")(() => ({
    background: "#f0f0f0",
    margin: 0,
    padding: 0,
    height: "100vh",
    overflow: "hidden",
    "@media (max-width: 768px)": {
      padding: "0 10px",
      height: "122vh",
    },
  }));

  return (
    <>
      <Header />
      <StyledBody>
      <List />
      </StyledBody>
    </>
  );
}

export default Costumers;
