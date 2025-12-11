const { CosmosClient } = require("@azure/cosmos");

module.exports = async function (context, req) {
  const client = new CosmosClient({
    endpoint: process.env.COSMOS_ENDPOINT,
    key: process.env.COSMOS_KEY
  });

  const database = client.database("ecommerce");
  const container = database.container("product");

  const { resources } = await container.items.readAll().fetchAll();

  context.res = { status: 200, body: resources };
};
