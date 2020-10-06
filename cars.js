class Vehicle 
{

        constructor(make, model, year){
             this.make = make;
            this.model = model;
            this.year = year;
    }

    Information(){
        //creating the display for the run
        console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
           }
    }
        //Linking the two classes to pull data from Vehicel                                          
    class Cars extends Vehicle 
    {

        constructor(make, model, year, doors)
    {
        super(make, model, year); // Super pulls info from Vehicle class
        this.doors = doors;
    }

        Information()
    {
        super.Information();
        console.log(`Doors: ${this.doors}`);
    }
}
        // entering values
        let myCar = new Cars('VW', 'Passat', 2020, 5);
        myCar.Information();

//let myVehicle = new Vehicle('VW','Golf',2000);