`use struct `
 
//constructer 
function Employee (employeeID,fullName,level,imageURL,salary,department)
 {
    this.employeeID = employeeID;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imageURL = imageURL;
    this.salary = salary;
     allEmployees.push(this);
     
 }



 //function


function getRndInteger(min, max)
  {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

    
  Employee.prototype.newsalary = function() 
  {
    let Tax;
    
  if (this.level==="Senior") 
  {   
      this.salary=getRndInteger(1500,2000);
      this.Tax=this.salary*(0.075);
      this.salary=salay - Tax;
  }

  if (this.level==="Mid-Senior") 
  {
      this.salary=getRndInteger(1000,1500);
      this.Tax=this.salary*(0.075);
      this.salary=salay - Tax;
  }

  if (this.level==="Junior") 
  {
      this.salary=getRndInteger(500,1000);
      this.Tax=this.salary*(0.075);
      this.salary=salay - Tax;
  }
//methode
  Employee.prototype.render = function ()
   {
    document.write(` the employee name is: ${this.fullName} and the salary is: ${this.salary}`) ;
   }
}
   



let Employee1 = new Employee ("1000","GhaziSamer","Administration","Senior");
let Employee2 = new Employee ("1001","LanaAli","Finance","Senior");
let Employee3 = new Employee ("1002","TamaraAyoub","Marketing","Senior");
let Employee4 = new Employee ("1003","SafiWalid","Administration","Mid-Senior");
let Employee5 = new Employee ("1004","OmarZaid","Development","Senior");
let Employee6 = new Employee ("1005","RanaSaleh","Development","Junior");
let Employee7 = new Employee ("1006","HadiAhmad","Finance","Mid-Senior");


//function calling

Employee1.newsalary(); 
Employee1.render();

Employee2.newsalary();
Employee2.render();

Employee3.newsalary();
Employee3.render();

Employee4.newsalary();
Employee4.render();

Employee5.newsalary();
Employee5.render();

Employee6.newsalary();
Employee6.render();

Employee7.newsalary();
Employee7.render();