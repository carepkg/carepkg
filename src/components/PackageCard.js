import React from "react";

const PackageCard = props => {
  const { pkg, price, user } = props;
  return (
    <div className="featured-pkg">
      <img src={pkg.imageUrl} className="featured-pkg-img"></img>
      <h5 className="featured-pkg-name">{pkg.name}</h5>
      <h5>Total: ${price}</h5>
      <h5>Upvotes: {pkg.upvotes.length}</h5>
      <button
        className="upvote-pkg-btn"
        onClick={() =>
          this.props.fetchUpvote(user.id, pkg.id).then(() => {
            if (this.props.upvote.exists) {
              this.props.deleteUpvote(user.id, pkg.id);
            } else {
              this.props.createUpvote(user.id, pkg.id);
            }
          })
        }
      >
        Like
      </button>
    </div>
  );
};

export default PackageCard;
