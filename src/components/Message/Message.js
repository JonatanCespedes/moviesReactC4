import { useEffect } from 'react';

const Message = () => {
  
  return (
    <>
        <div
          role="alert"
        >
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
    </>
  );
};

export default Message;
