import {expect} from 'chai';
import * as oudon from '../src/oudon';

describe('oudon.IDB', () => {
  it('これはクラス', () => {
    let idb = new oudon.IDB();
    expect(idb).to.be.an('object');
  });
});