// ConfirmModal.js
import React, { useEffect } from 'react';

function ConfirmModal({ show, message, onConfirm, onCancel }) {
  useEffect(() => {
    // Lock scroll when modal is open
    if (show) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [show]);

  if (!show) return null;

  return (
    <div style={styles.overlay} aria-modal="true" role="dialog">
      <div style={styles.modal} className="modal-fade">
        <p style={styles.message}>{message}</p>
        <div style={styles.buttons}>
          <button onClick={onConfirm} style={styles.confirmBtn} autoFocus>
            Yes
          </button>
          <button onClick={onCancel} style={styles.cancelBtn}>
            No
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {opacity: 0; transform: scale(0.9);}
          to {opacity: 1; transform: scale(1);}
        }
        .modal-fade {
          animation: fadeIn 0.3s ease forwards;
        }
        button:hover {
          opacity: 0.8;
        }
      `}</style>
    </div>
  );
}

const styles = {
  overlay: {
    position: 'fixed',
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  modal: {
    background: '#fff',
    padding: '25px 30px',
    borderRadius: '12px',
    width: '320px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
    textAlign: 'center',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  message: {
    fontSize: '18px',
    marginBottom: '25px',
    color: '#333',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  confirmBtn: {
    backgroundColor: '#e74c3c',
    border: 'none',
    padding: '10px 25px',
    color: '#fff',
    borderRadius: '6px',
    fontWeight: '600',
    cursor: 'pointer',
    boxShadow: '0 3px 7px rgba(231, 76, 60, 0.6)',
  },
  cancelBtn: {
    backgroundColor: '#95a5a6',
    border: 'none',
    padding: '10px 25px',
    color: '#fff',
    borderRadius: '6px',
    fontWeight: '600',
    cursor: 'pointer',
    boxShadow: '0 3px 7px rgba(149, 165, 166, 0.6)',
  },
};

export default ConfirmModal;
