import React from "react";
import { Provider, type ProviderType } from "./Provider";

interface InputProps extends ProviderType {
    value: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input: React.FC<InputProps> = (props: InputProps) => {
    const { value, onChange, label, size, isInvalid } = props;
    return (
        <Provider size={size} label={label} isInvalid={isInvalid}>
            {(childrenProps) => {
                return (
                    <input
                        type="text"
                        {...childrenProps}
                        placeholder=""
                        value={value}
                        onChange={onChange}
                    />
                )
            }}
        </Provider>
    )
};
