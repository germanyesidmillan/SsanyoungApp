const BaseApplication = require("../../../shared/app/application/BaseApplication");
class DepartmentApplication extends BaseApplication {
  constructor({ DepartmentRepository }) {
    super(DepartmentRepository);
  }
}

module.exports = DepartmentApplication;
