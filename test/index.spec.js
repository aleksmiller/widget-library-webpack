/* global describe, it, before */

import chai from 'chai';
import Widget from '../src/containers/Widget';

chai.expect();

const expect = chai.expect;

let lib;

describe('Given an instance of my Widget library', () => {
  before(() => {
    lib = new Widget();
  });
  it('should return the title', () => {
    expect(lib.title).to.be.equal('Widget');
  });
});
