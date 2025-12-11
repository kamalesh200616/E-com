const { CosmosClient } = require("@azure/cosmos");

module.exports = async function (context, req) {
  const client = new CosmosClient({
    endpoint: process.env.COSMOS_ENDPOINT,
    key: process.env.COSMOS_KEY
  });

  const database = client.database("ecommerce");
  const container = database.container("order");

  if (req.method === "POST") {
    const newOrder = req.body;
    const { resource } = await container.items.create(newOrder);
    context.res = { status: 201, body: resource };
  } else {
    const { resources } = await container.items.readAll().fetchAll();
    context.res = { status: 200, body: resources };
  }
};
