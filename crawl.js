function normalizeURL(urlString) {
    const urlObj = new URL(urlString);
    const path = `${urlObj.hostname}${urlObj.pathname}`;
    const endSWithSlash = (path.length > 0 && path.slice(-1) === '/');
    return (endSWithSlash) ? path.slice(0,-1) : path;
}

module.exports = {
    normalizeUrl: normalizeURL
}