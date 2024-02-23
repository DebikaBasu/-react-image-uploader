import React, { useState } from "react";
import styled from "styled-components";
import ImageBox from "./components/ImagesBox";

const AppContainer = styled.div`
  align-items: center;
  text-align: center;
  padding: 40px;
  background: linear-gradient(to right, #2d3e50, #3498db);
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  color: #ecf0f1;
  margin-bottom: 20px;
  font-size: 36px;
`;

const CircleContainer = styled.div`
  width: 500px;
  height: 500px;
  background-color: #34495e;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  border: 15px solid #3498db;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5);
  }
`;

const GalleryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
`;

const ImageContainer = styled.div`
  margin: 8px;
`;

const ImagePreview = styled.img`
  width: 600px;
  height: auto;
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.6);
  transition: transform 0.7s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const App = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleImageUpload = (file) => {
    setSelectedFiles([...selectedFiles, file]);
  };

  return (
    <AppContainer>
      <Title>Image Uploader</Title>
      <CircleContainer>
        <ImageBox onImageUpload={handleImageUpload} />
      </CircleContainer>
      <GalleryContainer>
        {selectedFiles.map((file, index) => (
          <ImageContainer key={index}>
            <ImagePreview
              src={URL.createObjectURL(file)}
              alt={`Uploaded ${index}`}
            />
          </ImageContainer>
        ))}
      </GalleryContainer>
    </AppContainer>
  );
};

export default App;
