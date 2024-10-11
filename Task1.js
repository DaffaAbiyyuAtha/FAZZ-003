function bulatkanNilai(e) {
    return e.map(datas => 
        datas < 38 ? datas : ((Math.ceil(datas / 5) * 5 - datas) < 3 ? Math.ceil(datas / 5) * 5 : datas)
    );
}

const nilaiInput = [73, 67, 38, 33];
console.log(bulatkanNilai(nilaiInput));