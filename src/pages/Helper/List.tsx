import { styled, Typography, Container, Modal, Box, TextField } from "@mui/material";
import { useState, useEffect } from "react";

import edit from "../../assets/edit.svg";
import trash from "../../assets/trash.svg";
import plus from "../../assets/plus.svg";

function List() {
  const [clientes, setClientes] = useState(new Array(10).fill(null).map((_, index) => ({
    id: index + 1,
    nome: `Cliente ${index + 1}`,
    salario: `R$ ${3000 + index * 500},00`,
    empresa: `Empresa ${index + 1}`
  })));
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(16);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);  // Estado para abrir modal de exclusão
  const [isEditMode, setIsEditMode] = useState(false);
  const [editClientIndex, setEditClientIndex] = useState(null);
  const [clientToDelete, setClientToDelete] = useState(null);  // Cliente a ser excluído
  const [newClient, setNewClient] = useState({ nome: "", salario: "", empresa: "" });

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
      minWidth: "300px",
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
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  }));

  const StyledUl = styled("ul")(() => ({
    "@media (max-width: 768px)": {
      paddingInlineStart: "0"
    }
  }));

  const BtnModal = styled("button")(() => ({
    width:"100%",
    cursor:"pointer",
    height:"40px",
    border:"0",
    background:"#EC6724",
    color:"#fff",
    fontWeight:"700",
    fontSize:"16px",
    marginTop:""
  }));

  const TitleModalDelete = styled("text")(() => ({
    fontFamily:"Arial",
    fontSize: "18px",
    fontWeight:700,
    display:"flex",
    flexDirection:"column",
    textAlign:"initial",
    marginBottom:"15px"
  }));

  const TxtModalDelete = styled("div")(() => ({
    fontFamily:"Arial",
    fontSize: "18px",
    display:"flex",
    textAlign:"initial",
  }));
  
  const TxtBold = styled("text")(() => ({
    fontFamily:"Arial",
    fontSize: "18px",
    fontWeight:700,
  }))

  //Paginação de lista
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

  //Modal Criar Cliente
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsEditMode(false);
    setNewClient({ nome: "", salario: "", empresa: "" });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewClient((prevClient) => ({
      ...prevClient,
      [name]: value,
    }));
  };
  

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (isEditMode) {
      const updatedClientes = [...clientes];
      updatedClientes[editClientIndex] = newClient;
      setClientes(updatedClientes);
    } else {
      setClientes([...clientes, { ...newClient, id: clientes.length + 1 }]);
    }
    handleCloseModal();
  };

  const handleEditClient = (index) => {
    const clientToEdit = clientes[index];
    setNewClient(clientToEdit);
    setEditClientIndex(index);
    setIsEditMode(true);
    handleOpenModal();
  };

  const handleDeleteClient = (index) => {
    setClientToDelete(index);
    setIsDeleteModalOpen(true);
  };

  const confirmDeleteClient = () => {
    const updatedClientes = clientes.filter((_, i) => i !== clientToDelete);
    setClientes(updatedClientes);
    setIsDeleteModalOpen(false);
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
            {currentItems.map((cliente, index) => (
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
                  <StyledIcon src={plus} alt="Adicionar" onClick={handleOpenModal} />
                  <StyledIcon src={edit} alt="Editar" onClick={() => handleEditClient(index)} />
                  <StyledIcon src={trash} alt="Excluir" onClick={() => handleDeleteClient(index)} />
                </FooterContent>
              </GridItem>
            ))}
          </GridContainer>
          <StyledButton onClick={handleOpenModal}>Criar Cliente</StyledButton>
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

      {/* Modal para criar/editar cliente */}
      <Modal open={isModalOpen} onClose={handleCloseModal}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
          }}
        >
          <form onSubmit={handleFormSubmit}>
            <Typography variant="h6" component="h2" font-weight= "600">
              {isEditMode ? "Editar Cliente:" : "Criar Cliente:"}
            </Typography>
            <TextField
              name="nome"
              label="Digite o nome:"
              fullWidth
              value={newClient.nome}
              onChange={handleInputChange}
              margin="normal"
              required
            />
            <TextField
              name="salario"
              label="Digite o salário:"
              fullWidth
              value={newClient.salario}
              onChange={handleInputChange}
              margin="normal"
              required
            />
            <TextField
              name="empresa"
              label="Digite o empresa:"
              fullWidth
              value={newClient.empresa}
              onChange={handleInputChange}
              margin="normal"
              required
            />
            <BtnModal>
              {isEditMode ? "Salvar Alterações" : "Criar Cliente"}
            </BtnModal>
          </form>
        </Box>
      </Modal>

      {/* Modal de confirmação de exclusão */}
      <Modal open={isDeleteModalOpen} onClose={() => setIsDeleteModalOpen(false)}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            textAlign: 'center',
          }}
        >
        
          <TitleModalDelete>
            Excluir o cliente:
          </TitleModalDelete>
          <TxtModalDelete>
          Você está prestes a excluir o cliente: <TxtBold>{clientes[clientToDelete]?.nome}</TxtBold>
          </TxtModalDelete>
          <BtnModal
            onClick={confirmDeleteClient}
            sx={{ mt: 2, mr: 1 }}
          >
            Excluir
          </BtnModal>
        </Box>
      </Modal>
    </>
  );
}

export default List;
