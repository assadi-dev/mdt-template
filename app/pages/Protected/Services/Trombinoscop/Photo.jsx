import React, { useState } from "react";
import { PhotoContainer } from "./Trombinoscop.styled";
import ImageViewer from "react-simple-image-viewer";

const PhotoAgent = ({ src, alt, ...props }) => {
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const handleClickImage = () => {
    setIsViewerOpen((prevState) => (prevState = !prevState));
  };

  return (
    <>
      <PhotoContainer {...props} onClick={handleClickImage}>
        <img src={src} alt={alt} />
      </PhotoContainer>
      {isViewerOpen && (
        <ImageViewer
          className="imageViewer"
          src={[src]}
          onClose={handleClickImage}
          disableScroll={false}
          backgroundStyle={{
            backgroundColor: "rgba(0,0,0,0.9)",
          }}
          closeOnClickOutside={true}
        />
      )}
    </>
  );
};

export default PhotoAgent;
