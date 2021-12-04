import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

export async function connectDatabase() {
  const client = await MongoClient.connect(process.env.DATABASE);
  return client;
}

export async function getDocuments(client, collection, sort) {
  const db = client.db();
  const documents = await db.collection(collection).find().sort(sort).toArray();
  return documents;
}
