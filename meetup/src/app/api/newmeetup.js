import { MongoClient } from 'mongodb';

const connectionString = "mongodb+srv://devendra7:devendra2000@devendra7.opbisf9.mongodb.net/meetups?retryWrites=true&w=majority&appName=devendra7";

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

    try {
      const client = await MongoClient.connect(connectionString);

      const db = client.db();
      const meetupCollection = db.collection('meetup');

      const result = await meetupCollection.insertOne(data);
      console.log(result);

      res.status(201).json({ message: "Meetup Inserted!" });
    } catch (error) {
      console.error('Database operation failed:', error);
      res.status(500).json({ message: "Could not perform database operation." });
    } finally {
      client.close();
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
