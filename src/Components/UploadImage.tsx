import { BlobServiceClient } from "@azure/storage-blob";
import { blob } from "stream/consumers";
const storageconnectionstring = "DefaultEndpointsProtocol=https;AccountName=fileuploadrayuduart;AccountKey=FfFo7lJY5stgNU0ETE7TshmrlaLPkti8a6+/8ee+lQ0w3Z7c/HnY2pKCsdAuHhI3g94gQ8KDS7wY+ASt+yR/sA==;EndpointSuffix=core.windows.net"
const blobsastoken = "sp=rcwl&st=2023-04-27T03:29:56Z&se=2023-04-27T11:29:56Z&spr=https&sv=2021-12-02&sr=c&sig=8sI0Il1UEdwdo3fwOU%2FoZs51p3F8V4bPvYHYwlB6BOk%3D";
export  const   uploadImage=(containerName:any, file:any)=>{
    const blobServiceClient = new BlobServiceClient(storageconnectionstring)
    const containerClient = blobServiceClient.getContainerClient("uploaded");
    const blobClient = containerClient.getBlobClient(file.name);
    const blockBlobClient = blobClient.getBlockBlobClient();
    const result =  blockBlobClient.uploadBrowserData(file, {
        blockSize: 4 * 1024 * 1024,
        concurrency: 20,
        onProgress: (ev:any) => console.log(ev)
    });
    console.log(`Upload of file '${file.name}' completed`)
}
