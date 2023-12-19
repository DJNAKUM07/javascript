console.log("Hello Digvijay")

// run it by  - node fileName.js

function calculateAge(birthdate) {
  const today = new Date();
  const birthYear = birthdate.getFullYear();
  const birthMonth = birthdate.getMonth();
  const birthDay = birthdate.getDate();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth();
  const currentDay = today.getDate();

  let ageYears = currentYear - birthYear;
  let ageMonths = currentMonth - birthMonth;
  let ageDays = currentDay - birthDay;

  if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
    ageYears--;
    ageMonths += 12;
  }

  if (ageDays < 0) {
    const prevMonth = (currentMonth + 11) % 12; // Wraps around to the previous month
    ageDays += new Date(currentYear, prevMonth + 1, 0).getDate();
    ageMonths--;
  }

  return { years: ageYears, months: ageMonths, days: ageDays };
}

// Example usage
const birthdate = new Date('1983-03-28');
const age = calculateAge(birthdate);
console.log(age); // Output: { years: 36, months: 6, days: 1 }



