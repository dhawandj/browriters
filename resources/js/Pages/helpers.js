// resources/js/composables/useFormatDate.js

export function useFormatDate() {
    return function formatDate(createdAt) {
        const date = new Date(createdAt); // Convert to Date object
        const day = String(date.getDate()).padStart(2, '0'); // Get day and pad to 2 digits
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Get month (0-indexed) and pad to 2 digits
        const year = String(date.getFullYear()).slice(-2); // Get last 2 digits of the year

        return `${day}/${month}/${year}`; // Combine in DD/MM/YY format
    };
}


export function statusUpdate(status) {
    let order_status = null;
    let lable = 'label';
    switch (status) {
        case 'pickup':
            lable = 'pick now';
            order_status = 'write';
            break;
        case 'write':
            lable = 'write now';
            order_status = 'writing';
            break;
        case 'writing':
            lable = 'written';
            order_status = 'delivery';
            break;
        case 'delivery':
            lable = 'deliver now';
            order_status = 'completed';
            break;
    }

    return { order_status, lable };
}
