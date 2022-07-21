//const cotizaDolarVenta = 310;
//const cotizaDolarCompra = 300;

let monto = 0;
let plazo = 0;
let interes = 0;
let nombre = "";
let direccion = "";
let correo = "";

//array con valores de cotizacion Venta/Compra
const cotizaDolar = [330, 322];


//funcion compar-Vender moneda extranjera
const CompraVentaMonedaExtranjera = (cotiza, cantidad) => cantidad * cotiza;
//funcion venta-compra Moneda extranjera (ingresar Pesos)
const CompVtaMonedaExtranjera = (cotiza, cantidad) => cantidad / cotiza;

class prestamo {
  constructor(Nombre, Apellido, Correo) {
    this.Nombre = Nombre;
    this.Apellido = Apellido;
    this.Correo = Correo;
    this.cuota = 0;
    this.Total = 0;
    this.Interes = 0;
  }
  CalculaCuotaPrestamo(monto, plazo, interes) {
    let valor = 0;
    let Coeficiente = 0;
    let Coeficiente1 = 0;

    Coeficiente = 1 + interes / 100;
    Coeficiente1 = Coeficiente;

    for (let i = 1; i < plazo; i++) {
      Coeficiente1 = Coeficiente1 * Coeficiente;
    }

    Coeficiente1 = 1 / Coeficiente1;
    Coeficiente1 = 1 - Coeficiente1;
    valor = ((interes / 100) * monto) / Coeficiente1;
    this.cuota = Intl.NumberFormat().format(valor);
    this.Total = Intl.NumberFormat().format(valor * plazo);
    this.interes = Intl.NumberFormat().format(valor * plazo - monto);
    //return Intl.NumberFormat().format(valor);
  }

  ValidarDatos(monto, plazo, interes) {
    if (isNaN(monto) == false) {
      if (isNaN(plazo) == false) {
        if (isNaN(interes) == false) {
          return true;
        } else {
          alert("Interes Ingresado incorrecto");
          return false;
        }
      } else {
        alert("Plazo Ingresado incorrecto");
        return false;
      }
    } else {
      alert("Monto Ingresado incorrecto");
      return false;
    }
  }
}

function OpcionesInicio() {
  let opcion = prompt(
    "SERVICIOS FINANCIEROS\n Seleccione la opcion:\n" +
      "1 - Compra Moneda Extranjera\n" +
      "2 - Venta Moneda Extranjera\n" +
      "3 - Prestamos Personales\n" +
      "4 - Salir"
  );
  return opcion;
}

let opcion = OpcionesInicio();

while (opcion != "4") {
  switch (opcion) {
    case "1":
      CompraMoneda();
      break;
    case "2":
      VenderMoneda();
      break;
    case "3":
      CuotaPrestamo();
      break;
    default:
      alert("Opción Incorrecta");
      break;
  }
  opcion = OpcionesInicio();
}
if (opcion=="4") {
  alert("Gracias por confiar en Te Presto");
}

function CompraMoneda() {
  let cantidad = prompt(
    "Compra Moneda Extranjera\n" +
      "Cotización: " +
      cotizaDolar[0] +
      "\n" +
      "Ingrese Cantidad a Comprar:"
  );
  if (isNaN(cantidad) == false) {
    alert(
      "Necesita " +
        CompraVentaMonedaExtranjera(cotizaDolar[0], cantidad) +
        " Pesos para adquirir " +
        cantidad +
        " Dolares."
    );
  } else {
    alert("Cantidad Ingresada incorrecta");
  }
}

function VenderMoneda() {
  let cantidad = prompt(
    "Venta Moneda Extranjera\n" +
      "Cotización: " +
      cotizaDolar[1] +
      "\n" +
      "Ingrese Cantidad a Vender:"
  );
  if (isNaN(cantidad) == false) {
    alert(
      "Recibirá " +
        CompraVentaMonedaExtranjera(cotizaDolar[1], cantidad) +
        " Pesos por la venta de " +
        cantidad +
        " Dolares."
    );
  } else {
    alert("Cantidad Ingresada incorrecta");
  }
}

function CuotaPrestamo() {
  monto = prompt("Ingresá Monto del Prestamo: ");
  plazo = prompt("Cantidad de Cuotas a Pagar: ");
  interes = prompt("Interes: ");
  const prestamo1 = new prestamo("Marcos", "Martin", "Marcos@gmail.com");
  if (prestamo1.ValidarDatos(monto, plazo, interes)) {
    prestamo1.CalculaCuotaPrestamo(monto, plazo, interes);
    alert(
      "Cuota Mensual: " +
        prestamo1.cuota +
        "\nTota a Pagar: " +
        prestamo1.Total +
        "\nTotal Intereses: " +
        prestamo1.interes
    );
  }
}
