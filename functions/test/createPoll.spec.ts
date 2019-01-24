import 'jest';

import * as funcs from '../src';

/// HTTP
describe('createPoll', () => {

  test('it returns a successful response with a valid card', () => {
    const req = { };
    const res = {
      send: (payload:string) => {
        expect(payload).toBe('Creating Poll');
      }, 
    };

    funcs.createPoll(req as any, res as any);
  }); 

});