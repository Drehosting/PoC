const { BlobServiceClient } = require('@azure/storage-blob');

const connectionString = process.env.AZURE_STORAGE_CONNECTION_STRING;
const containerName = 'videos';

async function listVideos() {
    const blobServiceClient = BlobServiceClient.fromConnectionString(connectionString);
    const containerClient = blobServiceClient.getContainerClient(containerName);
    const videos = [];

    for await (const blob of containerClient.listBlobsFlat()) {
        videos.push(blob.name);
    }

    return videos;
}

app.get('/api/videos', async (req, res) => {
    const videos = await listVideos();
    res.json(videos);
});
