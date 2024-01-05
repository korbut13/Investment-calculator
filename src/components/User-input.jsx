import Input from "./Input";

export default function UserInput({label}){
  return (
    <section id="user-input">
        <div className="input-group">
          <Input label="Initial investment"/>
          <Input label="Annual investment"/>
          <Input label="Initial investment"/>
          <Input label="Annual investment"/>
        </div>

    </section>
  )
}
