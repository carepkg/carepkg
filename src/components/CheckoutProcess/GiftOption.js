import React from "react";

const GiftOption = props => {
  const { toggleGift } = props;
  return (
    <div className="gift-option-page">
      <input type="checkbox" onClick={() => toggleGift()} />
      <span>
        Is this a gift? We will ship the package without any prices listed on
        the invoice.
      </span>
    </div>
  );
};

export default GiftOption;
