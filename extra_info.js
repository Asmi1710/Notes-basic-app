
const book={
    title:'Ego is the enemy',
    author:'Ryan Holiday'
}

// convert JSON to string
const JSONString= JSON.stringify(book);
console.log("JSONString:- ",JSONString);

// convert JSONString to JSON
const JSONObj= JSON.parse(JSONString);
console.log("JSONObj:- ",JSONObj);
console.log("JSONObj Title:- ",JSONObj.title);


// write into file and then read it
const fs= require('fs');
// fs.writeFileSync('file1.json',JSONString)

// const dataBuffer= fs.readFileSync('file1.json');
// console.log("data from file read:- ", dataBuffer);
// // converting read file into string
// const data= JSON.parse(dataBuffer.toString());
// console.log("title of file", data.title);


// reading a file and changing it's content

const content= {"name":"Asmita","planet":"earth","age":"32"};
fs.writeFileSync('file1.json',JSON.stringify(content));
const file= fs.readFileSync('file1.json');
const parsedFile= JSON.parse(file);

parsedFile.name="Asmita";
parsedFile.age="32";

fs.writeFileSync('file1.json',JSON.stringify(parsedFile));


// code for other important basic commands


//npm module installation and usage
// 1. validator
//const validator= require('validator');
// console.log (validator.isEmail('asmita@logipe.com'));
// console.log (validator.isEmail('asmita.logipe.com'));
// console.log (validator.isEmail('asmita@logipe.co'));

//2. chalk (to change css of consoled value)
//const chalk= require('chalk');
// console.log(chalk.green('Success!'));

// printing the command line arguments

// console.log("version of argsv by node",process.argv);

//const commandVal= process.argv[2]

// if (commandVal==='add'){
//     console.log("adding notes!");
// } else if (commandVal==='remove'){
//     console.log("removing notes!");
// }


//difference:
//command->
//node app.js add --title="things to buy"
//yargs o/p:
//{ _: [ 'add' ], title: 'things to buy', '$0': 'app.js' }



// two inbuild methods: --version, --help
//customizing yargs version
//yargs.version('2.6.0');