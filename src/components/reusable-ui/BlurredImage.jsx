import { useEffect, useState } from "react";
import { BlurhashCanvas } from "react-blurhash";

export default function BlurredImage({ src, alt, hash, className }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImageLoaded(true);
    };
  }, [src]);

  return (
    <>
      <div style={{ display: imageLoaded ? "none" : "inline" }}>
        <BlurhashCanvas hash={hash} className={className} />
      </div>
      <img
        src={src}
        alt={alt}
        loading="auto"
        style={{ display: !imageLoaded ? "none" : "inline" }}
        className={className}
      />
    </>
  );
}
