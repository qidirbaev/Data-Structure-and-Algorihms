"use strict";

// Simple - yo'naltirilmagan grafdir

/* Note
Oddiy grafning qo'shnilik matritsasi NxN o'lchamda bo'lib,
bosh diagonalga nisbatan simmetrik joylashgan 2M ta true yoki false
qiymatlardan iborat.
*/



// Ilmoqsiz, yo'naltirilmagan tasodisiy grafning qo'shnilik matritsasini chizish algoritmi

const N = 12;   // Grafning uchlar soni
const M = 10;   // Grafning qirralar soni

const draw_simple = (N, M) => {
    const matrix = [];

    for (let i = 0; i < N; i++) matrix.push([]);    // matrix= [1-[], 2-[], ... , n-[]]

    for (let k = 0; k < N; k++) {
        for (let l = k; l < N; l++) {
            const RANDOM_BOOL = !Math.round(Math.random() + 0.1);  // RANDOM_BOOL ⊆ {true, false}
            if (k !== l) {
                matrix[k][l] = RANDOM_BOOL;
                matrix[l][k] = RANDOM_BOOL;
            } else {
                matrix[k][k] = false;
            }
        }
    }

    return matrix;
};

draw_simple(N, M);