import Joi from "joi";

export const JoinRoomSchema =Joi.object({
    jr_id : Joi.number()
            .integer(),

    cr_id : Joi.number()
            .integer()
            .required(),

    u_id  : Joi.number()
            .integer()
            .required(),

    jr_created_at : Joi.date()
                .required(),

    jr_updated_at : Joi.date()
                .required()
})