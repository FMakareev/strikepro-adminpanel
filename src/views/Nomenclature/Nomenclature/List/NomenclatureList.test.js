/** Global jest, it, expect  */
import React from 'react';
import {shallow} from 'enzyme/build';
import NomenclatureList from './index';


it('mounts without crashing NomenclatureList', () => {
  const wrapper = shallow(<NomenclatureList/>);
  wrapper.unmount()
});


it('fetch test NomenclatureList', done => {

  const mockSuccessResponse = {
    copyright: "Copyright (c) 2019 The New York Times Company. All Rights Reserved.",
    has_more: false,
    num_results: 9,
    status: "OK",
    results: [],
  };
  const mockJsonPromise = Promise.resolve(mockSuccessResponse);
  const mockFetchPromise = Promise.resolve({
    json: () => mockJsonPromise,
  });

  jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);


  const wrapper = shallow(<NomenclatureList/>); // 5
  expect(global.fetch).toHaveBeenCalledTimes(1);

  expect(global.fetch).toHaveBeenCalledWith('https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=godfather&api-key=hTsGgLxCCLpYjIMEMPRMZ9lqFbyv0PyX');

  process.nextTick(() => { // 6
    expect(wrapper.state()).toEqual(mockSuccessResponse);

    global.fetch.mockClear(); // 7
    done(); // 8
  });

});

function APIRequest(who) {
  if (who === 'google') {
    return fetch('https://google.com').then(res => res.json())
  } else {
    return 'no argument provided'
  }
}

describe('testing api', () => {
  beforeEach(() => {
    fetch.resetMocks()
  });

  it('calls google and returns data to me', done => {
    fetch.mockResponseOnce(JSON.stringify({data: '12345'}));

    //assert on the response
    APIRequest('google')
      .then(res => {
        expect(res.data).toEqual('12345')
      });
    console.log(fetch.mock.calls);
    //assert on the times called and arguments given to fetch
    expect(fetch.mock.calls.length).toEqual(1);
    expect(fetch.mock.calls[0][0]).toEqual('https://google.com');

    done();
  })
});
