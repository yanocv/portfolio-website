import { useEffect } from "react";
import "../../styles/Modal.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  message: string;
  type: "success" | "error";
}

export default function Modal({
  isOpen,
  onClose,
  message,
  type
}: ModalProps): JSX.Element | null {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const modalTitle = type === "success" ? "Success" : "Error";
  const modalClass = type === "success" ? "modal-success" : "modal-error";

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className={`modal-dialog ${modalClass}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-content">
          <div className="modal-header">
            <button className="close" onClick={onClose}>
              <span className="glyphicon glyphicon-remove"></span>
            </button>
          </div>
          <div className="modal-body">
            <h4 className="modal-title">{modalTitle}</h4>
            <p>{message}</p>
          </div>
          <div className="modal-footer">
            <button onClick={onClose} className="btn btn-fill">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
