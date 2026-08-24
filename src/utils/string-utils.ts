// ES MODULES: Dùng export / import

export function formatDate(date) {
    return date.toLocaleDateString('vi-VN', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    });
}

export function truncate(str, maxLength = 50) {
    if (str.length < maxLength) {
        return str.slice(0, maxLength - 3) + '...';
    }
    return str;
}

export function toSlug(title) {
    return title
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^a-z0-9-]/g, '');
}

const StringUtils = {
    formatDate,
    truncate,
    toSlug
};

export default StringUtils;