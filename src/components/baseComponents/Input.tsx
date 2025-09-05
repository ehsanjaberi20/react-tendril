import React from "react";
import { Provider, type ProviderType } from "./Provider";

interface InputProps extends ProviderType {
    value: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    onClick?: () => void
}

export const Input: React.FC<InputProps> = (props: InputProps) => {
    const { value, onChange, onClick = () => { } } = props;
    return (
        <Provider {...props}>
            {(childrenProps) => {
                return (
                    <input
                        type="text"
                        {...childrenProps}
                        placeholder=""
                        value={value}
                        onChange={onChange}
                        onClick={onClick}
                    />
                )
            }}
        </Provider>
    )
};