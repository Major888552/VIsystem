const mysql = require('mysql');
const connection = 
mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
});
connection.connect((error) => {
    if(error){
        console.log('Error connecting to mysql database');
        return;
    }
    console.log('connection established succesifully');
});
connection.end((error)=>{

});
