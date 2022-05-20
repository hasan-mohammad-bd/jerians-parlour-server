const express = require('express')
const app = express();
const cors = require('cors');
require('dotenv').config()
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion } = require('mongodb');

//middleware
app.use(cors());
app.use(express.json());




const uri = "mongodb+srv://process.env.DB_USER:process.env.DB_PASS@cluster0.zpcyn.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

const run = async()=>{



    try{
        await client.connect();
        const serviceCollection = client.db('jeriensParlour').collection('service');

        

    }
    finally{

    }

}
run().catch(console.dir);








app.get('/', (req, res)=>{
    res.send('running the jeriens parlour server');
})

app.listen(port, ()=>{
    console.log("crud server is running ");
})