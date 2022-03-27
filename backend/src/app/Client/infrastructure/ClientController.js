//const { DATE } = require('sequelize/types');
const { transporter } = require('../../../shared/mail/correo');

class ClientController {
  constructor({
    ClientApplication,
    CarApplication,
    logger,
    response: { Success },
  }) {
    this._ClientApplication = ClientApplication;
    this._CarApplication = CarApplication;
    this._logger = logger;
    this.Success = Success;
  }

  async index(req, res, next) {
    try {
      const Clients = await this._ClientApplication.getAll();
      res.status(200).json(this.Success(Clients));
    } catch (error) {
      next(error);
    }
  }

  async show(req, res, next) {
    try {
      const { params } = req;
      const Client = await this._ClientApplication.get(params.id);
      res.status(200).json(this.Success(Client));
    } catch (error) {
      next(error);
    }
  }

  async store(req, res, next) {
    try {
      const { body } = req;

      let existe = await this._ClientApplication.getValidaDatos(body);

      res.status(201);

      if (existe > 0) {
        res.status(201).json(
          this.Success({
            error: 'Ya tienes cotizaciones registradas en el dia',
          })
        );
      } else {
        //crear cotizacion
        const Client = await this._ClientApplication.create(body);
        //consultar vehiculo
        const vehiculo = await this._CarApplication.get(body.carid);

        //enviar correo
        await this._ClientApplication.enviarCorreo(body, vehiculo);
        res.status(201).json(this.Success(Client));
      }
    } catch (error) {
      next(error);
    }
  }

  async edit(req, res, next) {
    try {
      const { body, params } = req;
      const Client = await this._ClientApplication.update(params.id, body);
      res.status(201).json(this.Success(Client));
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      const { params } = req;
      const Client = await this._ClientApplication.delete(params.id);
      res.status(201).json(this.Success(Client));
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ClientController;
