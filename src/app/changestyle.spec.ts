import {describe, it, expect, beforeEachProviders, inject} from 'angular2/testing';
import {ChangestyleApp} from '../app/changestyle';

beforeEachProviders(() => [ChangestyleApp]);

describe('App: Changestyle', () => {
  it('should have the `defaultMeaning` as 42', inject([ChangestyleApp], (app: ChangestyleApp) => {
    expect(app.defaultMeaning).toBe(42);
  }));

  describe('#meaningOfLife', () => {
    it('should get the meaning of life', inject([ChangestyleApp], (app: ChangestyleApp) => {
      expect(app.meaningOfLife()).toBe('The meaning of life is 42');
      expect(app.meaningOfLife(22)).toBe('The meaning of life is 22');
    }));
  });
});

