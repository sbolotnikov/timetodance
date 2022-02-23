const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TemplateSchema = new Schema({

      appointments:[
        {
            reservationHour: {
              type: Number,
              required: true,
            },
            reservationMin: {
                type: Number,
                required: true,
              },
            price: {
              type: Number,
              required: true,
            },
            status: {
              type: String,
              required: true,
            },
            perPerson: {
              type: Boolean,
              required: true,
            },
          }],

      name: {
        type: String
      },
      color: {
        type: String
      },
    }, 
);

// const Template = mongoose.model('Template', TemplateSchema);
const Template = mongoose.models.Template ||mongoose.model('Template', TemplateSchema);
module.exports = Template;
