export const transformWorkTitle = (value) => {
    const options = {
        year: 'numeric',
        month: 'long',
    };
    const dateFrom = new Date(value.dateFrom);
    const dateTo = value.isCurrent ? '-' : new Date(value.dateTo);
    const current = value.isCurrent ? 'PRESENT' : new Intl.DateTimeFormat('en-US', options).format(dateTo);
    const previous = new Intl.DateTimeFormat('en-US', options).format(dateFrom);

    return `(${previous} - ${current}) ${value.company}, ${value.country}`;
}