async function getVideoUrls(videoName) {
    const prepend = `${azureBlobUrl}/prepend.mp4`;
    const main = `${azureBlobUrl}/${videoName}`;
    const append = `${azureBlobUrl}/append.mp4`;

    return { prepend, main, append };
}
module.exports = { getVideoUrls };
