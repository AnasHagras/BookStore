import styled from "@emotion/styled";
import { Box } from "@mui/system";
import React from "react";
import Book from "./Book";

const Container = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "wrap",
  gap: "15px",
}));

const Books = () => {
  return (
    <Container>
      {Array(6)
        .fill(0)
        .map((book, index) => {
          return <Book book={book}></Book>;
        })}
    </Container>
  );
};

export default Books;
