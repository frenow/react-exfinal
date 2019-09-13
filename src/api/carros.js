import carros from "./carros-data.json";

export class Carros {
  static getCarros() {
    return new Promise((resolve, reject) => {
      if (carros) {
        resolve(carros);
      } else {
        reject();
      }
    });
  }

  static getCarrobyId(id) {
    return new Promise((resolve, reject) => {
      const carro = carros.modelos.find(c => c.id === parseInt(id));
      if (carro) {
        resolve(carro);
      } else {
        reject();
      }
    });
  }
}