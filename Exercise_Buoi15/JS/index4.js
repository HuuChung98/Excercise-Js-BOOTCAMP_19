// 4. Hãy viết chương trình khi click vào button sẽ in ra 10 thẻ div.
// Nếu div nào vị trí chẵn thì background màu đỏ và lẻ thì
// background màu xanh.

document.getElementById("print__div").onclick = function() {
    const count = 10;   
    let element = document.getElementById("myDIV");
    // element.classList.add("red__div");

    myFunction(count, element);
    
}

function myFunction(count, element)
{
    for (let i = 1; i <= count; i ++)
    {
        console.log(" line 13");
        if(i % 2 != 0)
        {
            const redEl = document.createElement("div"); 
            const divText = document.createTextNode(`div lẻ ${i}`);
            redEl.appendChild(divText);
            redEl.classList.add("red__div");
            element.appendChild(redEl);
        }
        else
        {
            const greenEl = document.createElement("div");
            const divText = document.createTextNode(`div chẳn ${i}`);
            greenEl.appendChild(divText);
            greenEl.classList.add("green__div");
            element.appendChild(greenEl);
        }
    }
}