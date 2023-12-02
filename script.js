let csvString = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";

let rows = csvString.split('\n');

let header = rows[0].split(',');
let numColums = header.length;

let data = [];
data.push(header);

for (let i = 1; i < rows.length; i++) {
    let currentRow = rows[i].split(',');
    let rowObject = {};

    for (let j = 0; j < numColums; j++) {
        let key = header[j].toLowerCase();
        rowObject[key] = currentRow[j];
    }

    data.push(rowObject);
}

let arrayOfObjects = data.slice(1);

console.log(arrayOfObjects); 