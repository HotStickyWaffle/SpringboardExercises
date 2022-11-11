describe('Taking in input values, performing the calculations, and displaying them as a string', function () {
  it('should calculate the monthly rate correctly with 2 decimal places', function () {
    expect(calculateMonthlyPayment({ amount: 100000, years: 10, rate: 5 })).toEqual('1060.66');
    expect(calculateMonthlyPayment({ amount: 654321, years: 7, rate: 8.5 })).toEqual('10362.14');
    expect(calculateMonthlyPayment({ amount: 100, years: 14, rate: 3.4 })).toEqual('0.75');
    expect(calculateMonthlyPayment({ amount: 759375, years: 69, rate: 4.2 })).toEqual('2813.73');
  });


  // it("should return a result with 2 decimal places", function () {
  //   expect(calculateMonthlyPayment({ amount: 100, years: 1, rate: 5.3333 })).toEqual('1060.66');
  //   expect(calculateMonthlyPayment({ amount: 654321, years: 7, rate: 8.5 })).toEqual('10362.14');
  //   expect(calculateMonthlyPayment({ amount: 100, years: 14, rate: 3.4 })).toEqual('0.75');
  // });

  /// etc

  it('should update the monthly payment window correctly', function () {
    updateMonthly('1234.22');
    expect(monthlyPayment.innerText).toEqual('$1234.22');
    updateMonthly('3568468.55');
    expect(monthlyPayment.innerText).toEqual('$3568468.55');
    updateMonthly('19981.88');
    expect(monthlyPayment.innerText).toEqual('$19981.88');
  })

  it('should create an object of current values', function () {
    amount.value = 759375;
    years.value = 69;
    rate.value = 4.2;
    expect(getCurrentUIValues()).toEqual(jasmine.objectContaining({ amount: 759375, years: 69, rate: 4.20, }));
  })
})