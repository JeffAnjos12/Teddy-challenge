import { Grid, styled } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Logo from "../../assets/Logo.svg";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const LineHeader = styled("div")(() => ({
    background: "#0000001A",
    height: "2px",
  }));

  const Container = styled("div")(() => ({
    margin: "25px 120px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "@media (max-width: 768px)": {
      margin: "25px 10px", // Ajustando margem para dispositivos móveis
    },
  }));

  const TxtUser = styled("div")(() => ({
    fontSize: "16px",
    fontFamily: "Arial",
    display: "flex",
    alignItems: "center",
    justifyContent:"flex-end",
    padding:"20px 0",
    "@media (max-width: 768px)": {
      display: "none", // Oculta o texto do usuário em telas pequenas
    },
  }));

  const StyledBtn = styled("button")(() => ({
    border: 0,
    cursor: "pointer",
    background: "transparent",
    fontSize: "16px",
    color: "#000",
    transition: "0.25s",
    padding:"16px",
    "&:hover": {
      color: "#EC6724",
    },
    "&:active": {
      color: "#EC6724",
      textDecoration: "underline",
    },
        // O botão hamburger deve ser exibido apenas em telas pequenas
        "@media (max-width: 768px)": {
          display: "none", // Oculta o botão em telas maiores
        },
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
    // O botão hamburger deve ser exibido apenas em telas pequenas
    "@media (min-width: 768px)": {
      display: "none", // Oculta o botão em telas maiores
    },
  }));

  const MenuContainer = styled(Grid)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
    gap:"50px",
    backgroundColor: "#fff",
    "@media (max-width: 768px)": {
      display: isMenuOpen ? "flex" : "none", // Mostrar menu apenas se isMenuOpen for true
    },
    "@media (min-width: 768px)": {
      display: "flex", // Sempre mostrar menu em telas grandes
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
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <img src={Logo} alt="Logo" />
          </Grid>
          <Grid item xs={6}>
            <MenuContainer>
              <StyledBtn onClick={navigateToCostumers}>Clientes</StyledBtn>
              <StyledBtn onClick={navigateToSelectedCostumers}>
                Clientes Selecionados
              </StyledBtn>
              <StyledBtn onClick={Logout}>Sair</StyledBtn>
            </MenuContainer>
          </Grid>
          <Grid item xs={3}>
          <TxtUser>
            Olá, <strong>Usuário!</strong>
          </TxtUser>
          </Grid>
        </Grid>
        <div style={{ display: "flex", alignItems: "center" }}>
          <StyledButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </StyledButton>
        </div>
      </Container>

      {isMenuOpen && (
        <Grid
          container
          spacing={2}
          display="flex"
          justifyContent="center"
          alignItems="center"
          style={{ padding: "10px", backgroundColor: "#fff" }}
        >
          <Grid item xs={12} display="flex" justifyContent="center" gap="33px">
            <StyledButton onClick={navigateToCostumers}>Clientes</StyledButton>
            <StyledButton onClick={navigateToSelectedCostumers}>
              Clientes Selecionados
            </StyledButton>
            <StyledButton onClick={Logout}>Sair</StyledButton>
          </Grid>
        </Grid>
      )}

      <LineHeader />
    </>
  );
}

export default Header;
