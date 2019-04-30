const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const fromNumber = process.env.TWILIO_FROM_NUMBER;

const client = require('twilio')(accountSid, authToken);
const moment = require('moment');

module.exports = {
  sendSMS : (data) => {
    try {
      let carData = [];
      const users = data.map(user => {
        const firstName = user.firstName;
        const lastName = user.lastName;
        const toNumber = user.phoneNumber;
        let msg = `Dear ${firstName} ${lastName}, your`;

        const cars = user.cars.map((car, index) => {
          const make = car.make;
          const model = car.model;
          const year = car.year;
          msg += ` - ${year} ${make} ${model}'s`
          const docs = car.docs.map((doc, index) => {
              const type = doc.type;
              const expDate = moment(doc.expirationDate).format('ll');
              carData.push({make, model, year, type, expDate});
              msg += ` ${index+1}) ${type} is expiring on ${expDate}`              
          })
        })
        //console.log(msg);
        client.messages
          .create({
            body: msg,
            from: `+1${fromNumber}`,
            to: `+1${toNumber}`
          })
          .then(message => console.log(`Message sent. MessageId = ${message.sid}`));
      });
      return 0;
    } catch (err) {
      console.error('SMS', err);
    }
  }
};