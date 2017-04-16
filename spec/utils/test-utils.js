// Utility function to make Jasmine play nicely with supertest.
// See: https://github.com/jasmine/jasmine-npm/issues/31#issuecomment-125953251
function finishTest(done) {
  return (err) => {
    if (err) {
      done.fail(err);
    } else {
      done();
    }
  };
}

class TestUtils {
  static get finishTest() {
    return finishTest;
  }
}

module.exports = TestUtils;
