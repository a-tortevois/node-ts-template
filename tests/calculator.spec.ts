import assert from 'node:assert';
import {describe, it} from 'node:test';

import { Calculator } from '../src/calculator';
const calc = new Calculator();

describe('Calculator tests', function() {
  it('should return 2 when calling add(1, 1)', function() {
    const result = calc.add(1, 1);
    assert.strictEqual(result, 2);
  });

  it('should return 2 when calling add(1, 2)', function() {
    const result = calc.add(1, 2);
    assert.strictEqual(result, 3);
  });
});
