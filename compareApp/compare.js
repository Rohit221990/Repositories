const fs = require('fs');
let pdf = require('electron').remote.require('pdf-parse')
PDFDocument = require('pdfkit');
var Diff = require('diff');
require('colors');




function compare(){
  var sourceFile = document.getElementById('inputSourceFile');
  var compareFile = document.getElementById('inputCompareFile');
  let dataBufferSourceFile = fs.readFileSync(sourceFile.files[0].path);
  let dataBufferCompareFile = fs.readFileSync(compareFile.files[0].path);

  var sourceFileData;
  var compareFileData;

  pdf(dataBufferSourceFile).then(function(data) {
    sourceFileData = data.text;
    pdf(dataBufferCompareFile).then(function(data) {
      compareFileData = data.text;
      var dmp = new diff_match_patch();
      // PDF text
      doc = new PDFDocument;
      console.log(data.text);
      doc.fontSize(15).text(data.info.Title, 50, 50);
// Set the paragraph width and align direction


      var diff = dmp.diff_main(sourceFileData, compareFileData);
      dmp.diff_cleanupSemantic(diff);

      var ds = dmp.diff_prettyHtml(diff);

      doc.text(ds, {
          width: 410,
          align: 'left'
      });

      // diff.forEach(function(part){
      //   // green for additions, red for deletions
      //   // grey for common parts
      //   var color = part.added ? 'green' :
      //     part.removed ? 'red' : 'grey';
      //   process.stderr.write(part.value[color]);
      // });

      doc.pipe(fs.createWriteStream('output.pdf'));
      // PDF Creation logic goes here
      doc.end();

      });
    });
  }
