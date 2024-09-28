import { Modal, Box, Typography, TextField } from "@mui/material";
import { BtnModal } from '../List/List.styles'; // Assumindo que os estilos do botão estão em outro arquivo de estilos
import React from 'react';

interface EditCreateModalProps {
  isModalOpen: boolean;
  handleCloseModal: () => void;
  isEditMode: boolean;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleFormSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  newClient: { nome: string; salario: string; empresa: string };
}

const EditCreateModal: React.FC<EditCreateModalProps> = ({
  isModalOpen,
  handleCloseModal,
  isEditMode,
  handleInputChange,
  handleFormSubmit,
  newClient,
}) => {
  return (
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
          <Typography variant="h6" component="h2" fontWeight="600">
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
            label="Digite a empresa:"
            fullWidth
            value={newClient.empresa}
            onChange={handleInputChange}
            margin="normal"
            required
          />
          <BtnModal type="submit">
            {isEditMode ? "Salvar Alterações" : "Criar Cliente"}
          </BtnModal>
        </form>
      </Box>
    </Modal>
  );
};

export default EditCreateModal;
