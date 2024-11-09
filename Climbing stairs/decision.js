function climbStairs(n) {
  const memo = {}; // Объект для хранения результатов

  function helper(n) {
    if (n <= 2) return n; // Базовый случай: если n = 1 или n = 2, то количество способов равно n

    if (memo[n] !== undefined) {
      return memo[n]; // Если результат уже вычислен, возвращаем его
    }

    // Рекурсивно вычисляем количество способов для n-1 и n-2
    memo[n] = helper(n - 1) + helper(n - 2);
    return memo[n]; // Возвращаем вычисленный результат
  }

  return helper(n); // Запускаем рекурсию с начальной ступеньки
}

// Solved with GPT :(
