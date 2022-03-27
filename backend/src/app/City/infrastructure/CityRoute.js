module.exports = ({ server, CityController }) => {
  const app = server.router();

  /**
   * @openapi
   * /City/:
   *   get:
   *     tags:
   *      - City
   *     description: Get all Citys
   *     responses:
   *       200:
   *         description: Returns a mysterious string.
   */
  app.get("/", CityController.index.bind(CityController));

  /**
   * @openapi
   * /City/{id}:
   *   get:
   *     tags:
   *      - City
   *     description: Get City by id
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
  app.get("/:id", CityController.show.bind(CityController));

  /**
   * @openapi
   * /City/:
   *   post:
   *     tags:
   *      - City
   *     summary: Crate new City
   *     operationId: addCity
   *     requestBody:
   *      description: City object that needs to be added to the store
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
   *             name: City
   *      required: true
   *     responses:
   *       200:
   *         description: Returns a mysterious string.
   */
  app.post("/", CityController.store.bind(CityController));

  /**
   * @openapi
   * /City/{id}:
   *   put:
   *     tags:
   *      - City
   *     description: Update City by id
   *     parameters:
   *        - name: id
   *          description: Id to get by
   *          in: path
   *          type: integer
   *     responses:
   *       200:
   *         description: Returns a mysterious string.
   */
  app.put("/:id", CityController.edit.bind(CityController));

  /**
   * @openapi
   * /City/{id}:
   *   delete:
   *     tags:
   *      - City
   *     description: Delete City by id
   *     parameters:
   *        - name: id
   *          description: Id to get by
   *          in: path
   *          type: integer
   *     responses:
   *       200:
   *         description: Returns a mysterious string.
   */
  app.delete("/:id", CityController.delete.bind(CityController));

  /**
   * @openapi
   * /City/department/{id}:
   *   get:
   *     tags:
   *      - City
   *     description: City by  department id
   *     parameters:
   *        - name: id
   *          description: Id to get by
   *          in: path
   *          type: integer
   *     responses:
   *       200:
   *         description: Returns a mysterious string.*/
  app.get("/department/:id", CityController.getCityDptmtid.bind(CityController));

  return app;
};
