const express = require("express");
const faker = require("faker");
const port = 8000;
const app = express();

class User {
  constructor(){
    this._id = faker.datatype.uuid();
    this.firstName = faker.name.firstName();
    this.lastName = faker.name.lastName();
    this.phoneNumber = faker.phone.phoneNumber();
    this.email = faker.internet.email();
    this.password = faker.internet.password();
  }
}
console.log(new User());

class Company {
  constructor(){
    this._id = faker.datatype.uuid();
    this.name = faker.company.companyName();
    this.street = faker.address.streetName();
    this.city = faker.address.city();
    this.state = faker.address.state();
    this.zipCode = faker.address.zipCode();
    this.country = faker.address.country();
  }
}
console.log(new Company());

app.get('/api/users/new', (req,res) =>{
  var user = new User();
  res.json({
    results: user
  });
  
})

app.get('/api/companies/new', (req,res) =>{
  var company = new Company();
  res.json({
    results: company
  });
  
})

app.get('/api/user/company', (req, res) =>{
  var user = new User();
  var company = new Company();
  res.json({
    results: {
      user: user,
      company: company,
    }
  })
})

const server = app.listen(port, () => console.log(`Listening on port ${port}`));

/*
http://localhost:8000/api/users/new
{
  "results": {
    "_id": "7e2fefc0-d0a3-4f68-bda4-ab47321f8ee8",
    "firstName": "Neil",
    "lastName": "Brown",
    "phoneNumber": "462-691-3613 x584",
    "email": "Heaven.Ankunding67@yahoo.com",
    "password": "Bv7gHBJxbrBdkxg"
  }
}

http://localhost:8000/api/companies/new
{
  "results": {
    "_id": "969418cc-dc0f-4518-9be7-18df385eeeda",
    "name": "Nolan, Schneider and Stamm",
    "street": "Lueilwitz Circle",
    "city": "Lake Brady",
    "state": "Utah",
    "zipCode": "13585-4051",
    "country": "Puerto Rico"
  }
}

http://localhost:8000/api/user/company
{
  "results": {
    "user": {
      "_id": "81fdbd0d-96be-44ae-8699-86db7886d99f",
      "firstName": "Chadrick",
      "lastName": "Grant",
      "phoneNumber": "1-455-972-9186 x673",
      "email": "Cortney8@hotmail.com",
      "password": "g3OfZrUFIQVFN84"
    },
    "company": {
      "_id": "28c53a54-1d77-46e7-8785-5d7b3e83b36a",
      "name": "Dare Inc",
      "street": "West Garden",
      "city": "West Breannaview",
      "state": "Arizona",
      "zipCode": "73053",
      "country": "United Kingdom"
    }
  }
}
*/