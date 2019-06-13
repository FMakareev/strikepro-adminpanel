import {SlideParseBody} from './SlideParseBody';
import {
  slideImageValuesVer1,
  slideImageHTMLVer1,
  slideImageValuesVer2,
  slideImageHTMLVer2,
  slideImageValuesVer3,
  slideImageHTMLVer3,
  slideImageValuesVer4,
  slideImageHTMLVer4,
  slideImageValuesVer5,
  slideImageHTMLVer5,
} from './mock';


it('SlideParseBody: case 1', () => {
  expect(SlideParseBody(slideImageHTMLVer1)).toEqual(slideImageValuesVer1);
});

it('SlideParseBody: case 2', () => {
  expect(SlideParseBody(slideImageHTMLVer2)).toEqual(slideImageValuesVer2);
});

it('SlideParseBody: case 3', () => {
  expect(SlideParseBody(slideImageHTMLVer3)).toEqual(slideImageValuesVer3);
});

it('SlideParseBody: case 4', () => {
  expect(SlideParseBody(slideImageHTMLVer4)).toEqual(slideImageValuesVer4);
});

it('SlideParseBody: case 5', () => {
  expect(SlideParseBody(slideImageHTMLVer5)).toEqual(slideImageValuesVer5);
});


