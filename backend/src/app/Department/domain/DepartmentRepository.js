const BaseRepository = require("../../../shared/app/domain/BaseRepository");
const Department = require("./DepartmentModel");
class DepartmentRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "Department", Department);
  }
}

module.exports = DepartmentRepository;
