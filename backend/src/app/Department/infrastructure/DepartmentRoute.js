module.exports = ({ server, DepartmentController }) => {
  const app = server.router();

  /**
   * @openapi
   * /Department/:
   *   get:
   *     tags:
   *      - Department
   *     description: Get all Departments
   *     responses:
   *       200:
   *         description: Returns a mysterious string.
   */
  app.get("/", DepartmentController.index.bind(DepartmentController));

  /**
   * @openapi
   * /Department/{id}:
   *   get:
   *     tags:
   *      - Department
   *     description: Get Department by id
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
  app.get("/:id", DepartmentController.show.bind(DepartmentController));

  /**
   * @openapi
   * /Department/:
   *   post:
   *     tags:
   *      - Department
   *     summary: Crate new Department
   *     operationId: addDepartment
   *     requestBody:
   *      description: Department object that needs to be added to the store
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
   *             name: Department
   *      required: true
   *     responses:
   *       200:
   *         description: Returns a mysterious string.
   */
  app.post("/", DepartmentController.store.bind(DepartmentController));

  /**
   * @openapi
   * /Department/{id}:
   *   put:
   *     tags:
   *      - Department
   *     description: Update Department by id
   *     parameters:
   *        - name: id
   *          description: Id to get by
   *          in: path
   *          type: integer
   *     responses:
   *       200:
   *         description: Returns a mysterious string.
   */
  app.put("/:id", DepartmentController.edit.bind(DepartmentController));

  /**
   * @openapi
   * /Department/{id}:
   *   delete:
   *     tags:
   *      - Department
   *     description: Delete Department by id
   *     parameters:
   *        - name: id
   *          description: Id to get by
   *          in: path
   *          type: integer
   *     responses:
   *       200:
   *         description: Returns a mysterious string.
   */
  app.delete("/:id", DepartmentController.delete.bind(DepartmentController));

  return app;
};
