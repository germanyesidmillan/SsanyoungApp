const BaseRepository = require("../../../shared/app/domain/BaseRepository");
const City = require("./CityModel");
class CityRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "City", City);
  }
}

module.exports = CityRepository;
