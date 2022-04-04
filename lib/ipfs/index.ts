import { Web3Storage } from "web3.storage";

const token = process.env.NEXT_PUBLIC_WEB3STORAGE_TOKEN || "";

const storage = new Web3Storage({ token });

export async function store(
  data: object,
  name: string,
  type = "application/json"
) {
  const blob = new Blob([JSON.stringify(data)], { type });
  const fileName = name || `${new Date().toISOString()}.${type.split("/")[1]}`;
  const cid = await storage.put([new File([blob], fileName)]);

  return `ipfs://${cid}/${fileName}`;
}
