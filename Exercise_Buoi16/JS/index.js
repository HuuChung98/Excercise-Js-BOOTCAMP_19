// Bài tập về nhà
// Cho người dùng nhập vào số nguyên và lưu trữ trong mảng.
// Thiết kế layout cho người dùng chọn thực hiện các chức năng bên dưới:
// 1. Tổng các số dương trong mảng.
// 2. Đếm có bao nhiêu số dương trong mảng.
// 3. Tìm số nhỏ nhất trong mảng.
// 4. Tìm số dương nhỏ nhất trong mảng.
// 5. Tìm số chẵn cuối cùng trong mảng. Nếu mảng không có giá trị chẵn thì trả về -1.
// 6. Đổi chỗ 2 giá trị trong mảng theo vị trí (Cho nhập vào 2 vị trí muốn đổi chỗ giá trị).
// 7. Sắp xếp mảng theo thứ tự tăng dần.
// 8. Tìm số nguyên tố đầu tiên trong mảng. Nếu mảng không có số nguyên tố thì trả về – 1.
// 9. Nhập thêm 1 mảng số thực, tìm xem trong mảng có bao nhiêu số nguyên?
// 10. So sánh số lượng số dương và số lượng số âm xem số nào nhiều hơn.

// Số 6 cần viết 1 cách khác

document.getElementById("get__num").addEventListener('click', conDuct);

const numbers = [];

function conDuct()
{
    const numbersPositive = [];
    const numberEven = [];
    const numberOdd = [];
    let count = 0;
    let count1 = 0
    let result1 = 0; // tổng số dương
    let result2 = 0; // Đếm có bao nhiêu số dương trong mảng.
    let result3 = 0; // Tìm số nhỏ nhất trong mảng.
    let result4 = 0; // Tìm số dương nhỏ nhất trong mảng.
    let result5 = 0; // Tìm số chẵn cuối cùng trong mảng. Nếu mảng không có giá trị chẵn thì trả về -1.
    let result7 = 0; // Sắp xếp mảng theo thứ tự tăng dần.
    let result8 = 0; // Trả về số nguyên tố đầu tiên trong mảng
    let result10 = 0;
    const num = +document.getElementById("add__num").value;
    numbers.push(num);
    // const add__num = document.getElementById('add__num');
    document.getElementById("array").innerHTML = numbers;
    const numbersArange = numbers;
    result3 = numbersArange.sort(compareNumber)[0];
    result7 = numbers.sort(compareNumber)
    for (let i = 0; i < numbers.length; i ++)
    {
        if(numbers[i] >= 0)
        {
            numbersPositive.push(numbers[i]);
            result1 += numbers[i]; 
            count += 1;                     
        }
        if (numbers[i] < 0)
        {
            count1 += 1;
        }
        if(numbers[i] % 2 === 0)
        {
            
            numberEven.push(numbers[i]);
            // result5 = document.getElementById("result5")
        }
        if (numbers[i] % 2 != 0)
        {
            numberOdd.push(numbers[i]);
        }
        
    }

    result10 = sosanh(count, count1);
    console.log(count);
    console.log(count1);
    result4 = compareMinpositivenumber(numbersPositive);
    result8 = firstPrime(numbersPositive);
    result5 = checkEvenfinal(numberEven);
    console.log(numbersPositive);
    document.getElementById("result1").innerHTML = result1;
    document.getElementById("result2").innerHTML = count;
    document.getElementById("result3").innerHTML = result3;
    document.getElementById("result4").innerHTML = result4;
    document.getElementById("result5").innerHTML = result5;
    document.getElementById("result7").innerHTML = result7;
    document.getElementById("result10").innerHTML = result10;
}
function compareNumber(a, b) {
    return a - b; // bé tới lớn
}
function compareMinpositivenumber(numbersPositive){
    let minpositiveValue = numbersPositive[0];

    for (let j = 1; j < numbersPositive.length; j ++)
    {
        // let minpositiveValue = numbersPositive[0];
        if(numbersPositive[j] < minpositiveValue)
        {
            minpositiveValue = numbersPositive[j];
        }
    }
    return minpositiveValue;
    
}
function checkEvenfinal (numberEven)
{
    if(numberEven.length === 0)
    {
        return -1
    }
    else
    {
        return numberEven.pop();
    }
}
function sosanh(count, count1)
{
    // let message = '';
    if(count > count1)
    {
        return `Số Dương nhìu hơn số Âm`;
    }
    else if(count < count1)
    {
        return `Số Dương ít hơn số Âm`
    }
    else
    {
        return `Số Dương bằng số Âm`
    }
}
function firstPrime(numbersPositive)
{
    let count3 = 0;
    let i = 0
    while(i <= numbersPositive.length)
    {
        if(numbersPositive[i] < 2)
        {
            return 'chưa có số nguyên tố';
        }
        for(let j = 0; j <= Math.sqrt(numbersPositive[i]); j++)
        {
            if(numbersPositive[i] % j === 0)
            {
                count3 ++;
            }
            else
            {
                return numbersPositive[i];
            }
        }
        i ++;
    }
}
