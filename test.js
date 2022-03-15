// const xlsxj = require("xlsx-to-json");
const js2xmlparser = require("js2xmlparser");
const xml2js = require("xml2js");

const demoJson = require("./output.json");
// console.log(typeof demoJson);
// console.log(Object.values(demoJson));

let finalJson = [];

let tempDataSet = { Account: {} };
demoJson.forEach((elements) => {
  //   //   console.log(elements);
  Object.keys(elements).forEach((element) => {
    // console.log(element);
    // console.log(element + ":" + elements[element]);
    // console.log(typeof element);
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
  //   console.log(tempDataSet);
  //   console.log(4);
  finalJson.push(tempDataSet);
});
console.log(typeof finalJson);
console.log(finalJson);
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
// const checkJson = {
//   Account: {
//     Existence_of_Carer: "No",
//     Account_Name: "Bill Whittle",
//     Account_Type: "Private",
//     Birthdate: "11/8/31",
//     Gender: "Male",
//     Country_of_Birth: "England",
//     Primary_Language: "English",
//     ATSI_Origin: "Not stated/Inadequately described",
//     Disability: "None",
//     Accommodation_Type: "Private residence - client or family owned/purchasing",
//     Household_Composition: "Group (related adults)",
//     DVA_Card_Status: "No DVA entitlement",
//   },
//   Date: "5/18/21",
//   Type: "Dietician",
//   Hours: "",
//   Consult_Type: "Standard",
//   Address: "10 Byrnes St, Rozelle NSW 2039",
// };

const builder = new xml2js.Builder({
  headless: false,
  renderOpts: { pretty: true },
});

const xml = builder.buildObject(finalJson);

console.log(xml);
