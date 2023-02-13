import * as yup from "yup";

export const atrubutesSchema = yup.array().of(
    yup.object({
        key: yup.string().required(),
        nftValue: yup.string().required()
    })
)