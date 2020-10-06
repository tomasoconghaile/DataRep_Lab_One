class BMI {

constructor(height, weight){
    this.height = height;
    this.weight = weight;
}
    //Constructor for bmi calculation
    calculateBMI(){
    let bmi = this.weight/(this.height**2);    
    return bmi;
    
    }
 }

// setting values for bmi height 2 and wight 90
let myBMI = new BMI(2,90);
//calling the calaculate constructor
console.log(myBMI.calculateBMI());