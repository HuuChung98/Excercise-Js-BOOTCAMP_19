// Viết chương trình nhập vào 2 số x, n tính tổng: S(n) = x + x^2
// + x^3 + … + x^n (Sử dụng vòng lặp và hàm)

document.getElementById("check__result").onclick = function() {
    const coSo = +document.getElementById("coSo").value;
    const soMu = +document.getElementById("soMu").value;

    const showEl = document.getElementById("show");

    if(coSo === 0)
    {
        showEl.style.display = "block";
        showEl.innerHTML = `Tổng S(n) = 0`;
    }
    else if (soMu === 1 && coSo != 0)
    {
        showEl.style.display = "block";
        showEl.innerHTML = `Tổng S(n) = ${coSo}`;
    }
    else
    {
        let tong = calSum(coSo, soMu);
        showEl.style.display = "block";
        showEl.innerHTML = `Tổng S(n) = ${tong}`;
    }
}

function calSum(coSo, soMu)
{
    let sum = 0;
    for(let i = 1; i <= soMu; i++)
    {
        sum += Math.pow(coSo, i);
    }
    return sum;
}
        