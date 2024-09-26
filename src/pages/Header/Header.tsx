import { Grid, styled } from "@mui/material";
import { useNavigate } from "react-router-dom";

import Logo from "../../assets/Logo.svg";

function Header() {
  const StyledImg = styled("img")(() => ({}));
  const LineHeader = styled("div")(() => ({
    background: "#0000001A",
    height: "2px"
  }));
  
  const Container = styled("div")(() => ({
    margin: "25px 120px",
  }));

  const TxtUser = styled("text")(() => ({
    fontSize: "16px",
    fontFamily: "Arial",
    display: "flex",
    justifyContent: "end",
    alignItems: "center",
  }));

  const StyledButton = styled("button")(() => ({
    border: 0,
    cursor: "pointer",
    background: "transparent",
    fontSize: "16px",
    color: "#000",
    transition: "0.25s",
    "&:hover": {
      color: "#EC6724",
    },
    "&:active": {
      color: "#EC6724",
      textDecoration: "underline",
    },
  }));

  const navigate = useNavigate();
  const navigateToCostumers = () => {
    navigate("/costumers");
  };
  const navigateToSelectedCostumers = () => {
    navigate("/selected-costumers");
  };
  const Logout = () => {
    navigate("/");
  };

  return (
    <>
      <Container>
        <Grid
          container
          spacing={2}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={3}>
            <StyledImg src={Logo} alt="" />
          </Grid>
          <Grid
            item
            xs={6}
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap="33px"
          >
            <StyledButton onClick={navigateToCostumers}>Clientes</StyledButton>
            <StyledButton onClick={navigateToSelectedCostumers}>Clientes Selecionados</StyledButton>
            <StyledButton onClick={Logout}>Sair</StyledButton>
          </Grid>
          <Grid item xs={3}>
            <TxtUser>
              Olá, <strong> Usuário!</strong>
            </TxtUser>
          </Grid>
        </Grid>
      </Container>
      <LineHeader></LineHeader>
    </>
  );
}

export default Header;
