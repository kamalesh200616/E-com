const { CosmosClient } = require("@azure/cosmos");

module.exports = async function (context, req) {
  const client = new CosmosClient({
    endpoint: process.env.COSMOS_ENDPOINT,
    key: process.env.COSMOS_KEY
  });

  const db = client.database("ecommerce");
  const orders = db.container("order");

  if (req.method === "POST") {
    const body = req.body || {};
    const { resource } = await orders.items.create(body);
    context.res = { status: 201, body: resource };
    return;
  }

  const { resources } = await orders.items.readAll().fetchAll();
  context.res = { status: 200, body: resources };
};
