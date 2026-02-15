import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { userFormConfig } from "../config/userFormConfig";

const generateSchema = () => {
    const shape = {};

    userFormConfig.forEach((field) => {
        let validator = yup.string();

        if (field.required) {
            validator = validator.required(`${field.label} is required`);
        }

        if (field.name === "email") {
            validator = validator
                .email("Invalid email format")
                .matches(
                    /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
                    "Enter a valid domain (e.g., gmail.com, edu.in, company.co.uk)"
                );
        }


        if (field.name === "phone") {
            validator = validator
                .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits");
        }

        shape[field.name] = validator;
    });

    return yup.object().shape(shape);
};


const schema = generateSchema();

const UserForm = ({ onSubmit, defaultValues }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues,
    });

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {userFormConfig.map((field) => (
                <div className="form-group" key={field.name}>
                    <label>{field.label}</label>
                    <input type={field.type} {...register(field.name)} />
                    {errors[field.name] && (
                        <p className="error">{errors[field.name].message}</p>
                    )}
                </div>
            ))}
            <button className="primary-btn" type="submit">
                {defaultValues?.id ? "Update User" : "Add User"}
            </button>
        </form>

    );
};

export default UserForm;
