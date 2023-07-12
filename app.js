const fs= require("fs");

// transfer function between files
const functions= require("./notes")

//using yargs 
const yargs= require('yargs');
// const { demandOption } = require("yargs");


// creating add command
yargs.command({
    command:'add',
    describe:'Add a new note',
    builder:{
        title:{
            describe:"title of new Note",
            //this will make it mandatory to give title to the new note
            demandOption:true,
            type:'string',
        },
        body:{
            describe:"Body of new Note",
            //this will make it mandatory to give title to the new note
            demandOption:true,
            type:'string',
        }
    },
    handler:function(argv){
        console.log("adding a new note!!!");
        console.log("Title: "+argv.title);
        console.log("Note body: "+argv.body);
        functions.addFunc(argv.title,argv.body);
    }
})

// Remove note command
yargs.command({
    command:'remove',
    describe:'Remove a new note',
    builder:{
        title:{
            describe:"title of existing Note to e deleted",
            //this will make it mandatory to give title to the new note
            demandOption:true,
            type:'string',
        },
    },
    handler:function(argv){
        console.log("removing a new note!!!")
        functions.removeFunc(argv.title);
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler() {
        functions.listFunc()
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        functions.readFunc(argv.title)
    }
})

//either of below is needed at the end for yargs command to work!!
//console.log("version of argsv by yargs",yargs.argv);
yargs.parse();

