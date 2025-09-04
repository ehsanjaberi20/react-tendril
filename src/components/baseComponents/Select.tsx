import React from "react";
import { Provider, type ProviderType } from "./Provider";

interface SelectOption {
    value: string;
    label: string;
}

interface SelectProps extends ProviderType {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    options: SelectOption[];
}

export const Select: React.FC<SelectProps> = (props) => {
    const { value, onChange, options } = props;
    return (
        <Provider {...props}>
            {(childrenProps) => (
                <select
                    {...childrenProps}
                    value={value}
                    onChange={onChange}
                    required
                >
                    <option value="" disabled hidden/>
                    {options.map(opt => (
                        <option key={opt.value} value={opt.value}>
                            {opt.label}
                        </option>
                    ))}
                </select>
            )}
        </Provider>
    );
};