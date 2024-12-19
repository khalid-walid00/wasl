
export const formatHijriDate = (year: string, month: string, day: string): string => {
    const formattedYear = year.trim();
    const formattedMonth = month.trim().padStart(2, '0');
    const formattedDay = day.trim().padStart(2, '0');

    return `${formattedYear}-${formattedMonth}-${formattedDay}`;
};
