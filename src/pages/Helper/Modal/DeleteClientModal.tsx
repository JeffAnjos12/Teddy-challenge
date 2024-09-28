import { Modal, Box, Typography } from "@mui/material";
import { BtnModal } from '../List/List.styles'; // Importando o estilo do botão
import React from 'react';

interface DeleteClientModalProps {
  isDeleteModalOpen: boolean;
  handleCloseDeleteModal: () => void;
  confirmDeleteClient: () => void;
  clientToDelete: number | null;
  clientName: string;
}

const DeleteClientModal: React.FC<DeleteClientModalProps> = ({
  isDeleteModalOpen,
  handleCloseDeleteModal,
  confirmDeleteClient,
  clientToDelete,
  clientName
}) => {
  return (
    <Modal open={isDeleteModalOpen} onClose={handleCloseDeleteModal}>
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
        <Typography variant="h6" component="h2">
          Excluir o cliente:
        </Typography>
        <Typography marginTop="10px">
          Você está prestes a excluir o cliente: <strong>{clientToDelete !== null ? clientName : ''}</strong>
        </Typography>
        <BtnModal
          onClick={confirmDeleteClient}
          sx={{ mt: 2, mr: 1 }}
        >
          Excluir
        </BtnModal>
      </Box>
    </Modal>
  );
};

export default DeleteClientModal;
