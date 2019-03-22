it("is a test", () => {
  expect(tree).toMatchInlineSnapshot(`
Object {
  "createdAt": 2018-05-19T23:36:09.816Z,
  "id": 3,
  "name": "LeBron James",
}
`);

  expect(thisIsAnExtremelyLongVariableNameAndWillForceCallExprToNextLine).toMatchInlineSnapshot(`
Object {
  "createdAt": 2018-05-19T23:36:09.816Z,
  "id": 3,
  "name": "LeBron James",
}
`);

  expect(tree).toMatchInlineSnapshot(`
    Object {
      "createdAt": 2018-05-19T23:36:09.816Z,
      "id": 3,
      "name": "LeBron James",
    }
  `);

    expect(tree).toMatchInlineSnapshot(`
          Object {
            "createdAt": 2018-05-19T23:36:09.816Z,
            "id": 3,
            "name": "LeBron James",
          }
        `);

        expect(tree).toMatchInlineSnapshot(`
        Object {
          "createdAt": 2018-05-19T23:36:09.816Z,
          "id": 3,
          "name": "LeBron James",
        }
      `);
});
