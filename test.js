var XLSX = require("xlsx");

var workbook = XLSX.readFile("Sample.xlsx", {
  cellDates: true,
  dateNF: "dd-mm-yyyy;@",
});
var sheet_name_list = workbook.SheetNames;
var xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]], {
  header: 0,
  defval: "",
  sheetStubs: true,
  raw: false,
});
console.log(xlData);

let count = 0;

let finalData = { Clients: { Client: [] } };

xlData.forEach((elements) => {
  let tempDataSet = {};
  tempDataSet.Account = {};

  Object.keys(elements).forEach((element) => {
    if (element.includes("Account:")) {
      // if (elements[element] === "") console.log(1);
      tempDataSet.Account[
        element.replace("Account:", "").trim().replace(/ /g, "")
      ] = elements[element];
    } else {
      // if (elements[element] === "") console.log(2);
      tempDataSet[element.replace(/ /g, "")] = elements[element];
    }
  });

  // console.log(tempDataSet);
  // console.log("/n");
  finalData.Clients.Client.push(tempDataSet);
});
console.log(finalData);
console.dir(finalData, { depth: null });
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
  .create(finalData, { encoding: "utf-8" })
  .end({ pretty: true });

console.log(xml);

//---------------------------------------------------------
