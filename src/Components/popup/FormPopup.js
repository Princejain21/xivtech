import React, { useState } from 'react';

export default function FormPopup  () {
  const [isFormVisible, setFormVisible] = useState(false);

  const handleButtonClick = () => {
    setFormVisible(true);
  };

  const handleCloseForm = () => {
    setFormVisible(false);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Open Form</button>

      {isFormVisible && (
        <div className="popup">
          <form>
            {/* Form content */}
            <button onClick={handleCloseForm}>Close</button>
          </form>
        </div>
      )}
    </div>
  );
};
