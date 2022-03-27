const BaseRepository = require("../../../shared/app/domain/BaseRepository");
const Car = require("./CarModel");
class CarRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "Car", Car);
  }
}

module.exports = CarRepository;
