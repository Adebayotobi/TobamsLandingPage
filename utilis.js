
export const handleTruncateText = (text) => {
    const maxTextLength = 100;
    if (text.length > maxTextLength) {
      return `${text.slice(0, maxTextLength)}...`;
    }
    return text;
  };

  export const formatToPounds = (amount) => {
    if (typeof amount !== 'number') return; 
    return new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(amount);
  };
  