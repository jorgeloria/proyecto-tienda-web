import React from "react";

function BannerAd({ imageSrc, imageAlt = "Banner" }) {
  return (
    <div className="banner-ad">
      <img src={imageSrc} alt={imageAlt} />
    </div>
  );
}

export default BannerAd;
