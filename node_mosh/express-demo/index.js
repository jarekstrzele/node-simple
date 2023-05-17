const Joi = require("joi") ; // write `Joi` because require returns a class

const express = require('express') ;

// by convention use the name 'app'
const app = express() ; // express return an object of type Express
app.use(express.json()) ; 

const courses = [
	{id: 1, name: 'course1'} , 
	{id: 2, name: 'course2'} ,
	{id: 3, name: 'course3'} ,  
];

app.get('/', (req, res) => {
	res.send('Hello World!!!!');
	  
}) ;

app.get('/api/courses', (req,res) => {
	res.send(courses) ;
}) ;

app.get('/api/courses/:id', (req, res) => {
	const course = courses.find(c => c.id === parseInt(req.params.id) )
	if (!course) {
		res.status(404).send("The course with the given ID was not found")
	} 
	res.send(course) ;
}) ;

app.post('/api/courses', (req, res) => {
	
	const schema = Joi.object( {
		name: Joi.string().min(3).required()
	}) ;
	
	const result = schema.validate(req.body)
	console.log(result) ;

	if (result.error){
		//res.status(400).send(result.error) ;
		res.status(400).send(result.error.details[0].message) ;
		return ;
	}

// update course:
app.put('/api/courses/:id', (req, res) => {
	//look up the courses
	// if not existing, return 404
	const course = courses.find(c => c.id === parseInt(req.params.id)) ;
	if (!course) res.status(404).send('the course with the given id was not found') ;

	// validate
	//if invalid, return 400
	const schema = Joi.object( {
		name: Joi.string().min(3).required()
	}) ;
	
	const result = schema.validate(req.body)
	console.log(result) ;

	if (result.error){
		//res.status(400).send(result.error) ;
		res.status(400).send(result.error.details[0].message) ;
		return ;
	}

	//update course
	//return the updated course
	course.name = req.body.name ;
	res.send(course) ;
})
	const course = {
		id: courses.length + 1,
		name: req.body.name //we assume that in the body is an object with 'name' property 
	}
	courses.push(course) ;
	res.send(course) ;
	
}) ;

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on the port ${port}...`)) ;
