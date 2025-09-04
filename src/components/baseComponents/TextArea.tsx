import React from "react";
import { Provider, type ProviderType } from "./Provider";

interface TextAreaProps extends ProviderType {
    value: string,
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
    rows: number
}

export const TextArea: React.FC<TextAreaProps> = (props) => {
    const { value, onChange, rows } = props;
    return (
        <Provider {...props}>
            {(childrenProps) => {
                return (
                    <textarea {...childrenProps}
                        placeholder=""
                        rows={rows}
                        value={value}
                        onChange={onChange}
                    >

                    </textarea>
                )
            }}
        </Provider>
    )
};