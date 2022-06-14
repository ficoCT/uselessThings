import React from 'react';

export function Textarea({ label, name, placeholder, type, value, errorMessage, onChange }) {
    function handleChange(event) {
        if (typeof onChange === 'function') {
            onChange(event);
        }
    }

    return (
        <label className="contact__container__text__form__labels__single">
            {label}
            <textarea
                name={name}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
                className="contact__container__text__form__labels__single__input"
            />
            {errorMessage && <span className="contact__container__text__form__labels__single__error-message">{errorMessage}</span>}
        </label>
    );
}
