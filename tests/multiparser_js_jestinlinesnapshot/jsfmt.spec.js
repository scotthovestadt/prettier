jest.spyOn(require("jest"), "getVersion").mockImplementation(() => "24.6.0");

run_spec(__dirname, ["babel", "flow", "typescript"], { proseWrap: "always" });
