import { useEffect } from "react";
import Image from "next/image";
import "../styles/Modal.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  imgSrc: string;
  title: string;
  description: string;
  externalLink: string;
}

export default function Modal({
  isOpen,
  onClose,
  imgSrc,
  title,
  description,
  externalLink,
}: ModalProps): JSX.Element | null {
  // Lock scrolling of the background when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
    // Cleanup to remove the class when modal is closed
    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="modal-content">
          <div className="modal-header">
            <button className="close" onClick={onClose}>
              <span className="glyphicon glyphicon-remove"></span>
            </button>
            <Image
              className="img"
              src={imgSrc}
              alt={title}
              width={500}
              height={300}
            />
          </div>
          <div className="modal-body">
            <h4 className="modal-title">{title}</h4>
            <p>{description}</p>
          </div>
          <div className="modal-footer">
            <a href={externalLink} target="_blank" className="btn btn-fill">
              Visit Page
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
