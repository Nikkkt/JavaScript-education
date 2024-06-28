class Fraction {
    constructor(numerator, denominator) {
        this.numerator = numerator;
        this.denominator = denominator;
        this.reduce();
    }

    reduce() {
        function gcd(a, b) {
            while (b) { let temp = b; b = a % b; a = temp; }
            return a;
        }
        let divisor = gcd(this.numerator, this.denominator);
        this.numerator /= divisor;
        this.denominator /= divisor;
    }

    static divide(fraction1, fraction2) { return new Fraction(fraction1.numerator * fraction2.denominator, fraction1.denominator * fraction2.numerator); }
    toString() { return `${this.numerator}/${this.denominator}`; }
}

let fraction1 = new Fraction(3, 5);
let fraction2 = new Fraction(13, 15);
let fraction3 = new Fraction(100, 1900);

let result = Fraction.divide(fraction1, fraction2);

console.log(result.toString());
console.log(fraction3.toString());