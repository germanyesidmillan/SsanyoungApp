module.exports = ({ server, ClientController }) => {
  const app = server.router();

  /**
   * @openapi
   * /Client/:
   *   get:
   *     tags:
   *      - Client
   *     description: Get all Clients
   *     responses:
   *       200:
   *         description: Returns a mysterious string.
   */
  app.get("/", ClientController.index.bind(ClientController));

  /**
   * @openapi
   * /Client/{id}:
   *   get:
   *     tags:
   *      - Client
   *     description: Get Client by id
   *     parameters:
   *        - name: id
   *          description: Id to get by
   *          in: path
   *          type: integer
   *          required: true
   *     responses:
   *       200:
   *         description: Returns a mysterious string.
   */
  app.get("/:id", ClientController.show.bind(ClientController));

  /**
   * @openapi
   * /Client/:
   *   post:
   *     tags:
   *      - Client
   *     summary: Crate new Client
   *     operationId: addClient
   *     requestBody:
   *      description: Client object that needs to be added to the store
   *      content:
   *        application/json:
   *         schema:
   *           type: object
   *           properties:
   *             firstName:
   *               type: string
   *             lastName:
   *               type: string
   *             email:
   *               type: string
   *           xml:
   *             name: Client
   *      required: true
   *     responses:
   *       200:
   *         description: Returns a mysterious string.
   */
  app.post("/", ClientController.store.bind(ClientController));

  /**
   * @openapi
   * /Client/{id}:
   *   put:
   *     tags:
   *      - Client
   *     description: Update Client by id
   *     parameters:
   *        - name: id
   *          description: Id to get by
   *          in: path
   *          type: integer
   *     responses:
   *       200:
   *         description: Returns a mysterious string.
   */
  app.put("/:id", ClientController.edit.bind(ClientController));

  /**
   * @openapi
   * /Client/{id}:
   *   delete:
   *     tags:
   *      - Client
   *     description: Delete Client by id
   *     parameters:
   *        - name: id
   *          description: Id to get by
   *          in: path
   *          type: integer
   *     responses:
   *       200:
   *         description: Returns a mysterious string.
   */
  app.delete("/:id", ClientController.delete.bind(ClientController));

  return app;
};
