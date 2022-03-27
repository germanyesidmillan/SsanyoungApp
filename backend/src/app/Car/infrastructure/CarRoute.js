module.exports = ({ server, CarController }) => {
  const app = server.router();

  /**
   * @openapi
   * /Car/:
   *   get:
   *     tags:
   *      - Car
   *     description: Get all Cars
   *     responses:
   *       200:
   *         description: Returns a mysterious string.
   */
  app.get("/", CarController.index.bind(CarController));

  /**
   * @openapi
   * /Car/{id}:
   *   get:
   *     tags:
   *      - Car
   *     description: Get Car by id
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
  app.get("/:id", CarController.show.bind(CarController));

  /**
   * @openapi
   * /Car/:
   *   post:
   *     tags:
   *      - Car
   *     summary: Crate new Car
   *     operationId: addCar
   *     requestBody:
   *      description: Car object that needs to be added to the store
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
   *             name: Car
   *      required: true
   *     responses:
   *       200:
   *         description: Returns a mysterious string.
   */
  app.post("/", CarController.store.bind(CarController));

  /**
   * @openapi
   * /Car/{id}:
   *   put:
   *     tags:
   *      - Car
   *     description: Update Car by id
   *     parameters:
   *        - name: id
   *          description: Id to get by
   *          in: path
   *          type: integer
   *     responses:
   *       200:
   *         description: Returns a mysterious string.
   */
  app.put("/:id", CarController.edit.bind(CarController));

  /**
   * @openapi
   * /Car/{id}:
   *   delete:
   *     tags:
   *      - Car
   *     description: Delete Car by id
   *     parameters:
   *        - name: id
   *          description: Id to get by
   *          in: path
   *          type: integer
   *     responses:
   *       200:
   *         description: Returns a mysterious string.
   */
  app.delete("/:id", CarController.delete.bind(CarController));

  return app;
};
