import { styled, Typography, Container } from "@mui/material";
import { useState, useEffect } from "react";

import edit from "../../assets/edit.svg";
import trash from "../../assets/trash.svg";
import plus from "../../assets/plus.svg";


const clientes = new Array(50).fill({
    nome: "Eduardo",
    salario: "R$ 3.500,00",
    empresa: "R$ 120.000,00",
  });

function List() {
    
  const [currentPage, setCurrentPage] = useState(1); 
  const [itemsPerPage, setItemsPerPage] = useState(16);
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 480) {
        setItemsPerPage(4); 
      } else {
        setItemsPerPage(16);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = clientes.slice(indexOfFirstItem, indexOfLastItem);

  const GridContainer = styled("div")(() => ({
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gridTemplateRows: "repeat(4, 1fr)",
    gridGap: "50px",
    margin: "0  0 20px 0 ",
    "@media (max-width: 768px)": {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
    "@media (max-width: 480px)": {
      gridTemplateColumns: "1fr",
    },
  }));

  const GridItem = styled("div")(() => ({
    backgroundColor: "#fff",
    padding: "15px",
    borderRadius: "10px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
    "@media (max-width: 480px)": {
       minWidth:"300px",
    }
  }));

  const FooterContent = styled("div")(() => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  }));

  const StyledIcon = styled("img")(() => ({
    cursor: "pointer",
  }));

  const StyledButton = styled("button")(() => ({
    width: "75rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "30px auto",
    padding: "12px",
    backgroundColor: "transparent",
    color: "#ff6600",
    fontWeight: 700,
    border: "3px solid #ff6600",
    borderRadius: "5px",
    fontSize: "1rem",
    cursor: "pointer",
    "@media (max-width: 768px)": {
      width: "100%", 
      fontSize: "14px",
    },
  }));

  const ListContent = styled("div")(() => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  }));

  const Header = styled("div")(() => ({
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px",
    textAlign: "center",
  }));

  const PaginationContainer = styled("div")(() => ({
    display: "flex",
    justifyContent: "center",
  }));

  const PaginationButton = styled("button")(() => ({
    padding: "10px 20px",
    margin: "0 5px",
    backgroundColor: "#ff6600",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    "&:disabled": {
      backgroundColor: "#ccc",
      cursor: "not-allowed",
    },
  }));
  const TxtCard = styled("div")(() => ({
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center"
  }));
  const StyledUl = styled("ul")(() => ({

    "@media (max-width: 768px)": {
        paddingInlineStart: "0"
    }
  }));
  
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < Math.ceil(clientes.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };


  return (
    <>
      <StyledUl>
        <ListContent>
          <Header>
            <Typography variant="h6">
              <strong>{clientes.length}</strong> clientes encontrados:
            </Typography>
          </Header>
          <GridContainer>
            {currentItems.map((cliente) => (
              <GridItem key={cliente.id}>
                <Container>
                <TxtCard>
                  <Typography variant="h6">
                    <strong>{cliente.nome}</strong>
                  </Typography>
                  <Typography marginTop="10px">Salário: {cliente.salario}</Typography>
                  <Typography marginTop="10px">Empresa: {cliente.empresa}</Typography>
                  </TxtCard>
                </Container>

                <FooterContent>
                  <StyledIcon src={plus} alt="Adicionar" />
                  <StyledIcon src={edit} alt="Editar" />
                  <StyledIcon src={trash} alt="Excluir" />
                </FooterContent>
              </GridItem>
            ))}
          </GridContainer>
          <StyledButton>Criar Cliente</StyledButton>
          <PaginationContainer>
            <PaginationButton
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
            >
              Anterior
            </PaginationButton>
            <PaginationButton
              onClick={handleNextPage}
              disabled={currentPage === Math.ceil(clientes.length / itemsPerPage)}
            >
              Próximo
            </PaginationButton>
          </PaginationContainer>
        </ListContent>
      </StyledUl>
    </>
  );
}

export default List;
