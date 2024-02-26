const client = require("./client");

async function init() {
    await client.set("user:1", "Pavan");
    await client.set("msg:1", "Hey there");
    await client.set("msg:2", "Expire after 10 seconds");
    await client.expire("msg:2", 10);
    const result = await client.get("msg:2");
    console.log(result);
}

init()