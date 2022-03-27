const BaseApplication = require('../../../shared/app/application/BaseApplication');
const { transporter } = require('../../../shared/mail/correo');

class ClientApplication extends BaseApplication {
  constructor({ ClientRepository }) {
    super(ClientRepository);
  }

  async getValidaDatos(datos) {
    const Opt = this._entityRepository.Op;
    let fecha = new Date();

    let newFecha =
      fecha.getFullYear() +
      '-' +
      String(fecha.getMonth() + 1).padStart(2, '0') +
      '-' +
      String(fecha.getDate()).padStart(2, '0');

    let where = {
      where: {
        email: datos.email,
        createdAt: {
          [Opt.between]: [
            newFecha + 'T00:00:00.737Z',
            newFecha + 'T23:59:59.737Z',
          ],
        },
      },
    };

    let existe = await this.getAll(where);
    return existe.length;
  }

  async enviarCorreo(datos,vehiculo) {
    await transporter.sendMail({
      from: '"Cotizacion de vehiculo 👻" <germanydevelop@gmail.com>', // sender address
      to: `jaguilar@processoft.com.co, jcastro@processoft.com.co,mahernandez@processoft.com.co, ${datos.email}`, // list of receivers
      subject: 'Cotizacion Ssanyoung', // Subject line
      html: `Gracias por contar con nuestra enpresa señor <b>${datos.name}</b> en unos instantes nos comunicaremos con
             usted al teléfono <b>${datos.phone}</b> para brindarle mayor asesoria acerca de nuestro vehiculo <b>${vehiculo.name}</b> 
      `, // html body
    });
  }
  
}

module.exports = ClientApplication;
