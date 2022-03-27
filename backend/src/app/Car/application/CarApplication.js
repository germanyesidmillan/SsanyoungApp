const BaseApplication = require("../../../shared/app/application/BaseApplication");
class CarApplication extends BaseApplication {
  constructor({ CarRepository }) {
    super(CarRepository);
  }
}

module.exports = CarApplication;
