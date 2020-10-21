const yargs = require('yargs');
const {v4: uuidv4, validate: uuidvalidate} = require('uuid');
const short = require('short-uuid');
const translator = short('123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz');

//example: node index.js gen-uuid
yargs.command({
    command: 'gen-uuid',
    describe: 'generates a random uuid',
    handler(argv){
        console.log(`Generated UUID: ${uuidv4()}`);
    }
}).demandCommand().recommendCommands().strict();

//example: node index.js gen-shortuuid
yargs.command({
    command: 'gen-shortuuid',
    describe: 'generates a random short-uuid',
    handler(argv){
        console.log(translator.generate());
    }
})

//example: node index.js uuid-short --uuid=58fbf816-75ee-4ac0-ba28-b1a8e4ffe50b
yargs.command({
    command: 'uuid-short',
    describe: 'converts uuid to short',
    builder: {
        uuid:{
            describe: 'uuid parameter is the UUID to be converted to short-uuid',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        console.log(uuidvalidate(argv.uuid) ?
            `Original UUID: ${argv.uuid} \nShort-uuid version: ${translator.fromUUID(argv.uuid)}`
            : `${argv.uuid} is not a valid uuid! Try generating valid UUID using 'gen-uuid' command`);
    }
})

//example: node index.js short-uuid --short=PQQQL9efPwW94MAZHNauVa
yargs.command({
    command: 'short-uuid',
    describe: 'converts short-uuid to uuid',
    builder: {
        short:{
            describe: 'short parameter is the short-uuid to be converted to UUID',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        console.log(`Original short-id: ${argv.short} \nUUID version: ${translator.toUUID(argv.short)}`);
    }
})

yargs.parse();
