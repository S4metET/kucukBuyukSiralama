const kisiler = [
    {
        ad: "Furkan",
        yas: 25
    },
    {
        ad: "Onur Han",
        yas: 25
    },
    {
        ad: "Samet",
        yas: 21
    },
    {
        ad: "Ilgın",
        yas: 17
    },
    {
        ad: "Emre",
        yas: 25
    },
];
function kisiBul(kisiler){
    return kisiler.filter(kisi => kisi.yas >= 18);
}
const yasiBuyuk = kisiBul(kisiler);
console.log(yasiBuyuk);