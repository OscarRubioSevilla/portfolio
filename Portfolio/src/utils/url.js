export function getImageUrl(file) {
    return new URL('../../public/' + file, import.meta.url).href;
}
