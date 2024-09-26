import Header from "../Header/Header";
import { styled, Typography, Container } from "@mui/material";

import edit from "../../assets/edit.svg";
import trash from "../../assets/trash.svg";
import plus from "../../assets/plus.svg";

function Costumers() {
  const StyledBody = styled("div")(() => ({
    background: "#f0f0f0",
    margin: 0,
    padding: 0,
    height: "100vh",
    overflow: "hidden",
    "@media (max-width: 768px)": {
      padding: "0 10px",
    },
  }));

  const GridItem = styled("div")(() => ({
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gridTemplateRows: "repeat(4, 1fr)",
    gap: "10px",
    listStyleType: "none",
    border: "none",
    "@media (max-width: 768px)": {
      padding: "0 10px",
    },
  }));

  const GridContent = styled("div")(() => ({
    backgroundColor: "#fff",
    width: "285px",
    height: "138px",
    padding: "15px",
    margin: "10px 10px",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    textAlign: "center",
    "@media (max-width: 768px)": {
      padding: "0 10px",
    },
  }));

  const FooterContent = styled("div")(() => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "end",
  }));

  const StyledIcon = styled("img")(() => ({
    cursor: "pointer",
  }));

  const StyledButton = styled("button")(() => ({
    width: "85rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 auto",
    padding: "0.938rem",
    backgroundColor: "transparent",
    color: "#ff6600",
    fontWeight: 700,
    border: "3px solid #ff6600",
    borderRadius: "5px",
    fontSize: "1rem",
    cursor: "pointer",
    "@media (max-width: 768px)": {
      // Media Query para telas menores
      width: "100%", // Ocupa a largura total em telas menores
      fontSize: "14px", // Reduz o tamanho do texto para caber melhor em telas pequenas
    },
  }));
  const ListContent = styled("div")(() => ({
    display: "flex",
    justifyContent:"center",
    alignItems: "center",
    border: "none",
    flexDirection:"column",
    margin:"0 auto",
    "@media (max-width: 768px)": {

    },
  }));
  const   ContainerEmpty = styled("div")(() => ({
    height:"20px"
  }));
  return (
    <>
      <Header />
      <StyledBody>
        <ul>
            <Typography padding="30px 10px 0 95px">
              <strong>16</strong> clientes encontrados:
            </Typography>
          <ListContent>

            <GridItem>
              <GridContent>
                <Container>
                  <Typography>
                    <strong>Jefferson</strong>
                  </Typography>
                  <Typography marginTop="10px">Salário:R$ 3.000,00</Typography>
                  <Typography marginTop="10px">
                    Empresa:R$ 300.000,00
                  </Typography>
                </Container>

                <FooterContent>
                  <StyledIcon src={plus} alt="" />
                  <StyledIcon src={edit} alt="" />
                  <StyledIcon src={trash} alt="" />
                </FooterContent>
              </GridContent>
              <GridContent></GridContent>
              <GridContent></GridContent>
              <GridContent></GridContent>
              <GridContent></GridContent>
              <GridContent></GridContent>
              <GridContent></GridContent>
              <GridContent></GridContent>
              <GridContent></GridContent>
              <GridContent></GridContent>
              <GridContent></GridContent>
              <GridContent></GridContent>
              <GridContent></GridContent>
              <GridContent></GridContent>
              <GridContent></GridContent>
              <GridContent></GridContent>
            </GridItem>
          </ListContent>
          <ContainerEmpty></ContainerEmpty>
          <StyledButton>Criar Cliente</StyledButton>
        </ul>
      </StyledBody>
    </>
  );
}

export default Costumers;
