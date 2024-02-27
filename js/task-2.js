function calcAverageCalories(days) {
  let totalCalories = 0;

  if (days.length > 0) {
    for (const cal of days) {
      totalCalories += cal.calories;
    }
    return totalCalories / days.length;
  }
  return 0;
}