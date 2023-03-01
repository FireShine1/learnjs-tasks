function topSalary(salaries) {
  let maxSalary = 0;
  let result = null;

  for(const [name, salary] of Object.entries(salaries)) {
    if (maxSalary < salary) {
      maxSalary = salary;
      result = name;
    }
  }

  return result;
}

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

console.log( topSalary(salaries) );