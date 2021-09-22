const secretsClient = require("../client/secretsClient");

module.exports = async function(secretName) {
  const [version] = await secretsClient.accessSecretVersion({
    name: secretName
  });

  const payload = version.payload.data.toString();

  return payload;
};
