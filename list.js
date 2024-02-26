const client = require("./client");

async function init() {
    await client.lpush("messages", "1");
    await client.lpush("messages", "2");
    await client.lpush("messages", "3");
    await client.lpush("messages", "4");
    const result = await client.rpop("messages");
    console.log(result);
    const result2 = await client.blpop("messages",10); // waits for 10 seconds to pop
    console.log(result2);

    //For all group of elements
    // KEY messages:*
}

init()