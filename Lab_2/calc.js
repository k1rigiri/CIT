function calculate() {
  let x_2 = document.getElementById("x2").value;
  let x_ = document.getElementById("x").value;
  let c = document.getElementById("constanta").value;
  let discr = x_ * x_ - 4 * x_2 * c;
  if (+x_2 === 0) {
    alert("Введен неправильный коэффициент");
  } else {
    if (discr < 0) {
      alert("Корней нет");
    } else if (discr === 0) {
      let x1 = -x_ / (2 * x_2);
      alert(`Корень равен: ${x1}`);
    } else if (discr > 0) {
      let x1 = (-x_ + Math.sqrt(discr)) / (2 * x_2);
      let x2 = (-x_ - Math.sqrt(discr)) / (2 * x_2);
      alert(`Первый корень равен: ${x1} , второй корень равен: ${x2}`);
    }
  }
}
