
// ---------------------- //
// runTests.js - Test runner for all test files.
// ---------------------- //

import { runQueueTests } from './Queue.test.js';
import { runBinaryMatrixGraphTests } from './BinaryMatrixGraph.test.js';
import { runPriorityQueueTests } from './PriorityQueue.test.js';
import { runWeightedMatrixGraphTests } from './WeightedMatrixGraph.test.js';
import { testPassedCount, testFailedCount } from './testUtils.js';

runTests();

function runTests() {
    console.log("== Starting tests ==");
    runQueueTests();
    runBinaryMatrixGraphTests();
    runPriorityQueueTests();
    runWeightedMatrixGraphTests();
    console.log("== " + testPassedCount + " passed, " + testFailedCount + " failed ==");
}


