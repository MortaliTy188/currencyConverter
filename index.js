document.getElementById("convertButton").addEventListener("click", function () {
  const currencyFrom = document.getElementById("currencyFrom").value;
  const currencyTo = document.getElementById("currencyTo").value;
  const amount = document.getElementById("amount").value;

  if (amount === "" || isNaN(amount) || amount <= 0) {
    Swal.fire({
      position: "top-end",
      icon: "error",
      title: "Введите корректное значение",
      showConfirmButton: false,
      timer: 3000,
    });
  }

  apiUrl = `https://v6.exchangerate-api.com/v6/c30350fd7c82f15c9a1fedfb/latest/${currencyFrom}`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const rate = data.conversion_rates[currencyTo];
      const convertedAmount = (amount * rate).toFixed(2);
      document.getElementById(
        "result"
      ).textContent = `${amount} ${currencyFrom} = ${convertedAmount} ${currencyTo}`;
    })
    .catch((error) => {
      console.error("Ошибка получения данных", error);
      document.getElementById("result").textContent =
        "Ошибка получения данных.";
    });
});
