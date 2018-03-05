let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];
for(let student in students){
	console.log('Name:',students[student].name+',', 'Cohort:', students[student].cohort);
}
//This prints Name: student name, cohort: month 

let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };
 
for(let i in users){
  console.log(i.toUpperCase());
  for(let x = 0; x < users[i].length; x++){
    console.log(x+1 + ' - ', users[i][x].first_name.toUpperCase()+',', users[i][x].last_name.toUpperCase(), '-', users[i][x].first_name.length + users[i][x].last_name.length);
  }
}
//This prints number, first name, last name, and length of name for both employees and managers 