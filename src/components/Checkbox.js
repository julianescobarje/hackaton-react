import './Checkbox.css'

function Checkbox ({ id, label, checked, name, onChange }) {
  return (
    <div className="checkbox-wrapper">
      <input id={id} type="checkbox" checked={checked} name={name} onChange={onChange} />
      <label htmlFor={id}>{label}</label>
    </div>
  )
}

export default Checkbox