"use strict";

var expect = require("chai").expect;
var index = require("../app/index");

describe("index - Test", function () {
  describe("Testing the log", function () {
    it("Testing the sum operation", function () {
      expect(index.a()).to.equal("holA mundo");
    });
  });
});
