import { connectDatabase, getDocuments } from "../../../helpers/db-util";

async function handler(req, res) {
  let client;
  try {
    client = await connectDatabase();
  } catch (error) {
    res.status(500).json({ message: "Failed to connect to MongoDB" });
    return;
  }

  if (req.method === "GET") {
    try {
      const documents = await getDocuments(client, "aboutme");
      res.status(200).json({ aboutme: documents });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  client.close();
}

export default handler;
