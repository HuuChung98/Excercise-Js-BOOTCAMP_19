// Tìm số nguyên dương nhỏ nhất sao cho:
// 1 + 2 + … + n > 10000

document.getElementById('check__result').onclick = function() {
    const num = +document.getElementById("get__Num").value;

    const showEl = document.getElementById("show");

    let number__min = 0;
    number__min = Math.ceil(Math.sqrt(2 * num + 0.25) - 0.5);

    showEl.style.display = "block";
    showEl.innerHTML = `Số n nhỏ nhất của phép tính 1 + 2 + ... + n > ${num} là ${number__min}`;
}