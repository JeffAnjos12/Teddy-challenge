import { styled } from "@mui/material";

export const GridContainer = styled("div")(() => ({
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

export const GridItem = styled("div")(() => ({
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

export const FooterContent = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

export const StyledIcon = styled("img")(() => ({
  cursor: "pointer",
}));

export const StyledButton = styled("button")(() => ({
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

export const ListContent = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));

export const Header = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
  marginBottom: "20px",
  textAlign: "center",
}));

export const PaginationContainer = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
}));

export const PaginationButton = styled("button")(() => ({
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

export const TxtCard = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));

export const StyledUl = styled("ul")(() => ({
  "@media (max-width: 768px)": {
    paddingInlineStart: "0"
  }
}));

export const BtnModal = styled("button")(() => ({
  width: "100%",
  cursor: "pointer",
  height: "40px",
  border: "0",
  background: "#EC6724",
  color: "#fff",
  fontWeight: "700",
  fontSize: "16px",
  marginTop: ""
}));
