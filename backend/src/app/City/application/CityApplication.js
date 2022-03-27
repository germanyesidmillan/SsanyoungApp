const BaseApplication = require("../../../shared/app/application/BaseApplication");
class CityApplication extends BaseApplication {
  constructor({ CityRepository }) {
    super(CityRepository);
  }
}

module.exports = CityApplication;
