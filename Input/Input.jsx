import css from './Input.module.css'

export default function Input({input, textarea = false, alterarInput, tamanho = 'normal', label, type = "text", placeholder, required = false, maxLength, minLength, soNumeros = false
}) {

    function handleChange(e) {
        let valor = e.target.value

        if (soNumeros) {
            valor = valor.replace(/\D/g, '')
        }

        alterarInput(valor)
    }

    return (
        <div className={css.inputGroup}>
            <label className={css.label}>{label}</label>

            {textarea ? (
                <textarea
                    className={css.Big}
                    onChange={handleChange}
                    value={input}
                    required={required}
                    placeholder={placeholder}
                    maxLength={maxLength}
                />
            ) : (
                <input
                    className={css[tamanho]}
                    type={type}
                    onChange={handleChange}
                    value={input}
                    required={required}
                    placeholder={placeholder}
                    maxLength={maxLength}
                    minLength={minLength}
                />
            )}
        </div>
    )
}