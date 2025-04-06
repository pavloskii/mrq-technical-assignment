const combineClasses = (...classes: (string | false | null | undefined)[]): string => {
  return classes.filter(Boolean).join(' ');
};

export default combineClasses;
