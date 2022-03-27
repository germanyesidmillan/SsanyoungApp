const BaseRepository = require("../../../shared/app/domain/BaseRepository");
const Client = require("./ClientModel");
class ClientRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "Client", Client);
  }
}

module.exports = ClientRepository;
