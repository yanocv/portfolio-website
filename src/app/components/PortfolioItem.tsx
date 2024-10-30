"use client";

import { useState } from "react";
import Image from "next/image";
import PortfolioModal from "./Modal";
import "../styles/PortfolioItem.css";

interface PortfolioItemProps {
  imgSrc: string;
  title: string;
  description: string;
  externalLink: string;
}

export default function PortfolioItem({
  imgSrc,
  title,
  description,
  externalLink
}: PortfolioItemProps): JSX.Element {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (): void => setIsModalOpen(true);

  const closeModal = (): void => setIsModalOpen(false);

  return (
    <div className="portfolio-item">
      <Image
        src={imgSrc}
        className="img-res"
        alt={title}
        width={400}
        height={250}
      />
      <div className="portfolio-item-info">
        <h4>{title}</h4>
        <a onClick={openModal}>
          <span className="glyphicon glyphicon-eye-open"></span>
        </a>
        <a href={externalLink} target="_blank" rel="noopener noreferrer">
          <span className="glyphicon glyphicon-link"></span>
        </a>
      </div>

      {isModalOpen && (
        <PortfolioModal
          isOpen={isModalOpen}
          onClose={closeModal}
          imgSrc={imgSrc}
          title={title}
          description={description}
          externalLink={externalLink}
        />
      )}
    </div>
  );
}
