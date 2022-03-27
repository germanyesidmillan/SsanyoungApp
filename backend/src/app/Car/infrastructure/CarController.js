class CarController {
  constructor({ CarApplication, logger, response: { Success } }) {
    this._CarApplication = CarApplication;
    this._logger = logger;
    this.Success = Success;
  }

  async index(req, res, next) {
    try {
      const Car = await this._CarApplication.getAll();
      res.status(200).json(this.Success(Car));
    } catch (error) {
      next(error);
    }
  }

  async show(req, res, next) {
    try {
      const { params } = req;
      const Car = await this._CarApplication.get(params.id);
      res.status(200).json(this.Success(Car));
    } catch (error) {
      next(error);
    }
  }

  async store(req, res, next) {
    try {
      const { body } = req;
      const Car = await this._CarApplication.create(body);
      res.status(201).json(this.Success(Car));
    } catch (error) {
      next(error);
    }
  }

  async edit(req, res, next) {
    try {
      const { body, params } = req;
      const Car = await this._CarApplication.update(params.id, body);
      res.status(201).json(this.Success(Car));
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      const { params } = req;
      const Car = await this._CarApplication.delete(params.id);
      res.status(201).json(this.Success(Car));
    } catch (error) {
      next(error);
    }
  }
}

module.exports = CarController;
