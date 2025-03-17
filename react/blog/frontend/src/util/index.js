export const limitTextSize = (value, text) => {
  const titleSizeLimit = 30;
  const descriptionSizeLimit = 145;
  if (value === "title" && text.length > titleSizeLimit) {
    return text.substr(0, titleSizeLimit) + "...";
  }

  if (value === "description" && text.length > descriptionSizeLimit) {
    return text.substr(0, descriptionSizeLimit) + "...";
  }
  return text;
};
