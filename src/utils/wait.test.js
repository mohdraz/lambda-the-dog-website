import wait from "./wait";

/*
// async test with done method way
test("wait for promise to resolve", done => {
  wait(3).then(result => {
    expect(result).toBe("hurray!");
    done();
  });
}); 



// async testw ith the return Promse way
test("wait for promise to resolve", () => {
  return wait(3).then(result => {
    expect(result).toBe("hurray!");
  });
});



// async test with async/await
test("wait for promise to resolve", async () => {
  const result = await wait(3);
  expect(result).toBe("hurray!");
});

*/

// jest.useFakeTimers();

jest.useFakeTimers();

test("wait for promise to resolve", async () => {
  const spy = jest.fn();

  const waitFn = await wait(3, spy);

  // jest.runAllTimers();

  jest.runAllTimers();

  const result = await waitFn;

  expect(result).toBe("hurray!");
  expect(spy).toHaveBeenCalledWith("resolve finished");
  expect(spy).toHaveBeenCalledTimes(1);
});
