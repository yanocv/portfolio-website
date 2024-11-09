import { useEffect } from "react";
import "../../styles/Modal.css";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  message: string;
}

export default function SuccessModal({
  isOpen,
  onClose,
  message
}: SuccessModalProps): JSX.Element | null {
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
          </div>
          <div className="modal-body">
            <h4 className="modal-title">Success</h4>
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
