
const js2xmlparser = require("js2xmlparser");
const xml2js = require("xml2js");

const demoJson = require("./output.json");


xlsxj = require("xlsx-to-json");

const check = xlsxj(
  {
    input: "Sample.xlsx",
    output: "output.json",
  },
  function (err, result) {
    if (err) {
      console.error(err);
    }
    // else {
    //   console.log(result);
    // }
  }
);

// console.log(1);
// console.log(check);

const demoJson = require("./output.json");
// console.log(typeof demoJson);
// console.log(Object.values(demoJson));
console.log(demoJson.length);
let count = 0;

let finalJson = { Clients: { Client: [] } };

// let tempDataSet = {};

demoJson.forEach((elements) => {

  tempDataSet.Account = {};

  Object.keys(elements).forEach((element) => {
    if (element.includes("Account:")) {
      tempDataSet.Account[
        element.replace("Account:", "").trim().replace(/ /g, "")
      ] = elements[element];
    } else {
      tempDataSet[element.replace(/ /g, "")] = elements[element];
    }
  });

  console.log(tempDataSet);
  finalJson.Clients.Client.push(tempDataSet);
});
console.log(typeof finalJson);
console.log(finalJson);


//-------------------------------------------------------

let builder = require("xmlbuilder");

// var obj = {
//   root: {
//     xmlbuilder: {
//       repo: {
//         "@type": "git",[`Client${count}`][`Client${count}`]// attributes start with @
//         "#text": "git://github.com/oozcitak/xmlbuilder-js.git", // text node
//       },
//     },
//   },
// };

const xml = builder
  .create(finalJson, { encoding: "utf-8" })
  .end({ pretty: true });

console.log(xml);

//---------------------------------------------------------

