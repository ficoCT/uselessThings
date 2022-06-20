import React from 'react';

export function Checkbox({ label, name, value, onChange }) {
    function handleChange(event) {
        if (typeof onChange === 'function') {
            onChange(event);
        }
    }

    return (
        <label className="">
            <input
                name={name}
                type="checkbox"
                checked={value}
                onChange={handleChange}
            />
            {label}
        </label>
    );
}
