const InputField = ({ label, placeholder, required, type, styles }) => (
  <div className='input-field' style={styles && styles.cont}>
    <label style={styles && styles.label}>{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      required={required}
      autoCorrect='on'
    />
  </div>
);

export default InputField;
