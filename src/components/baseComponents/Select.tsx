import React, { Fragment, useEffect, useRef, useState } from "react";
import { Provider, type ProviderType } from "./Provider";
import styled from "@emotion/styled";
import { containerStyle, controlBaseStyles, controlSizeStyles, labelBaseStyle, labelSizeStyles } from "./styles";

interface SelectOption {
    value: string;
    label: string;
}

interface SelectProps extends ProviderType {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    options: SelectOption[];
}
// style
const Dropdown = styled.ul<{ isOpen: boolean }>`
    display: ${(p) => (p.isOpen ? "block" : "none")};
    position: absolute;
    width: 100%;
    background: #fff;
    border: 1px solid #ccc;
    border-top: none;
    max-height: 200px;
    overflow-y: auto;
    z-index: 10;
    margin: 0;
    padding: 0;
    list-style: none;
`;
const Option = styled.li<{ selected: boolean }>`
    padding: 8px 12px;
    background: ${(p) => (p.selected ? "#e6f3ff" : "#fff")};
    cursor: pointer;
    &:hover {
        background: #f0f8ff;
    }
`;

export const Select: React.FC<SelectProps> = (props) => {
    const { value, onChange, options, isInvalid = false, size = 'sm' } = props;
    const ref = useRef<HTMLDivElement>(null);

    const [search, setSearch] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleChange = (e) => {

    }
    const selectedOption = options.find((opt) => opt.value === value);

    const filteredOptions = options.filter((opt) =>
        opt.label.toLowerCase().includes(search.toLowerCase())
    );
    const childrenProps = {
        css: [controlBaseStyles(isInvalid), controlSizeStyles[size]]
    }
    return (
        <div css={containerStyle} ref={ref}>
            <input placeholder=""
                {...childrenProps}
                type="text"
                value={value}
                onClick={() => setIsOpen(x => !x)}
                onChange={handleChange} />
            <label css={[labelBaseStyle(isInvalid), labelSizeStyles[size]]}>{props.label}</label>
            <Dropdown isOpen={isOpen}>
                {filteredOptions.length === 0 && (
                    <Option selected={false} style={{ color: "#aaa", cursor: "default" }}>
                        گزینه‌ای یافت نشد
                    </Option>
                )}
                {filteredOptions.map((opt) => (
                    <Option
                        key={opt.value}
                        selected={opt.value === value}
                        onClick={() => {
                            onChange?.(opt.value);
                            setIsOpen(false);
                        }}
                    >
                        {opt.label}
                    </Option>
                ))}
            </Dropdown>

        </div>
    );
};