import Joi from "joi";

export const ChatRoomSchema = Joi.object({
    cr_id : Joi.number()
            .integer(),

    cr_description : Joi.string(),

    cr_created_at : Joi.date()
                .required(),
    
    cr_updated_at : Joi.date()
                .required()
});