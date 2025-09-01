import React from "react";
import { css } from "@emotion/react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    size?: "sm" | "md" | "lg";
    value: string,
    onChange: (event: HTMLElement) =>{}

}

const sizeStyles = {
    sm: css`
        padding: 8px 6px 6px 6px;
        font-size: 14px;
    `,
    md: css`
        padding: 10px 8px 8px 8px;
        font-size: 16px;
    `,
    lg: css`
        padding: 20px 12px 12px 12px;
        font-size: 18px;
    `,
};

const labelSizeStyles = {
    sm: css`
        font-size: 14px;
        top: 10px;
        input:focus + &,
        input:not(:placeholder-shown) + & {
            font-size: 10px;
            top: -6px;
        }
    `,
    md: css`
        font-size: 16px;
        top: 10px;
        input:focus + &,
        input:not(:placeholder-shown) + & {
            font-size: 12px;
            top: -8px;
        }
    `,
    lg: css`
        font-size: 18px;
        top: 22px;
        input:focus + &,
        input:not(:placeholder-shown) + & {
            font-size: 14px;
            top: -10px;
        }
    `,
};

const containerStyle = css`
    position: relative;
    margin: 24px 0;
`;

const labelBaseStyle = css`
    position: absolute;
    right: 8px;
    color: #888;
    background: white;
    padding: 0 4px;
    pointer-events: none;
    transition: all 0.2s;
    input:focus + &,
    input:not(:placeholder-shown) + & {
        color: #0077ff;
    }
`;

export const Input: React.FC<InputProps> = ({ label, size = "md", ...props }) => (
    <div css={containerStyle}>
        <input
            css={[
                sizeStyles[size],
                css`
                    width: 100%;
                    border: 1px solid #ccc;
                    border-radius: 4px;
                    outline: none;
                    background: none;
                    transition: border-color 0.2s;
                    &:focus {
                        border-color: #0077ff;
                    }
                `
            ]}
            placeholder=" "
            {...props}
        />
        <label css={[labelBaseStyle, labelSizeStyles[size]]}>{label}</label>
    </div>
);
