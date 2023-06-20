import React, { useEffect, useState } from "react";
import Link from "next/link";
import Projects from "../../api/project";
import SectionTitle from "../SectionTitle";
import Image from "next/image";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const SingelProject = ({ attributes }) => {
  const [images, setImages] = useState(null);

  useEffect(() => {
    if (attributes.project_images.data != null) {
      setImages(
        attributes.project_images.data.map((img) => {
          console.log(img.attributes.url);
          return {
            original: `http://16.16.211.34${img.attributes.url}`,
          };
        })
      );
    }
  }, []);
  return (
    <div
      className="project"
      key={attributes.createdAt}>
      <div className="img-wraper">
        {images ? <ImageGallery items={images} /> : null}
      </div>
      <div className="details">
        <h3>{attributes.title}</h3>
        <p>{attributes.description}</p>
      </div>
    </div>
  );
};

export default SingelProject;
