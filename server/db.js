const { MongoClient } = require("mongodb");

const uri =
  "mongodb://chopper38542:1234567hh@cluster0.obncsah.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri);

async function connectDB() {
  try {
    console.log("Attempting to connect to the database...");
    await client.connect();
    console.log("Connected to the database");

    // Проверим наличие коллекций в базе данных
    const db = client.db();
    const collections = await db.listCollections().toArray();
    console.log(
      "Collections in the database:",
      collections.map(col => col.name)
    );

    return db; // Вернем объект базы данных для использования в других частях приложения
  } catch (error) {
    console.error("Error connecting to the database", error);
    process.exit(1);
  }
}

module.exports = connectDB;
