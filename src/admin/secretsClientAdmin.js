const readSecret = require("../read/readSecret");

(async () => {
  const value = await readSecret('< SOME_RESOURCE_ID >');
  console.info(value);
})();
