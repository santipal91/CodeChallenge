const multaBiblio = (d1, m1, y1, d2, m2, y2) => {
    
    switch (true) {
        case (y1 > y2) :
            multa = 10000    
        break;

        case (d1 > d2 && m1 > m2) :
            multa = 15*(d1 - d2) + 500*(m1 - m2)
        break;

        case (d1 > d2 && m1 <= m2) :
            multa = 15*(d1 - d2)
        break;

        case (d1 <= d2 && m1 > m2) :
            multa = 500*(m1 - m2)
        break;

        default:
            multa = 0
        break;
    }

    return multa
}

console.log(multaBiblio(7, 6, 2015, 6, 6, 2015))