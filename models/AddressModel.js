import mongoose from 'mongoose';

const addressSchema = mongoose.Schema(
    {
        streetLine: {
            type: String,
            default: '',
        },
        city: {
            type: String,
            default: '',
        },
        district: {
            type: String,
            default: '',
        },
        ward: {
            type: String,
            default: '',
        },
        country: {
            type: String,
            default: 'Việt Nam',
        },
        // phoneNumber: {
        //     type: Number,
        //     default: null,
        // },
        // status: {
        //     type: Boolean,
        //     default: false,
        // },
        userId: {
            type: mongoose.Schema.ObjectId,
            ref: 'user',
        },
    },
    {
        timestamps: true,
    },
);

const AddressModel = mongoose.model('address', addressSchema);
export default AddressModel;
