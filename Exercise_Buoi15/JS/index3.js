// Nhập vào n. Tính giai thừa 1*2*...n

document.getElementById("cal").onclick = function() {
    const factor = +document.getElementById("factor").value;

    const showEl = document.getElementById("show");
    // factorials 
    
    let giaithua = 1;
    if(factor === 0)
    {
        showEl.style.display = "block";
        showEl.innerHTML = `KQ = 0`;
    }
    else
    {
        for(let i = 1; i <= factor; i++)
        {
            giaithua *= i;
        }
        showEl.style.display = "block";
        showEl.innerHTML = `KQ = ${giaithua}`;
    }

    
}