import React from "react";
import "../../css_files/delete_modal.css"; // Ensure the CSS file is imported
import { Spinner } from "react-bootstrap";

export const LoadingSpinner = ({message}) => {
  return (
    <>
      <div className="delete-overlay"></div>
      <div className="delete-modal">
        <div className="delete-modal-content">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">{message}</span>
          </Spinner>
        </div>
      </div>
    </>
  );
};