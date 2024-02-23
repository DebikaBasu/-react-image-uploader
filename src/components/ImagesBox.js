import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BoxContainer = styled.div`
  background-color: #fff;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  margin: 20px;
  padding: 30px;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  }
`;

const StyledInput = styled.input`
  display: none;
`;

const UploadButton = styled.label`
  background-color: #3498db;
  color: #fff;
  padding: 12px 24px;
  cursor: pointer;
  border-radius: 8px;
  font-size: 18px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2980b9;
  }
`;

const ImageBox = ({ onImageUpload }) => {
  const handleChange = (e) => {
    const selectedFile = e.target.files[0];
    onImageUpload(selectedFile);
  };

  return (
    <Container>
      <BoxContainer>
        <StyledInput type="file" id="fileInput" onChange={handleChange} />
        <UploadButton htmlFor="fileInput">Choose File</UploadButton>
      </BoxContainer>
    </Container>
  );
};

export default ImageBox;
