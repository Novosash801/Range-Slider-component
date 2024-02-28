const monthNumber = [ 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек', ];
    const transformed = monthNumber.map((item, index, arr) => {
            return arr[index]
    })

    const result = ['2015', ...transformed, '2016' , ...monthNumber, '2017']

    console.log(result);