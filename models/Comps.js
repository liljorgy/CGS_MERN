//models/Records.js

const mongoose = require('mongoose');

const CompsSchema = new mongoose.Schema({
    comp_id: {
        type: String,
        required: true
    },
    db_entry_date: {
        type: Date
    },
    report_history: {
        type: Array,
        sale_date: { type: Date},
        sale_price: {type: Number},
        unit_price: {type: Number},
        unit_unit: {type: String},
        size_numeric: {type: Number},
        size_unit: {type: String},
        condition: {type: String},
        report_attributed_to: {type: String},
        report_written_date: {type: Date},
        structure_type: {type: String},
        report_type: {type: String},
        required: true
    },
    location: {
        type: Object
    }
});

module.exports = Comps = mongoose.model('comps', CompsSchema);
