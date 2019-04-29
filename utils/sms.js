const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const fromNumber = process.env.TWILIO_FROM_NUMBER;

const client = require('twilio')(accountSid, authToken);


module.exports = {
  sendSMS = async(data) => {
    try {
      const firstName = data.firstName;
      const lastName = data.lastName;
      const toNumber = data.phoneNumber;

      const cars = data.map(car => {

        const make = car.make;
        const model = car.model;
        const year = car.year;

      })
      const type = data.cars.docs.type;
      const expData = data.cars.docs.type;


    } catch (err) {
      console.error('SMS', err);
    }
  }
};