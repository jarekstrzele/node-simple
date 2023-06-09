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
	const course = courses.find(c => c.id === parseInt(req.params.id) ) ;
	if (!course) return  res.status(404).send("The course with the given ID was not found") ;
	
	res.send(course) ;
}) ;

app.post('/api/courses', (req, res) => {
	
	// const schema = Joi.object( {
	// 	name: Joi.string().min(3).required()
	// }) ;
	
	// const result = schema.validate(req.body)
	// //console.log(result) ;
	const { error } = validateCourse(req.body) ;
	if (error){
		//res.status(400).send(result.error) ;
		res.status(400).send(error.details[0].message) ;
		return ;
	}
	const course = {
		id: courses.length + 1,
		name: req.body.name
	};

	courses.push(course) ;
	res.send(course) ;


}) ;

// update course:
app.put('/api/courses/:id', (req, res) => {
	//look up the courses
	// if not existing, return 404
	const course = courses.find(c => c.id === parseInt(req.params.id)) ;

	// add return to stop exacuting that function 
	if (!course) return res.status(404).send('the course with the given id was not found') ;

	// validate
	//if invalid, return 400
	// const schema = Joi.object( {
	// 	name: Joi.string().min(3).required()
	// }) ;
	// const result = schema.validate(req.body)
	// console.log(result) ;
	//instead of this code above :
	//const result = validateCourse(req.body)
	const { error } = validateCourse(req.body)
	if (error){
		//res.status(400).send(result.error) ;
		res.status(400).send(error.details[0].message) ;
		return ;
	}

	//update course
	//return the updated course
	course.name = req.body.name ;
	res.send(course) ;
}) ;

app.delete('/api/courses/:id', (req, res) => {

	// look up the course
	// not existing, return 404
	const course = courses.find(c => c.id === parseInt(req.params.id) ) ;
	if (!course) return res.status(404).send("The course with the given ID was not found") ;
	

	// delete
	const index = courses.indexOf(course) ;
	courses.splice(index, 1) ;

	// return the same course
	res.send(course) ;

});

function validateCourse(course){
	const schema = Joi.object( {
		name: Joi.string().min(3).required()
	}) ;
	
	return schema.validate(course) ;
	
}

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on the port ${port}...`)) ;
