import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const CardContainer = styled(Box)(() => ({
  width: "400px",
  //   height: "200px",
  //   border: "1px solid #e3e6ea",
  boxShadow: "0 0.5rem 1rem rgba(0,0,0,.15)",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  borderRadius: "10px",
  padding: "15px",
  paddingBottom: "20px",
  paddingTop: "20px",
}));

const Image = styled("img")(() => ({
  width: "100%",
  height: "80px",
}));

const AttributeContainer = styled(Box)(() => ({
  padding: "3px",
  display: "flex",
  justifyContent: "space-between",
}));

const AttributeKey = styled(Box)(() => ({
  color: "gray",
}));

const AttributeValue = styled(Box)(() => ({}));

const ButtonContainer = styled(Box)(() => ({
  //   paddingLeft: "30px",
  //   paddingRight: "30px",
  //   border: "1px solid green",
  margin: "auto",
  width: "100%",
}));

const CButton = styled(Button)(() => ({
  width: "100%",
  textTransform: "none",
  variant: "contained",
  color: "white",
}));

CButton.defaultProps = {
  variant: "contained",
};

const Book = ({ book }) => {
  return (
    <CardContainer>
      <Image src="http://via.placeholder.com/640x360"></Image>
      <AttributeContainer>
        <AttributeKey>Title</AttributeKey>
        <AttributeValue>Summer Box</AttributeValue>
      </AttributeContainer>
      <AttributeContainer>
        <AttributeKey>Description</AttributeKey>
        <AttributeValue>Book description</AttributeValue>
      </AttributeContainer>
      <AttributeContainer>
        <AttributeKey>Type</AttributeKey>
        <AttributeValue>Drama</AttributeValue>
      </AttributeContainer>
      <AttributeContainer>
        <AttributeKey>Author</AttributeKey>
        <AttributeValue>Anas Hagras</AttributeValue>
      </AttributeContainer>
      <AttributeContainer>
        <AttributeKey>Published</AttributeKey>
        <AttributeValue>1990</AttributeValue>
      </AttributeContainer>
      <AttributeContainer>
        <AttributeKey>Price</AttributeKey>
        <AttributeValue>150 USD</AttributeValue>
      </AttributeContainer>
      <ButtonContainer>
        <CButton>Add to cart</CButton>
      </ButtonContainer>
    </CardContainer>
  );
};

export default Book;
