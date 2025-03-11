
const ContactInfoCard = ({label}) => {

 
  return (
    <div className=''>

    <label htmlFor={label} className='font-semibold text-gray-700'>{label}</label><br />

      <input
        type="text"
        id={label}
        name={label}
        required
        className="border p-2 rounded-md w-full mt-2"
      />
      
    </div>
  )
}

export default ContactInfoCard
