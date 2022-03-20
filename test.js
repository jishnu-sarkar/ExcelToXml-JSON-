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
  //   //   console.log(elements);
  let tempDataSet = { Account: {} };
  Object.keys(elements).forEach((element) => {
    // console.log(element);
    // console.log(element + ":" + elements[element]);
    // console.log(typeof element);
    // tempDataSet.Account = {};
    if (element.includes("Account:")) {
      tempDataSet.Account[
        element.replace("Account:", "").trim().replace(/ /g, "")
      ] = elements[element];
      //   console.log(element);
      //   console.log(1);
      //   // console.log(demoJson[element]);
    } else {
      tempDataSet[element.replace(/ /g, "")] = elements[element];
      //   console.log(element);
      //   console.log(2);
    }
    // console.log(3);
    // console.log(tempDataSet);
  });
  finalJson.Clients.Client.push(tempDataSet);
});
// console.log(finalJson);

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

console.log(xml.toString());
