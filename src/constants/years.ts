const startYear = 2015;
const currentYear = new Date().getFullYear();

export const CAR_YEARS = Array.from(
  { length: currentYear - startYear + 1 },
  (_, index) => {
    const year = startYear + index;
    return { id: year, label: year.toString() };
  }
);
