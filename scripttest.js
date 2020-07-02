function loadFile(){
  var input = document.getElementById("myFile");
  var output = document.getElementById("output");
    
  input.addEventListener("change", function () {
    if (this.files && this.files[0]) {
      var myFile = this.files[0];
      var reader = new FileReader();
      
      reader.addEventListener('load', function (e) {
        output.textContent = e.target.result;
      });
      
      reader.readAsBinaryString(myFile);
    }   
  });
}
loadFile();

function loadFileParse(){
  var input = document.getElementById("myFileParse");
  var output = document.getElementById("outputParse");

  input.addEventListener("change", function () {
    if (this.files && this.files[0]) {
      var myFileParse = this.files[0];
      var readerParse = new FileReader();
      
      readerParse.addEventListener('load', function (e) {
        output.textContent = e.target.result;
      });
      
      readerParse.readAsBinaryString(myFileParse);
    }   
  });
}
loadFileParse();

function tableCreate(){
  var body = document.getElementById("myFile"),
  tbl  = document.createElement('table');
  tbl.style.width  = '100px';
  tbl.style.border = '1px solid black';

  input.addEventListener("change", function () {
    if (this.files && this.files[0]) {
      var myFile = this.files[0];
      var reader = new FileReader();
      
      for(var i = 0; i < 3; i++){
        var tr = tbl.insertRow();
        for(var j = 0; j < 2; j++){
            if(i == 2 && j == 1){
                break;
            } else {
                var td = tr.insertCell();
                td.appendChild(document.createTextNode('Cell'));
                td.style.border = '1px solid black';
                if(i == 1 && j == 1){
                    td.setAttribute('rowSpan', '1');
                }
            }
        }
    }
    body.appendChild(tbl);

    }   
  });
}
tableCreate();