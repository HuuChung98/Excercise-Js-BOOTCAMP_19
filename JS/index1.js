const money__50kw__first = 500;
const money__50km__next = 650;
const money__100km_next = 850;
const money__150km__next = 1100;
const money__remaining = 1300;

document.getElementById('cal').onclick = function() {
    const numKw = +document.getElementById('num__kw').value;
    const showEl = document.getElementById('pre-inf')
    show__money = cal(numKw);
    showEl.style.display = "block";
    showEl.innerHTML = `Tiền điện phải trả là ${show__money} VND`;
}

function cal(numKw)
{
    let money__consumtion = 0;
    if(numKw <= 50)
    {
        money__consumtion = numKw * money__50kw__first;
    }
    else if(numKw > 50 && numKw <= 100)
    {
        money__consumtion = money__50kw__first * 50 + (numKw - 50) * money__50km__next; 
    }
    else if(numKw > 100 && numKw <= 150)
    {
        money__consumtion = money__50kw__first * 50 + 50 * money__50km__next + money__100km_next * (numKw - 100);
    }
    else if (numKw > 150 && numKw < 200) 
    {
        money__consumtion = money__50kw__first * 50 + 50 * money__50km__next + money__100km_next * 50 + money__150km__next * (numKw - 150);
    }
    else
    {
        money__consumtion = money__50kw__first * 50 + 50 * money__50km__next + money__100km_next * 50 + money__150km__next * 50 + (numKw - 200) * money__remaining;
    }
    return money__consumtion;
}