const formatPrice = (price: number): string => {
  if (price >= 1_000_000_000_000) {
    return `$${(price / 1_000_000_000_000).toFixed(1)}T`;
  }

  if (price >= 1_000_000_000) {
    return `$${(price / 1_000_000_000).toFixed()}B`;
  }

  if (price >= 1_000_000) {
    return `$${(price / 1_000_000).toFixed()}M`;
  }

  if (price >= 1_000) {
    return `$${(price / 1_000).toFixed(1)}K`;
  }

  if (price >= 10) {
    return `$${price.toFixed()}`;
  }

  return `$${price.toFixed(1)}`;
};

export default formatPrice;
