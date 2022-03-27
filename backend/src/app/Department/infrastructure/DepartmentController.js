class DepartmentController {
  constructor({ DepartmentApplication, logger, response: { Success } }) {
    this._DepartmentApplication = DepartmentApplication;
    this._logger = logger;
    this.Success = Success;
  }

  async index(req, res, next) {
    try {
      const Department = await this._DepartmentApplication.getAll();
      res.status(200).json(this.Success(Department));
    } catch (error) {
      next(error);
    }
  }

  async show(req, res, next) {
    try {
      const { params } = req;
      const Department = await this._DepartmentApplication.get(params.id);
      res.status(200).json(this.Success(Department));
    } catch (error) {
      next(error);
    }
  }

  async store(req, res, next) {
    try {
      const { body } = req;
      const Department = await this._DepartmentApplication.create(body);
      res.status(201).json(this.Success(Department));
    } catch (error) {
      next(error);
    }
  }

  async edit(req, res, next) {
    try {
      const { body, params } = req;
      const Department = await this._DepartmentApplication.update(params.id, body);
      res.status(201).json(this.Success(Department));
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      const { params } = req;
      const Department = await this._DepartmentApplication.delete(params.id);
      res.status(201).json(this.Success(Department));
    } catch (error) {
      next(error);
    }
  }
}

module.exports = DepartmentController;
