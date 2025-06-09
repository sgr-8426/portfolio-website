/**
 * Get the optimized image path with base URL
 * @param {string} imagePath - The path to the image relative to the public folder
 * @returns {string} The complete image path with base URL
 */
export const getImagePath = (imagePath) => {
  // Remove leading slash if present
  const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
  return `${import.meta.env.BASE_URL}${cleanPath}`;
};

/**
 * Load image with lazy loading and blur placeholder
 * @param {string} src - The source URL of the image
 * @param {string} alt - Alt text for the image
 * @param {string} className - CSS classes for the image
 * @returns {Promise<void>}
 */
export const lazyLoadImage = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = src;
    img.onload = () => resolve(img);
    img.onerror = reject;
  });
};
