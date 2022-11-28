import React from "react";
import "../styles/nfts.css";
import "../styles/styles.css";
import Button from "./Button";
import Nftimage from "../images/nft-image.png";




function NFTs() {
  return (
    <section className="nfts grid">
      <div className="nfts-container">
        <div className="nfts-text">
          <h3>Metabnb NFTs</h3>
          <p>
            Discover our NFT gift cards collection. Loyal customers gets amazing
            gift cards which are traded as NFTs. These NFTs gives our cutomer
            access to loads of our exclusive services.
          </p>
          <Button name="Learn more" styleclass="btn-nft" />
        </div>
        <div className="nfts-images">
          <img src={Nftimage} className="nft-image" alt="beautiful nft houses"/>
           </div>
      </div>
    </section>
  );
}

export default NFTs;
