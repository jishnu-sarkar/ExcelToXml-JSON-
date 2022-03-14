// const xlsxj = require("xlsx-to-json");

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
      tempDataSet.Account[element.replace("Account:", "").trim()] =
        elements[element];
      //   console.log(element);
      //   console.log(1);
      //   // console.log(demoJson[element]);
    } else {
      tempDataSet[element] = elements[element];
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
// console.log(typeof finalJson);
console.log(finalJson);

// finalJson = JSON.parse({ finalJson });

//JOI VALIDATION FOR JSON
// function validator(obj) {
//   console.log(obj);
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
