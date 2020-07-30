import React from 'react';
import { InputField, TextArea, Label } from './styles';

function FormField({ label, type, name, value, onChange, textarea}) {
    return (
        <>
            <Label>
                {label}:
                {textarea ? 
                    <TextArea 
                        type={type}
                        name={name}
                        value={value}
                        onChange={onChange}
                    /> 
                    : 
                    <InputField 
                        type={type}
                        name={name}
                        value={value}
                        onChange={onChange}
                    />
                }
            </Label>
        </>
    );
}

export default FormField;