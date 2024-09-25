import { styled, Typography } from "@mui/material"

function Home() {

    const StyledBody = styled("div") (() => ({
        display: "flex",
        justifyContent:"center",
        alignItems: "center",
        padding: 0,
        flexDirection:"column",
        gap: 20,
        height:"100vh",
        overflow:"hidden",
        "@media (max-width: 768px)": {  // Media Query para telas menores (ex. tablets, celulares)
            padding: "0 10px",  // Reduz o padding lateral em telas menores
        },
    }))
    const StyledButton = styled("button") (() => ({
        width: "32rem",
        padding: "0.938rem",
        backgroundColor: "#ff6600",
        color: "white",
        border: "none",
        borderRadius: "5px",
        fontSize: "1rem",
        cursor: "pointer",
        "@media (max-width: 768px)": {  // Media Query para telas menores
            width: "100%",  // Ocupa a largura total em telas menores
            fontSize: "14px",  // Reduz o tamanho do texto para caber melhor em telas pequenas
        },
    }))
    const StyledInput = styled("input") (() => ({
        width:"30rem",
        padding: "0.938rem",
        border: "1px solid #ccc",
        borderRadius: "5px",
        fontSize: "1rem",
        "@media (max-width: 768px)": {  // Responsivo para telas menores
            width: "93%", 
            margin: "0 20px"
        },
    }))
    const Typography = styled("text") (() => ({
        fontSize: "36px",
        fontFamily: "Arial",
        color: "#333", 
    }))

    return (
     <>
     <StyledBody>
        <Typography>Olá, seja bem-vindo!</Typography> 
        <StyledInput type="text" placeholder="Digite o seu nome" />
        <StyledButton>Entrar</StyledButton>
     </StyledBody>
     </>
    )
  }
  
  export default Home
  