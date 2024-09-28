import { Typography, Container, Pagination } from "@mui/material";
import { useState, useEffect } from "react";
import EditCreateModal from "../Modal/EditCreateModal";
import DeleteClientModal from "../Modal/DeleteClientModal"; // Importando o novo modal

import edit from "../../../assets/edit.svg";
import trash from "../../../assets/trash.svg";
import plus from "../../../assets/plus.svg";
import {
  GridContainer,
  GridItem,
  FooterContent,
  StyledIcon,
  StyledButton,
  ListContent,
  Header,
  TxtCard,
  StyledUl,
} from "./List.styles"; // Importando os estilos

interface Cliente {
  id: number;
  nome: string;
  salario: string;
  empresa: string;
}

function List() {
  const [clientes, setClientes] = useState<Cliente[]>(new Array(10).fill(null).map((_, index) => ({
    id: index + 1,
    nome: `Cliente ${index + 1}`,
    salario: `R$ ${3000 + index * 500},00`,
    empresa: `Empresa ${index + 1}`
  })));
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(4); // Ajuste para responsividade
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [editClientIndex, setEditClientIndex] = useState<number | null>(null);
  const [newClient, setNewClient] = useState<{ nome: string; salario: string; empresa: string }>({ nome: "", salario: "", empresa: "" });
  const [clientToDelete, setClientToDelete] = useState<number | null>(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);

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

  // Modal Criar Cliente
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsEditMode(false);
    setNewClient({ nome: "", salario: "", empresa: "" });
    setEditClientIndex(null);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setNewClient((prevClient) => ({
      ...prevClient,
      [name]: value,
    }));
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isEditMode && editClientIndex !== null) {
      const updatedClientes = [...clientes];
      updatedClientes[editClientIndex] = { ...updatedClientes[editClientIndex], ...newClient };
      setClientes(updatedClientes);
    } else {
      setClientes([...clientes, { ...newClient, id: clientes.length + 1 }]);
    }
    handleCloseModal();
  };

  const handleEditClient = (index: number) => {
    const clientToEdit = clientes[index];
    setNewClient({ nome: clientToEdit.nome, salario: clientToEdit.salario, empresa: clientToEdit.empresa });
    setEditClientIndex(index);
    setIsEditMode(true);
    handleOpenModal();
  };

  // Função para abrir o modal de confirmação de exclusão
  const handleDeleteClient = (index: number) => {
    setClientToDelete(index);
    setIsDeleteModalOpen(true);
  };

  // Função para confirmar a exclusão do cliente
  const confirmDeleteClient = () => {
    if (clientToDelete !== null) {
      const updatedClientes = clientes.filter((_, i) => i !== clientToDelete);
      setClientes(updatedClientes);
      setIsDeleteModalOpen(false);
      setClientToDelete(null);
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

          {/* Paginação com Material-UI e estilo personalizado */}
          <Pagination
            count={Math.ceil(clientes.length / itemsPerPage)}
            page={currentPage}
            onChange={(_event, value) => setCurrentPage(value)}
            color="primary"
            variant="outlined"
            shape="rounded"
            sx={{
              mt: 2, 
              mb: 2, 
              display: 'flex', 
              justifyContent: 'center',
              '& .MuiPaginationItem-root': {
                borderRadius: '8px',
                border: "none",
                fontWeight: 700, // Deixa os botões arredondados
                color: '#000', // Cor dos números das páginas
                '&.Mui-selected': {
                  backgroundColor: '#ff6600', // Cor de fundo da página ativa
                  color: '#fff', // Cor do texto na página ativa
                },
              }
            }} // Estilização para centralizar e customizar a paginação
          />
        </ListContent>
      </StyledUl>

      {/* Modal para criar/editar cliente */}
      <EditCreateModal
        isModalOpen={isModalOpen}
        handleCloseModal={handleCloseModal}
        isEditMode={isEditMode}
        handleInputChange={handleInputChange}
        handleFormSubmit={handleFormSubmit}
        newClient={newClient}
      />

      {/* Modal de confirmação de exclusão */}
      <DeleteClientModal
        isDeleteModalOpen={isDeleteModalOpen}
        handleCloseDeleteModal={() => setIsDeleteModalOpen(false)}
        confirmDeleteClient={confirmDeleteClient}
        clientToDelete={clientToDelete}
        clientName={clientToDelete !== null ? clientes[clientToDelete].nome : ''}
      />
    </>
  );
}

export default List;
