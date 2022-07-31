const {Flights} = require("../models/Flight");
const {v4: uuid} = require("uuid");


// get all flights
exports.getFlights = async(req, res) => {
    try{
        const flights = await Flights;
        res.status(200).json({
            message: "All flights",
            flights: Flights
        });

    } catch (err){
        res.status(404).json({ message4: err});

    }
}


// get a single flight
exports.getFlight = async (req,res)=>{
    try{
        let id = req.params.id;
        const flight = Flights.find((flight)=> flight.id === id);
        res.status(200).json({
            message: "Flight found",
            flight,

        });

    }catch(err){
        res.status(404).json({message: err.message});

    }
}

// create new flight
exports.createFlight = async (req,res) =>{
    try{
        let Flights = [];
        const {title, time, price, date} = await req.body;
        const newFlight = {
            id: uuid(),
            title,
            price,
            date,
            time,
        };
       
        Flights.push(newFlight);
        
        res.status(200).json({
            message: "Flight created",
            newFlight,
        });
    
    }catch(err) {
        res.status(404).json({message: err.message});

    }

}

// update /edit flight
exports.updateFlight = async (req,res)=>{
    try{
        let id = req.params.id;
        const flight = Flights.find((flight) => flight.id === id);
        const { title,time, price, data} = await req.body;
        flight.title = title;
        flight.time = time;
        flight.price = price;
        flight.data = data;
        res.status(200).json({
            message: "Flight updated",
            flight,
        });

    }catch(err){
        res.status(404).json({message: err.message});

    }
}

// delete flight
