import { useState } from "react";

type RegisterForm = {
  email: string;
  password: string;
};

const Register = () => {
  const [form, setForm] = useState<RegisterForm>({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-md w-80 space-y-4"
    >
      <h2 className="text-xl font-semibold text-center">Sign Up</h2>

      <input
        type="email"
        name="email"
        placeholder="Email"
        className="w-full border px-3 py-2 rounded focus:outline-none focus:ring focus:ring-blue-300"
        onChange={handleChange}
        required
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        className="w-full border px-3 py-2 rounded focus:outline-none focus:ring focus:ring-blue-300"
        onChange={handleChange}
        required
      />

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        Register
      </button>
    </form>
  );
};

export default Register;