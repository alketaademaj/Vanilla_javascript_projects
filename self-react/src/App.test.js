import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

//The code below is for the server. It was just random bits of coded for testing. Has no connection to this site. 
//app.get('/smartAss', function(req, res){ //1st parametes request, second parameter is response 
  //Candidate.find({}, function(err, names){
    //var anything = []; 
    //names.forEach(element => {
      //anything.push(element.name);
    //});
    //res.send(anything); //sending it to frontend / what the user sees 
  //})
//}) 

//app.get('/stayUp', function(req,res) {
  //Question.find({
    //$or: [
      //{area: req.body.name}, //whenever we are accessing whatever was sent from frontend 
      //{area: "Undefined"}
    //]
  //}, function(err, Questions){
    //var allQuestions = [];
    //Questions.forEach(searchOnequestion => {
      //allQuestions.push(searchOnequestion.question);
    //})
    //res.send(allQuestions);
  //})
//})
