const LEVELS = [

    /* PIĘTRO 1 */
    [
        "111111111111111",
        "100000000000001",
        "101111111111101",
        "100000000000101",
        "111111111110101",
        "100000000010101",
        "101111111010101",
        "101000001010101",
        "101011101010101",
        "101010001010101",
        "101010111010101",
        "101010000010101",
        "101011111110101",
        "100000000000001",
        "111111111111111"
    ],

    /* PIĘTRO 2 */
    [
        "111111111111111",
        "100000000000001",
        "101111011111101",
        "101000010000001",
        "101011110111101",
        "101010000100101",
        "101010111101101",
        "101010100001101",
        "101010101111101",
        "101000100000001",
        "101111111011111",
        "100000001000001",
        "111111101111101",
        "100000000000001",
        "111111111111111"
    ],

    /* PIĘTRO 3 */
    [
        "111111111111111",
        "100000100000001",
        "111010101111101",
        "100010100000101",
        "101110111110101",
        "100000000010101",
        "101111111010101",
        "101000001010101",
        "101011101010101",
        "101010001000101",
        "101011111110101",
        "100000000000101",
        "101111111111101",
        "100000000000001",
        "111111111111111"
    ],

    /* PIĘTRO 4 */
    [
        "111111111111111",
        "100000000000001",
        "101111111111101",
        "101000000000001",
        "101011111111101",
        "101010000000101",
        "101010111110101",
        "101010100010101",
        "101010101010101",
        "101000101010101",
        "101111101010101",
        "100000001010001",
        "111111111011101",
        "100000000000001",
        "111111111111111"
    ],

    /* PIĘTRO 5 */
    [
        "111111111111111",
        "100000000000001",
        "101111111011101",
        "100000001010001",
        "111111101011111",
        "100000101000001",
        "101110101111101",
        "101000100000101",
        "101011111110101",
        "101010000010101",
        "101010111010101",
        "101000101000101",
        "101111101111101",
        "100000000000001",
        "111111111111111"
    ],

    /* PIĘTRO 6 */
    [
        "111111111111111",
        "100000000000001",
        "101111011111101",
        "101000010000101",
        "101011110110101",
        "101010000100101",
        "101010111101101",
        "101010100001101",
        "101010101111101",
        "101000100000001",
        "101111111011111",
        "100000001000001",
        "111111101111101",
        "100000000000001",
        "111111111111111"
    ],

    /* PIĘTRO 7 */
    [
        "111111111111111",
        "100000100000001",
        "101110101111101",
        "101000100000101",
        "101011111110101",
        "101010000010101",
        "101010111010101",
        "100010101010101",
        "111110101010101",
        "100000001000101",
        "101111111110101",
        "101000000000101",
        "101011111111101",
        "100000000000001",
        "111111111111111"
    ],

    /* PIĘTRO 8 */
    [
        "111111111111111",
        "100000000000001",
        "111111101111101",
        "100000100000101",
        "101110111110101",
        "101000000010101",
        "101011111010101",
        "101010001010101",
        "101010101010101",
        "101010100010101",
        "101010111110101",
        "101000000000101",
        "101111111111101",
        "100000000000001",
        "111111111111111"
    ],

    /* PIĘTRO 9 */
    [
        "111111111111111",
        "100000000000001",
        "101111111111101",
        "101000000000101",
        "101011111110101",
        "101010000010101",
        "101010111010101",
        "101000101010101",
        "111110101010101",
        "100000101000101",
        "101111101111101",
        "101000000000001",
        "101011111111111",
        "100000000000001",
        "111111111111111"
    ],

    /* PIĘTRO 10 */
    [
        "111111111111111",
        "100000000000001",
        "101111011111101",
        "101000010000101",
        "101011110110101",
        "101010000100101",
        "101010111101101",
        "101010100001101",
        "101010101111101",
        "101000100000001",
        "101111111011111",
        "100000001000001",
        "111111101111101",
        "100000000000001",
        "111111111111111"
    ]

];

let currentLevel = 0;

/* DRZWI */

const exits = [
    { x: 13, y: 13 },
    { x: 13, y: 13 },
    { x: 13, y: 13 },
    { x: 13, y: 13 },
    { x: 13, y: 13 },
    { x: 13, y: 13 },
    { x: 13, y: 13 },
    { x: 13, y: 13 },
    { x: 13, y: 13 },
    { x: 13, y: 13 }
];

/* KLUCZE */

const keys = [
    { x: 11, y: 1 },
    { x: 11, y: 1 },
    { x: 5, y: 1 },
    { x: 11, y: 1 },
    { x: 9, y: 1 },
    { x: 11, y: 1 },
    { x: 11, y: 1 },
    { x: 11, y: 1 },
    { x: 11, y: 1 },
    { x: 11, y: 1 }
];

/* ZAGADKI */

const riddles = [
    { x: 7, y: 3, taken: false },
    { x: 9, y: 3, taken: false },
    { x: 11, y: 3, taken: false },
    { x: 9, y: 5, taken: false },
    { x: 7, y: 7, taken: false },
    { x: 9, y: 9, taken: false },
    { x: 11, y: 11, taken: false },
    { x: 7, y: 11, taken: false },
    { x: 9, y: 11, taken: false },
    { x: 11, y: 9, taken: false }
];

/* APTECZKI */

const medics = [
    { x: 1, y: 5, taken: false },
    { x: 3, y: 13, taken: false },
    { x: 1, y: 9, taken: false },
    { x: 11, y: 11, taken: false },
    { x: 1, y: 13, taken: false },

    { x: 9, y: 13, taken: false },
    null,
    { x: 11, y: 13, taken: false },
    null,
    { x: 1, y: 13, taken: false }
];

/* ENEMY */

const enemies = [

    /* PIĘTRO 1 - łatwe */
    [
        { x: 5, y: 1, startX: 4, endX: 8, direction: 1, img: "images/enemy1.gif" }
    ],

    /* PIĘTRO 2 - łatwe */
    [
        { x: 4, y: 1, startX: 3, endX: 8, direction: 1, img: "images/enemy1.gif" }
    ],

    /* PIĘTRO 3 - łatwe */
    [
        { x: 4, y: 1, startX: 2, endX: 7, direction: 1, img: "images/enemy1.gif" },
        { x: 5, y: 13, startX: 3, endX: 8, direction: 1, img: "images/enemy1.gif" }
    ],

    /* PIĘTRO 4 - łatwe */
    [
        { x: 5, y: 1, startX: 3, endX: 9, direction: 1, img: "images/enemy1.gif" },
        { x: 5, y: 13, startX: 3, endX: 9, direction: 1, img: "images/enemy2.gif" }
    ],

    /* PIĘTRO 5 - łatwe, ale już trochę mocniejsze */
    [
        { x: 5, y: 1, startX: 3, endX: 10, direction: 1, img: "images/enemy1.gif" },
        { x: 5, y: 13, startX: 3, endX: 10, direction: 1, img: "images/enemy2.gif" }
    ],

    /* PIĘTRO 6 - średnie */
    [
        { x: 5, y: 1, startX: 3, endX: 11, direction: 1, img: "images/enemy1.gif" },
        { x: 6, y: 13, startX: 3, endX: 11, direction: 1, img: "images/enemy2.gif" },
        { x: 9, y: 9, startX: 8, endX: 12, direction: -1, img: "images/enemy3.gif" }
    ],

    /* PIĘTRO 7 - średnie */
    [
        { x: 6, y: 1, startX: 4, endX: 11, direction: 1, img: "images/enemy1.gif" },
        { x: 6, y: 13, startX: 3, endX: 12, direction: 1, img: "images/enemy2.gif" },
        { x: 9, y: 9, startX: 7, endX: 12, direction: -1, img: "images/enemy3.gif" }
    ],

    /* PIĘTRO 8 - trudniejsze */
    [
        { x: 5, y: 1, startX: 3, endX: 11, direction: 1, img: "images/enemy1.gif" },
        { x: 5, y: 13, startX: 3, endX: 12, direction: 1, img: "images/enemy2.gif" },
        { x: 9, y: 11, startX: 8, endX: 12, direction: -1, img: "images/enemy3.gif" }
    ],

    /* PIĘTRO 9 - trudniejsze */
    [
        { x: 5, y: 1, startX: 3, endX: 12, direction: 1, img: "images/enemy1.gif" },
        { x: 5, y: 13, startX: 3, endX: 12, direction: 1, img: "images/enemy2.gif" },
        { x: 9, y: 9, startX: 7, endX: 12, direction: -1, img: "images/enemy3.gif" },
        { x: 10, y: 13, startX: 7, endX: 12, direction: -1, img: "images/enemy1.gif" }
    ],

    /* PIĘTRO 10 - najtrudniejsze z tej serii */
    [
        { x: 5, y: 1, startX: 3, endX: 12, direction: 1, img: "images/enemy1.gif" },
        { x: 5, y: 13, startX: 3, endX: 12, direction: 1, img: "images/enemy2.gif" },
        { x: 9, y: 9, startX: 7, endX: 12, direction: -1, img: "images/enemy3.gif" },
        { x: 10, y: 13, startX: 7, endX: 12, direction: -1, img: "images/enemy2.gif" }
    ]

];
/* PIĘTRA 11–20 */

LEVELS.push(
    [
        "111111111111111",
        "100000000000001",
        "101111111111101",
        "101000000000101",
        "101011111110101",
        "101010000010101",
        "101010111010101",
        "101000101010101",
        "111110101010101",
        "100000101000101",
        "101111101111101",
        "101000000000001",
        "101011111111101",
        "100000000000001",
        "111111111111111"
    ],

    [
        "111111111111111",
        "100000001000001",
        "101111101011101",
        "101000101010001",
        "101010101011111",
        "100010100000001",
        "111110111111101",
        "100000100000101",
        "101111101110101",
        "101000001010101",
        "101011111010101",
        "101000000010001",
        "101111111111101",
        "100000000000001",
        "111111111111111"
    ],

    [
        "111111111111111",
        "100000000000001",
        "101111011111101",
        "100001010000101",
        "111101011110101",
        "100101000010101",
        "101101111010101",
        "101100001010101",
        "101111101010101",
        "100000101000101",
        "101110101111101",
        "101000100000001",
        "101011111111101",
        "100000000000001",
        "111111111111111"
    ],

    [
        "111111111111111",
        "100000000000001",
        "101111111011101",
        "101000001010001",
        "101011101011111",
        "101010001000001",
        "101010111111101",
        "100010100000101",
        "111110101110101",
        "100000101010101",
        "101111101010101",
        "101000001000101",
        "101011111110101",
        "100000000000001",
        "111111111111111"
    ],

    [
        "111111111111111",
        "100000100000001",
        "101110101111101",
        "101000100000101",
        "101011111110101",
        "101010000010101",
        "101010111010101",
        "100010101010101",
        "111110101010101",
        "100000001000101",
        "101111111110101",
        "101000000000101",
        "101011111111101",
        "100000000000001",
        "111111111111111"
    ],

    [
        "111111111111111",
        "100000000000001",
        "111111101111101",
        "100000100000101",
        "101110111110101",
        "101000000010101",
        "101011111010101",
        "101010001010101",
        "101010101010101",
        "101010100010101",
        "101010111110101",
        "101000000000101",
        "101111111111101",
        "100000000000001",
        "111111111111111"
    ],

    [
        "111111111111111",
        "100000000000001",
        "101111111111101",
        "101000000000101",
        "101011111110101",
        "101010000010101",
        "101010111010101",
        "101000101010101",
        "111110101010101",
        "100000101000101",
        "101111101111101",
        "101000000000001",
        "101011111111111",
        "100000000000001",
        "111111111111111"
    ],

    [
        "111111111111111",
        "100000001000001",
        "101111101011101",
        "101000101010001",
        "101010101011111",
        "100010100000001",
        "111110111111101",
        "100000100000101",
        "101111101110101",
        "101000001010101",
        "101011111010101",
        "101000000010001",
        "101111111111101",
        "100000000000001",
        "111111111111111"
    ],

    [
        "111111111111111",
        "100000100000001",
        "111010101111101",
        "100010100000101",
        "101110111110101",
        "100000000010101",
        "101111111010101",
        "101000001010101",
        "101011101010101",
        "101010001000101",
        "101011111110101",
        "100000000000101",
        "101111111111101",
        "100000000000001",
        "111111111111111"
    ],

    [
        "111111111111111",
        "100000000000001",
        "101111111111101",
        "101000000000001",
        "101011111111101",
        "101010000000101",
        "101010111110101",
        "101010100010101",
        "101010101010101",
        "101000101010101",
        "101111101010101",
        "100000001010001",
        "111111111011101",
        "100000000000001",
        "111111111111111"
    ]
);

exits.push(
    { x: 13, y: 13 },
    { x: 13, y: 13 },
    { x: 13, y: 13 },
    { x: 13, y: 13 },
    { x: 13, y: 13 },
    { x: 13, y: 13 },
    { x: 13, y: 13 },
    { x: 13, y: 13 },
    { x: 13, y: 13 },
    { x: 13, y: 13 }
);

keys.push(
    { x: 11, y: 1 },
    { x: 9, y: 1 },
    { x: 11, y: 13 },
    { x: 1, y: 13 },
    { x: 11, y: 1 },
    { x: 7, y: 13 },
    { x: 9, y: 1 },
    { x: 11, y: 13 },
    { x: 5, y: 1 },
    { x: 11, y: 1 }
);

riddles.push(
    { x: 7, y: 3, taken: false },
    { x: 9, y: 3, taken: false },
    { x: 11, y: 5, taken: false },
    { x: 7, y: 7, taken: false },
    { x: 9, y: 9, taken: false },
    { x: 11, y: 11, taken: false },
    { x: 7, y: 11, taken: false },
    { x: 9, y: 11, taken: false },
    { x: 11, y: 9, taken: false },
    { x: 7, y: 5, taken: false }
);

medics.push(
    { x: 1, y: 13, taken: false },
    null,
    { x: 3, y: 13, taken: false },
    null,
    { x: 1, y: 5, taken: false },
    null,
    { x: 5, y: 13, taken: false },
    null,
    null,
    { x: 1, y: 13, taken: false }
);

enemies.push(
    [
        { x: 5, y: 1, startX: 3, endX: 12, direction: 1, img: "images/enemy1.gif" },
        { x: 5, y: 13, startX: 3, endX: 12, direction: 1, img: "images/enemy2.gif" },
        { x: 9, y: 9, startX: 7, endX: 12, direction: -1, img: "images/enemy3.gif" }
    ],

    [
        { x: 4, y: 1, startX: 3, endX: 12, direction: 1, img: "images/enemy1.gif" },
        { x: 6, y: 13, startX: 3, endX: 12, direction: 1, img: "images/enemy2.gif" },
        { x: 9, y: 11, startX: 7, endX: 12, direction: -1, img: "images/enemy3.gif" }
    ],

    [
        { x: 5, y: 1, startX: 3, endX: 12, direction: 1, img: "images/enemy1.gif" },
        { x: 5, y: 13, startX: 3, endX: 12, direction: 1, img: "images/enemy2.gif" },
        { x: 10, y: 13, startX: 7, endX: 12, direction: -1, img: "images/enemy3.gif" },
        { x: 9, y: 9, startX: 7, endX: 12, direction: -1, img: "images/enemy1.gif" }
    ],

    [
        { x: 5, y: 1, startX: 3, endX: 12, direction: 1, img: "images/enemy1.gif" },
        { x: 5, y: 13, startX: 3, endX: 12, direction: 1, img: "images/enemy2.gif" },
        { x: 9, y: 9, startX: 7, endX: 12, direction: -1, img: "images/enemy3.gif" },
        { x: 10, y: 13, startX: 7, endX: 12, direction: -1, img: "images/enemy2.gif" }
    ],

    [
        { x: 5, y: 1, startX: 3, endX: 12, direction: 1, img: "images/enemy1.gif" },
        { x: 6, y: 13, startX: 3, endX: 12, direction: 1, img: "images/enemy2.gif" },
        { x: 9, y: 9, startX: 7, endX: 12, direction: -1, img: "images/enemy3.gif" },
        { x: 10, y: 13, startX: 7, endX: 12, direction: -1, img: "images/enemy1.gif" }
    ],

    [
        { x: 5, y: 1, startX: 3, endX: 12, direction: 1, img: "images/enemy1.gif" },
        { x: 5, y: 13, startX: 3, endX: 12, direction: 1, img: "images/enemy2.gif" },
        { x: 9, y: 9, startX: 7, endX: 12, direction: -1, img: "images/enemy3.gif" },
        { x: 10, y: 13, startX: 7, endX: 12, direction: -1, img: "images/enemy2.gif" },
        { x: 7, y: 1, startX: 4, endX: 11, direction: 1, img: "images/enemy1.gif" }
    ],

    [
        { x: 5, y: 1, startX: 3, endX: 12, direction: 1, img: "images/enemy1.gif" },
        { x: 5, y: 13, startX: 3, endX: 12, direction: 1, img: "images/enemy2.gif" },
        { x: 9, y: 9, startX: 7, endX: 12, direction: -1, img: "images/enemy3.gif" },
        { x: 10, y: 13, startX: 7, endX: 12, direction: -1, img: "images/enemy2.gif" },
        { x: 7, y: 1, startX: 4, endX: 11, direction: 1, img: "images/enemy3.gif" }
    ],

    [
        { x: 4, y: 1, startX: 3, endX: 12, direction: 1, img: "images/enemy1.gif" },
        { x: 6, y: 13, startX: 3, endX: 12, direction: 1, img: "images/enemy2.gif" },
        { x: 9, y: 11, startX: 7, endX: 12, direction: -1, img: "images/enemy3.gif" },
        { x: 10, y: 13, startX: 7, endX: 12, direction: -1, img: "images/enemy2.gif" },
        { x: 7, y: 1, startX: 4, endX: 11, direction: 1, img: "images/enemy1.gif" }
    ],

    [
        { x: 5, y: 1, startX: 3, endX: 12, direction: 1, img: "images/enemy1.gif" },
        { x: 5, y: 13, startX: 3, endX: 12, direction: 1, img: "images/enemy2.gif" },
        { x: 9, y: 9, startX: 7, endX: 12, direction: -1, img: "images/enemy3.gif" },
        { x: 10, y: 13, startX: 7, endX: 12, direction: -1, img: "images/enemy2.gif" },
        { x: 7, y: 1, startX: 4, endX: 11, direction: 1, img: "images/enemy3.gif" },
        { x: 8, y: 13, startX: 5, endX: 12, direction: -1, img: "images/enemy1.gif" }
    ],

    [
        { x: 5, y: 1, startX: 3, endX: 12, direction: 1, img: "images/enemy1.gif" },
        { x: 5, y: 13, startX: 3, endX: 12, direction: 1, img: "images/enemy2.gif" },
        { x: 9, y: 9, startX: 7, endX: 12, direction: -1, img: "images/enemy3.gif" },
        { x: 10, y: 13, startX: 7, endX: 12, direction: -1, img: "images/enemy2.gif" },
        { x: 7, y: 1, startX: 4, endX: 11, direction: 1, img: "images/enemy3.gif" },
        { x: 8, y: 13, startX: 5, endX: 12, direction: -1, img: "images/enemy1.gif" }
    ]
);
/* PIĘTRA 21–30 */

LEVELS.push(
    /* PIĘTRO 21 */
    [
        "111111111111111",
        "100000000000001",
        "101111111111101",
        "101000000000101",
        "101011111110101",
        "101010000010101",
        "101010111010101",
        "101000101010101",
        "111110101010101",
        "100000101000101",
        "101111101111101",
        "101000000000001",
        "101011111111101",
        "100000000000001",
        "111111111111111"
    ],

    /* PIĘTRO 22 */
    [
        "111111111111111",
        "100000001000001",
        "101111101011101",
        "101000101010001",
        "101010101011111",
        "100010100000001",
        "111110111111101",
        "100000100000101",
        "101111101110101",
        "101000001010101",
        "101011111010101",
        "101000000010001",
        "101111111111101",
        "100000000000001",
        "111111111111111"
    ],

    /* PIĘTRO 23 */
    [
        "111111111111111",
        "100000100000001",
        "111010101111101",
        "100010100000101",
        "101110111110101",
        "100000000010101",
        "101111111010101",
        "101000001010101",
        "101011101010101",
        "101010001000101",
        "101011111110101",
        "100000000000101",
        "101111111111101",
        "100000000000001",
        "111111111111111"
    ],

    /* PIĘTRO 24 */
    [
        "111111111111111",
        "100000000000001",
        "101111111111101",
        "101000000000001",
        "101011111111101",
        "101010000000101",
        "101010111110101",
        "101010100010101",
        "101010101010101",
        "101000101010101",
        "101111101010101",
        "100000001010001",
        "111111111011101",
        "100000000000001",
        "111111111111111"
    ],

    /* PIĘTRO 25 */
    [
        "111111111111111",
        "100000000000001",
        "101111111011101",
        "100000001010001",
        "111111101011111",
        "100000101000001",
        "101110101111101",
        "101000100000101",
        "101011111110101",
        "101010000010101",
        "101010111010101",
        "101000101000101",
        "101111101111101",
        "100000000000001",
        "111111111111111"
    ],

    /* PIĘTRO 26 */
    [
        "111111111111111",
        "100000000000001",
        "101111011111101",
        "101000010000101",
        "101011110110101",
        "101010000100101",
        "101010111101101",
        "101010100001101",
        "101010101111101",
        "101000100000001",
        "101111111011111",
        "100000001000001",
        "111111101111101",
        "100000000000001",
        "111111111111111"
    ],

    /* PIĘTRO 27 */
    [
        "111111111111111",
        "100000100000001",
        "101110101111101",
        "101000100000101",
        "101011111110101",
        "101010000010101",
        "101010111010101",
        "100010101010101",
        "111110101010101",
        "100000001000101",
        "101111111110101",
        "101000000000101",
        "101011111111101",
        "100000000000001",
        "111111111111111"
    ],

    /* PIĘTRO 28 */
    [
        "111111111111111",
        "100000000000001",
        "111111101111101",
        "100000100000101",
        "101110111110101",
        "101000000010101",
        "101011111010101",
        "101010001010101",
        "101010101010101",
        "101010100010101",
        "101010111110101",
        "101000000000101",
        "101111111111101",
        "100000000000001",
        "111111111111111"
    ],

    /* PIĘTRO 29 */
    [
        "111111111111111",
        "100000000000001",
        "101111111111101",
        "101000000000101",
        "101011111110101",
        "101010000010101",
        "101010111010101",
        "101000101010101",
        "111110101010101",
        "100000101000101",
        "101111101111101",
        "101000000000001",
        "101011111111101",
        "100000000000001",
        "111111111111111"
    ],

    /* PIĘTRO 30 - BOSS ARENA */
    [
        "111111111111111",
        "100000000000001",
        "101111111111101",
        "101000000000101",
        "101011111110101",
        "101010000010101",
        "101010111010101",
        "100010100010001",
        "101010111010101",
        "101010000010101",
        "101011111110101",
        "101000000000101",
        "101111111111101",
        "100000000000001",
        "111111111111111"
    ]
);

exits.push(
    { x: 13, y: 13 },
    { x: 13, y: 13 },
    { x: 13, y: 13 },
    { x: 13, y: 13 },
    { x: 13, y: 13 },
    { x: 13, y: 13 },
    { x: 13, y: 13 },
    { x: 13, y: 13 },
    { x: 13, y: 13 },
    { x: 13, y: 13 }
);

keys.push(
    { x: 11, y: 1 },
    { x: 9, y: 1 },
    { x: 5, y: 1 },
    { x: 11, y: 1 },
    { x: 9, y: 1 },
    { x: 11, y: 1 },
    { x: 11, y: 1 },
    { x: 9, y: 1 },
    { x: 11, y: 1 },
    { x: 7, y: 7 }
);

riddles.push(
    { x: 7, y: 3, taken: false },
    { x: 9, y: 3, taken: false },
    { x: 11, y: 3, taken: false },
    { x: 9, y: 5, taken: false },
    { x: 7, y: 7, taken: false },
    { x: 9, y: 9, taken: false },
    { x: 11, y: 11, taken: false },
    { x: 7, y: 11, taken: false },
    { x: 9, y: 11, taken: false },
    { x: 7, y: 5, taken: false }
);

medics.push(
    null,
    { x: 1, y: 13, taken: false },
    null,
    { x: 3, y: 13, taken: false },
    null,
    null,
    { x: 1, y: 13, taken: false },
    null,
    null,
    { x: 11, y: 13, taken: false }
);

enemies.push(
    /* 21 */
    [
        { x: 5, y: 1, startX: 3, endX: 12, direction: 1, img: "images/enemy1.gif" },
        { x: 5, y: 13, startX: 3, endX: 12, direction: 1, img: "images/enemy2.gif" },
        { x: 9, y: 9, startX: 7, endX: 12, direction: -1, img: "images/enemy3.gif" },
        { x: 10, y: 13, startX: 7, endX: 12, direction: -1, img: "images/enemy1.gif" },
        { x: 7, y: 1, startX: 4, endX: 11, direction: 1, img: "images/enemy3.gif" }
    ],

    /* 22 */
    [
        { x: 4, y: 1, startX: 3, endX: 12, direction: 1, img: "images/enemy1.gif" },
        { x: 6, y: 13, startX: 3, endX: 12, direction: 1, img: "images/enemy2.gif" },
        { x: 9, y: 11, startX: 7, endX: 12, direction: -1, img: "images/enemy3.gif" },
        { x: 10, y: 13, startX: 7, endX: 12, direction: -1, img: "images/enemy2.gif" },
        { x: 7, y: 1, startX: 4, endX: 11, direction: 1, img: "images/enemy1.gif" }
    ],

    /* 23 */
    [
        { x: 5, y: 1, startX: 3, endX: 12, direction: 1, img: "images/enemy1.gif" },
        { x: 5, y: 13, startX: 3, endX: 12, direction: 1, img: "images/enemy2.gif" },
        { x: 9, y: 9, startX: 7, endX: 12, direction: -1, img: "images/enemy3.gif" },
        { x: 10, y: 13, startX: 7, endX: 12, direction: -1, img: "images/enemy2.gif" },
        { x: 7, y: 1, startX: 4, endX: 11, direction: 1, img: "images/enemy3.gif" },
        { x: 8, y: 13, startX: 5, endX: 12, direction: -1, img: "images/enemy1.gif" }
    ],

    /* 24 */
    [
        { x: 5, y: 1, startX: 3, endX: 12, direction: 1, img: "images/enemy1.gif" },
        { x: 5, y: 13, startX: 3, endX: 12, direction: 1, img: "images/enemy2.gif" },
        { x: 9, y: 9, startX: 7, endX: 12, direction: -1, img: "images/enemy3.gif" },
        { x: 10, y: 13, startX: 7, endX: 12, direction: -1, img: "images/enemy2.gif" },
        { x: 7, y: 1, startX: 4, endX: 11, direction: 1, img: "images/enemy3.gif" },
        { x: 8, y: 13, startX: 5, endX: 12, direction: -1, img: "images/enemy1.gif" }
    ],

    /* 25 */
    [
        { x: 5, y: 1, startX: 3, endX: 12, direction: 1, img: "images/enemy1.gif" },
        { x: 5, y: 13, startX: 3, endX: 12, direction: 1, img: "images/enemy2.gif" },
        { x: 9, y: 9, startX: 7, endX: 12, direction: -1, img: "images/enemy3.gif" },
        { x: 10, y: 13, startX: 7, endX: 12, direction: -1, img: "images/enemy2.gif" },
        { x: 7, y: 1, startX: 4, endX: 11, direction: 1, img: "images/enemy3.gif" },
        { x: 8, y: 13, startX: 5, endX: 12, direction: -1, img: "images/enemy1.gif" }
    ],

    /* 26 */
    [
        { x: 5, y: 1, startX: 3, endX: 12, direction: 1, img: "images/enemy1.gif" },
        { x: 5, y: 13, startX: 3, endX: 12, direction: 1, img: "images/enemy2.gif" },
        { x: 9, y: 9, startX: 7, endX: 12, direction: -1, img: "images/enemy3.gif" },
        { x: 10, y: 13, startX: 7, endX: 12, direction: -1, img: "images/enemy2.gif" },
        { x: 7, y: 1, startX: 4, endX: 11, direction: 1, img: "images/enemy3.gif" },
        { x: 8, y: 13, startX: 5, endX: 12, direction: -1, img: "images/enemy1.gif" }
    ],

    /* 27 */
    [
        { x: 5, y: 1, startX: 3, endX: 12, direction: 1, img: "images/enemy1.gif" },
        { x: 5, y: 13, startX: 3, endX: 12, direction: 1, img: "images/enemy2.gif" },
        { x: 9, y: 9, startX: 7, endX: 12, direction: -1, img: "images/enemy3.gif" },
        { x: 10, y: 13, startX: 7, endX: 12, direction: -1, img: "images/enemy2.gif" },
        { x: 7, y: 1, startX: 4, endX: 11, direction: 1, img: "images/enemy3.gif" },
        { x: 8, y: 13, startX: 5, endX: 12, direction: -1, img: "images/enemy1.gif" }
    ],

    /* 28 */
    [
        { x: 5, y: 1, startX: 3, endX: 12, direction: 1, img: "images/enemy1.gif" },
        { x: 5, y: 13, startX: 3, endX: 12, direction: 1, img: "images/enemy2.gif" },
        { x: 9, y: 9, startX: 7, endX: 12, direction: -1, img: "images/enemy3.gif" },
        { x: 10, y: 13, startX: 7, endX: 12, direction: -1, img: "images/enemy2.gif" },
        { x: 7, y: 1, startX: 4, endX: 11, direction: 1, img: "images/enemy3.gif" },
        { x: 8, y: 13, startX: 5, endX: 12, direction: -1, img: "images/enemy1.gif" }
    ],

    /* 29 */
    [
        { x: 5, y: 1, startX: 3, endX: 12, direction: 1, img: "images/enemy1.gif" },
        { x: 5, y: 13, startX: 3, endX: 12, direction: 1, img: "images/enemy2.gif" },
        { x: 9, y: 9, startX: 7, endX: 12, direction: -1, img: "images/enemy3.gif" },
        { x: 10, y: 13, startX: 7, endX: 12, direction: -1, img: "images/enemy2.gif" },
        { x: 7, y: 1, startX: 4, endX: 11, direction: 1, img: "images/enemy3.gif" },
        { x: 8, y: 13, startX: 5, endX: 12, direction: -1, img: "images/enemy1.gif" }
    ],

    /* 30 - BOSS */
    [
        { x: 7, y: 7, startX: 4, endX: 10, direction: 1, img: "images/boss.gif" },
        { x: 5, y: 1, startX: 3, endX: 12, direction: 1, img: "images/enemy1.gif" },
        { x: 5, y: 13, startX: 3, endX: 12, direction: 1, img: "images/enemy2.gif" },
        { x: 10, y: 13, startX: 7, endX: 12, direction: -1, img: "images/enemy3.gif" }
    ]
);
/* POPRAWKA PIĘTER 20–30 — WSZYSTKIE DO PRZEJŚCIA */



/* SPECJALNE PIĘTRO 30 — BOSS */

LEVELS[29] = [
    "111111111111111",
    "100000000000001",
    "101111111111101",
    "100000000000101",
    "101111111110101",
    "100000000010101",
    "101111111010101",
    "101000000010101",
    "101011111110101",
    "101000000000101",
    "101111111110101",
    "100000000010101",
    "101111111010101",
    "100000000000001",
    "111111111111111"
];

exits[29] = { x: 13, y: 13 };

keys[29] = { x: 11, y: 1 };

riddles[29] = { x: 7, y: 7, taken: false };

medics[29] = { x: 1, y: 13, taken: false };

enemies[29] = [
    { x: 7, y: 7, startX: 4, endX: 10, direction: 1, img: "images/boss.gif" },
    { x: 5, y: 1, startX: 3, endX: 11, direction: 1, img: "images/enemy1.gif" },
    { x: 5, y: 13, startX: 3, endX: 11, direction: 1, img: "images/enemy2.gif" },
    { x: 10, y: 13, startX: 7, endX: 12, direction: -1, img: "images/enemy3.gif" }
];