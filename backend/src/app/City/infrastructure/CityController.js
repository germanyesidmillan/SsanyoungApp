class CityController {
  constructor({ CityApplication, logger, response: { Success } }) {
    this._CityApplication = CityApplication;
    this._logger = logger;
    this.Success = Success;
  }

  async index(req, res, next) {
    try {
      const City = await this._CityApplication.getAll();
      res.status(200).json(this.Success(City));
    } catch (error) {
      next(error);
    }
  }

  async show(req, res, next) {
    try {
      const { params } = req;
      const City = await this._CityApplication.get(params.id);
      res.status(200).json(this.Success(City));
    } catch (error) {
      next(error);
    }
  }

  async store(req, res, next) {
    try {
      const { body } = req;
      const City = await this._CityApplication.create(body);
      res.status(201).json(this.Success(City));
    } catch (error) {
      next(error);
    }
  }

  async edit(req, res, next) {
    try {
      const { body, params } = req;
      const City = await this._CityApplication.update(params.id, body);
      res.status(201).json(this.Success(City));
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      const { params } = req;
      const City = await this._CityApplication.delete(params.id);
      res.status(201).json(this.Success(City));
    } catch (error) {
      next(error);
    }
  }

  async getCityDptmtid(req, res, next) {
    try {
      const { params } = req;
      
      let parametros =  {
        where: {
          dpartmentsid:parseInt(params.id)
        }
      } 

      const City = await this._CityApplication.getAll(parametros);
      res.status(201).json(this.Success(City));
    } catch (error) {
      next(error);
    }
  }

}

module.exports = CityController;
