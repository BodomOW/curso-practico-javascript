const lista1 = [1, 2, 3, 1, 2, 3, 2, 2, 2, 2, 3, 1, 2, 3];

const lista1Count = {};

lista1.map(
    function (elemento) {
        if (lista1Count[elemento]){
            lista1Count[elemento] += 1;
        }
        lista1Count[elemento] = 1;
    }
);