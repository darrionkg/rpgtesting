/* eslint-disable no-undef */
import { setBrowserVariable, getBrowserVariable } from '../src/functions';

describe('Functions', function () {


  it('gets a variable from the browser', function () {
    setBrowserVariable("name", "Sir knight");
    expect("Sir knight").toEqual(getBrowserVariable("name"));
    //Test content will go here.
  });
});