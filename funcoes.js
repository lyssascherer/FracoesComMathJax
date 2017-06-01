function validatepaste(e) {
    //var ctrldown =  e.ctrlKey ? e.ctrlKey : ((e.keyCode === 17) ? true : false);
    var pastedata = e.clipboardData.getData('text/plain');
    if (isNaN(pastedata)) {
        e.preventDefault();
        console.log("PASTE FAIL!");
        console.log(pastedata);
        return false;
    } else {
        console.log("PASTE!");
        console.log(pastedata);
    }
}

function validate(e) {
    //getting key code of pressed key
    var keycode = (e.which) ? e.which : e.keyCode;
    var phn = document.getElementById('textarea');
    //comparing pressed keycodes
    if ((keycode < 48 || keycode > 57) && keycode !== 13) {
        e.preventDefault();
        console.log("FAIL");
        return false;
    } else {
        console.log("OK!");
    }
}
function correct(){
  var DynamicMJ = {
    formula: document.getElementById("formula"),

    update: function () {
      var a = document.getElementById("caminho_percorrido_num").value;
          b = document.getElementById("caminho_percorrido_den").value;
      var c = document.getElementById("caminho_percorrido").value;
      var tex = "\\text{"+c+" }\\   \\frac{"+a+"}{"+b+"}";
      this.formula.innerHTML = "\\["+tex+"\\]";
      MathJax.Hub.Queue(["Typeset",MathJax.Hub,this.formula]);
    }
  };
  DynamicMJ.update();
}
