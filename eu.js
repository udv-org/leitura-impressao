var input = document.getElementById("myFile");

function loadFile(){

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


function imprimir(){
    //Para imprimir na página
    var w = window.open('eu.js'); //Required full file path.
    w.print();
 
    window.alert("OLA");
}

loadFile();