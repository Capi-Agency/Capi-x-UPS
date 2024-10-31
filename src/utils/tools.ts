import Cookies from 'js-cookie';

export const validateEmail = (input: string) => {
    // Define your validation rules here
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    return emailRegex.test(input);
};

export const formatNumber = (num: number) => {
    if (num >= 1000) {
        // Divide the number by 1000 and round to one decimal place
        var formattedNum = (num / 1000).toFixed(1);
        // Add 'k' to the formatted number
        return formattedNum + 'k';
    }
    // Return the original number if it's less than 1000
    return num;
};

export const formatDate = (isoDate: string | undefined | null, hasHourMin = true): string => {
    if (!isoDate) {
        return "";
    }

    const date = new Date(isoDate);

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    const hourMinuteString = hasHourMin ? `${hours}:${minutes},` : '';
    return hourMinuteString + ` ${day}-${month}-${year}`;
};