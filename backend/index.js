let express = require('express');
let bodyParser = require('body-parser');
let router = express.Router();
let cors = require('cors');
let app = express();
app.use(cors());

// all of our routes will be prefixed with /api
app.use('/api', bodyParser.json(), router);   //[use json]
app.use('/api', bodyParser.urlencoded({ extended: false }), router);

let Customers = [{'ID':0,'Name':'Selena','SurName':'Gomez','Tel':'0623654786','Time': '16:00-17:00','Price': 30},
                {'ID':1,'Name':'Lalisa','SurName':'ManoBal','Tel':'0876543210','Time': '18:00-19:00','Price': 30}
];

//router.route('/Customers').get((req, res) =>  res.json(Customers) );
router.route('/Customers')
   // get all Customers
   .get( (req, res) =>  res.json(Customers) ) 

   // insert a new Customer
   .post( (req, res)=> {
       var Customer = {};
       Customer.ID =  Customers[Customers.length-1].ID+1;
       Customer.Name = req.body.Name
       Customer.SurName = req.body.SurName
       Customer.Tel = req.body.Tel
       Customer.Time = req.body.Time
       Customer.Price = req.body.Price
       Customers.push(Customer);
       res.json( {message: 'Customer created!'} )
   })

   router.route('/Customers/:Customer_ID')
   .get ( (req,res) => {
        let ID = req.params.Customer_ID
        let index = Customers.findIndex( Customer => (Customer.ID === +ID) )
        res.json(Customers[index])                   // get a Customer
    })  

    .put ( (req,res) => {                               // Update a Customer
        let ID = req.params.Customer_ID
        let index = Customers.findIndex( Customer => (Customer.ID === +ID) )
        Customers[index].Name = req.body.Name;   
        Customers[index].SurName = req.body.SurName;
        Customers[index].Tel = req.body.Tel;   
        Customers[index].Time = req.body.Time;
        Customers[index].Price = req.body.Price; 
        
        res.json({ message: 'Customer updated!' + req.params.Customer_ID});
    })
 

    .delete ( (req,res) => {                   // Delete a Customer
        // delete     Customers[req.params.Customer_ID]
        let ID = req.params.Customer_ID
        let index = Customers.findIndex( Customer => Customer.ID === +ID  )
        Customers.splice(index,1) 
        res.json({ message: 'Customer deleted: ' + req.params.Customer_ID});
    })
 
 

app.use("*", (req,res) => res.status(404).send('404 Not found') );
app.listen( process.env.PORT || 80 ,  () => console.log("Server is running") );