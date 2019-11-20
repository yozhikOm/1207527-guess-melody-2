import {createTimer} from './createTimer.js';

it(`Модуль Timer работает корректно`, () => {
  const mockOnTimeExpired = jest.fn();
  const mockTimer = createTimer(3, mockOnTimeExpired);

  const remainingTime1 = mockTimer.tick();
  expect(remainingTime1).toEqual(2);

  const remainingTime2 = mockTimer.tick();
  expect(remainingTime2).toEqual(1);

  mockTimer.tick();
  expect(mockOnTimeExpired).toHaveBeenCalledTimes(1);

});
