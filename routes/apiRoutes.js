const Workout = require("../models/workout")

module.exports = app => { 
    app.get("/api/workouts", (req, res)=>{  
        Workout.find()
        .then(result =>{  
            res.json(result)
        })
        .catch(err => { 
            res.json(err)
        })
    });

    app.post("/api/workouts", (req, res)=>{    
        Workout.create({})
        .then(result => res.json(result))
        .catch(err => { 
            res.json(err)
        })
    });

    app.get("/api/workouts/range", (req, res)=>{  
        Workout.find()
        .then(result =>{  
            res.json(result)
        })
        .catch(err => { 
            res.json(err)
        })
    });
    
    app.post("/api/workouts/range", (req, res)=>{    
        Workout.create({})
        .then(result => res.json(result))
        .catch(err => { 
            res.json(err)
        })
    });

    app.put("/api/workouts/:id",({body, params},res)=>{   
        Workout.findByIdAndUpdate(  
         params.id,
         {$push:{exercises:body} },
         {new: true,runValidators:true }
        )
        .then(result => res.json(result))
        .catch(err => { 
            res.json(err)
        })
    });        
}
