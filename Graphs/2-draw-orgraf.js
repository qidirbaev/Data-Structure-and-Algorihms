"use strict";

// Orgraf - yo'naltirilgan grafdir

/* Note
Ografning qo'shnilik matritsasi NxN o'lchamda bo'lib,
true yoki false qiymatlardan iborat.
*/



// Yo'naltirilgan tasodifiy orgrafning qo'shnilik matritsasini chizish algoritmi

const N = 12;   // Grafning uchlar soni
const M = 10;   // Grafning qirralar soni

const draw_orgraf = (N, M) => {
    const matrix = [];

    for (let i = 0; i < N; i++) matrix.push([]);    // matrix= [1-[], 2-[], ... , n-[]]

    for (let k = 0; k < N; k++) {
        for (let l = 0; l < N; l++) {
            const RANDOM_BOOL = !Math.round(Math.random() + 0.1);  // RANDOM_BOOL ⊆ {true, false}

            if (RANDOM_BOOL) {
                matrix[k][l] = true;    // Demak k dan l ga yo'l mavjud
            } else if (k === l && RANDOM_BOOL) {
                matrix[k][l] = true;    // Demak grafning k uchi ilmoqli
            } else {
                matrix[k][l] = false;   // Demak k dan l ga yo'l mavjud emas
            }
            
        }
    }

    return matrix;
};

draw_orgraf(N, M);