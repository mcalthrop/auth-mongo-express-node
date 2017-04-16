const SpecReporter = require('jasmine-spec-reporter').SpecReporter;

// remove default reporter logs
jasmine.getEnv().clearReporters();
// add jasmine-spec-reporter
jasmine.getEnv().addReporter(new SpecReporter());
