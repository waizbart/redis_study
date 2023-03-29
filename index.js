(async () => {
    const { createClient } = require('redis');

    const client = createClient({
        password: 'WSogRqgzJ24A9ESmVDIRfzFibtShgMaC',
        socket: {
            host: 'redis-13536.c62.us-east-1-4.ec2.cloud.redislabs.com',
            port: 13536
        }
    });
    await client.connect()

    client.on('error', err => {
        console.log('Error ' + err);
    });

    // const resultSet = await client.set("cpf", "senha");
    // console.log(`resultSet: ${resultSet}`);

    console.time('get');

    const resultGet = await client.get("cpf");
    console.log(`resultGet: ${resultGet}`);

    console.timeEnd('get');
})();