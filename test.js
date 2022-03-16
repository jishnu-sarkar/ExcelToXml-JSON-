// const xlsxj = require("xlsx-to-json");
const js2xmlparser = require("js2xmlparser");
const xml2js = require("xml2js");

const demoJson = require("./output.json");
// console.log(typeof demoJson);
// console.log(Object.values(demoJson));

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
  // console.log(tempDataSet);
  // console.log(123);
  //   console.log(4);
  // finalJson.Clients[`Client${count}`] = tempDataSet;
  finalJson.Clients.Client.push(tempDataSet);
});
console.log(finalJson);
// console.log(typeof finalJson);
// tempFinalJson = Object.assign({}, ...finalJson);
// console.log(tempFinalJson);
// console.log(js2xmlparser.parse("testXML", JSON.stringify(tempFinalJson)));

// finalJson = JSON.parse({ finalJson });

//JOI VALIDATION FOR JSON
// function validator(obj) {
//   console.log(obj);js2xmlparser = require("js2xmlparser");
// }

//JSON to XML
// finalJson.forEach((elements) => {
//   console.log(JSON.stringify(elements));
//   //   elements.forEach((element) => {
//   //     console.log(js2xmlparser.parse("testXML", JSON.stringify(element)));
//   //   });
//   //   console.log(js2xmlparser.parse("testXML", JSON.stringify(elements)));
// });
// // console.log(JSON.stringify(finalJson));
// // console.log(js2xmlparser.parse("testXML", JSON(finalJson)));

// const obj = { MS: { ts: 3423523, isOk: false, errors: [] } };
// // const checkJson = {
// //   Account: {
// //     ExistenceofCarer: "No",
// //     AccountName: "Bill Whittle",
// //     AccountType: "Private",
// //     Birthdate: "11/8/31",
// //     Gender: "Male",
// //     CountryofBirth: "England",
// //     PrimaryLanguage: "English",
// //     ATSIOrigin: "Not stated/Inadequately described",
// //     Disability: "None",
// //     AccommodationType: "Private residence - client or family owned/purchasing",
// //     HouseholdComposition: "Group (related adults)",
// //     DVACardStatus: "No DVA entitlement",
// //   },
// //   Date: "5/18/21",
// //   Type: "Dietician",
// //   Hours: "",
// //   ConsultType: "Standard",
// //   Address: "10 Byrnes St, Rozelle NSW 2039",
// // };

// const builder = new xml2js.Builder({
//   headless: false,
//   renderOpts: { pretty: true },
// });

// const xml = builder.buildObject(finalJson);

// console.log(xml);

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
