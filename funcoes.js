
//Valida se entrada com paste no campo é letra
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

//Valida se entrada do campo é letra
function validate(e) {
    //Recebe a tecla pressionada
    var keycode = (e.which) ? e.which : e.keyCode;
    //compara a tecla clicada, se entrar entrar no if é porque não é
    //um numero, então não escreve a letra.
    if ((keycode < 48 || keycode > 57) && keycode !== 13) {
        e.preventDefault();
        return false;
    }
}

//Função que ocorre ao pressionar o botão "Exemplo"
function correct(){
  var DynamicMJ = {
    formula: document.getElementById("formula"),

    update: function () {
      //Recebe os elementos com a id numerador em a e id denominador em b
      var a = document.getElementById("numerador").value;
          b = document.getElementById("denominador").value;
      if(a=='' || b==''){
        //Se algum dos campos estiver vazio solicita que preencha
        this.formula.innerHTML = "Valor inválido, preencha os campos que faltam!";
      }
      else{
        //se não ele formata a fração utilizando o latex do MathJax, comando \frac{a}{b}
        var tex = "\\frac{"+a+"}{"+b+"}";
        this.formula.innerHTML = "Resultado inline: \$"+tex+"\$ <br>Resultado Centralizado: \\["+tex+"\\]";
      }
      MathJax.Hub.Queue(["Typeset",MathJax.Hub,this.formula]);
    }
  };
  DynamicMJ.update();
}
