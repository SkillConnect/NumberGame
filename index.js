function generate(){
    document.getElementById('input').style.display = 'none';
    document.getElementById('loader').style.display = 'block';
    generateNumbers()
    setTimeout(() => {  
        document.getElementById('loader').style.display = 'none';
        document.getElementById('output').style.display = 'block'; 
    }, 2200);    
}

function generateNumbers(){
    let inp = document.getElementById('numberInput').value;
    if(inp){
        let sinp = inp.toString()
        if(sinp.length!==3){
            document.getElementById('display').innerHTML = 'Please enter 3 digit number only'
            return;
        }
        let first = Number(sinp[0]), second = Number(sinp[1]), third = Number(sinp[2])
        console.log(first, second, third)
        let li = [0, third, 1, 6,second, 7, 8, 9, first, 3, 4, second, third, 2, 5, first]
        let fi, si, ti, i, result='';
        for(i=0; i<5;i++){
            fi = getRandomInt(0, 15)
            si = getRandomInt(0, 15)
            ti = getRandomInt(0, 15)
            result += '<br>' + li[fi] + li[si] + li[ti]
        }

        document.getElementById('display').innerHTML = result
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}