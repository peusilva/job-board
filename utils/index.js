export const checkImageURL = (url) => {
  if (!url) return false;
  else {
    const pattern = new RegExp(
      "^https?:\\/\\/.+\\.(jpg|jpeg|png|webp|avif|gif|svg)$",
      "i"
    );
    return pattern.test(url);
  }
};
