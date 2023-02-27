let salaries = {
  frontend: 12000,
  backend: 10000,
  designer: 8000,
  dayPay() {
    alert("We must pay salary an Tuesday");
  },
  total() {
    let result = 0;
    for (let key in salaries) {
      if (salaries[key] > 0) {
        result += salaries[key];
      }
    }
    return result;
  },
};

console.log(salaries.total());
