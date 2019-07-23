import { Component, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page implements OnInit {

  @ViewChild('visor') myVisor;
  
  public progress: number = 0;
  public pressState: string = "released";

  // Interval function
  protected interval: any;

  visor = null;

  constructor() { }

  ngOnInit() {
  }

  ionViewLoaded() {

    setTimeout(() => {
      this.myVisor.setFocus();
    },150);
 }

  // Função adiciona novo valor ao visor.
  verificarResulatado() {
    try {
      var aux = this.visor.value.substring(this.visor.value.length - 1, this.visor.value.length);
      if (this.verificarOperador(aux)) {
        this.apagar();
      }

      var valorCalculado = eval(this.visor.value);//calcular o conteúdo da string
      if (valorCalculado || valorCalculado == "0") {
        this.visor.value = valorCalculado;
      } else {
        throw "erro";
      }
    } catch (e) {
      console.error(e)
    } 
  }

  preencher(valor) {

    if (this.verificarOperador(valor)) {
        var aux = this.visor.substring(this.visor.length - 1, this.visor.length);
        //subtituir o valor do operador pelo atual
        if (this.verificarOperador(aux)) {
          this.apagar();
        }
    }
    if (valor) {
      this.visor += valor;
    }
}

  // Validar valores.
  validaValores(e) {
    console.log(e);
    if ((e.charCode == 43) ) {
      return 'true';
    } else{
      this.visor
    }
  }

  // Função apaga o que estava digitado.
  apagar() {
    this.visor = this.visor.substr(0, this.visor.length - 1);
    setTimeout(() => {
      this.visor.setFocus();
    },150);
  }

  // Função "Presionado".
  onPress($event) {
    console.log("onPress", $event);
    this.pressState = 'pressing';
    this.startInterval();
  }

  // Função "Soltar".
  onPressUp($event) {
    this.visor = "";
    console.log("onPressUp", $event);
    this.pressState = 'released';
    this.stopInterval();
  }

  // Função inicia a contagem.
  startInterval() {
    const self = this;
    this.interval = setInterval(function () {
      self.progress = self.progress + 1;
    }, 50);
    if (self.progress > 0.5) {
      console.log(self.progress)
      this.visor = null;
    }
  }

  // Função que para a contagem.
  stopInterval() {
    clearInterval(this.interval);
    //this.progress = 0
  }

  // Função gera o resultado do calculo.
  fimcalc() {
    if (this.visor == 0) {
      alert('Digite os valores para calcular.')
    } else {
      this.visor = eval(this.visor)
    }
  }

  // Função para bloquear o uso de letras.
  ApenasLetras(e) {
    console.log('foi')
    try {
      var charCode = e.keyCode;
      console.log('set charcode:' + charCode)
      if (e) {

      } else if (e) {
        var charCode = e.which;
      } else {
        return true;
      }
      if (
        (charCode > 47 && charCode < 58) ||
        (charCode > 0 && charCode <= 47)
      ) {
        if (charCode == 13) {
          console.log('ok')
          this.fimcalc();
        }
        return true;
      }
      else {
        return false;
      }
    } catch (err) {
      alert(err.Description);
    }
  }

  verificarOperador(valor) {
    switch (valor) {
        case "+":
            return true;
        case "-":
            return true;
        case "*":
            return true;
        case "/":
            return true;

        default:
            return false;
    }
}
}
