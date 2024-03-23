var cars= ['Mehran', 'Alto', 'Fx', 'Audi', 'Daala', 'Civic']
var user= prompt("Enter any car what you want?")
var match= false
var firstAlpha

for (var i=0; i<cars.length; i++){
    if (user== cars[i]){
        match= true
        document.write(`${user} found`)
        break
    }
}
if (!match){
    document.write(`${user} not found`)
}