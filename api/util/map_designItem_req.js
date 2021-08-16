module.exports = function (designItem, designItemDetails) {
  if (designItemDetails.imageType)
    designItem.imageType = designItemDetails.imageType;
  if (designItemDetails.images) designItem.images = designItemDetails.images;
};
