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