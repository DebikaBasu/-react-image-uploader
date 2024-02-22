// LastUploadedImage.js

import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 20px;
  text-align: center;
`;

const UploadedImage = styled.img`
  width: 150px;
  height: auto;
  border-radius: 10px;
  margin: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const LastUploadedImage = ({ file }) => {
  return (
    <Container>
      <UploadedImage src={URL.createObjectURL(file)} alt={`Last Uploaded`} />
    </Container>
  );
};

export default LastUploadedImage;
