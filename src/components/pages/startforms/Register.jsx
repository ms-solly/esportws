import { createSignal } from "solid-js";
import { AiFillEyeInvisible } from 'solid-icons/ai';
import { AiFillEye } from 'solid-icons/ai';

export default function Registration() {
  const [showPassword, setShowPassword] = createSignal(false);
  const [password, setPassword] = createSignal("");
  const [confirmPassword, setConfirmPassword] = createSignal("");
  const [passwordsMatch, setPasswordsMatch] = createSignal(true);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password() === confirmPassword()) {
      console.log("Form submitted");
      // Add your form submission logic here
    } else {
      setPasswordsMatch(false);
    }
  };

  return (
    <>
      <h1 className="text-center text-2xl font-bold font-serif">Register</h1>
      <div className="flex justify-center pt-40 bg-gray-200 p-20 w-full sm:h-screen h-full snap-none scroll-m-0">
        <form name="Rgst" className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <label htmlFor="email" className="text-lg font-semibold font-mono">
            Email:
            <input
              type="email"
              required
              name="email"
              id="emailid"
              autoComplete="on"
              className="p-1 rounded font-thin text-sm"
              placeholder="Enter your E-mail"
            />
          </label>
          <label htmlFor="password" className="text-lg font-semibold font-mono">
            Password:
            <input
              type={showPassword() ? "text" : "password"}
              required
              name="password"
              id="password"
              placeholder="Enter your Password"
              className="p-1 rounded font-thin text-sm"
              value={password()}
              onInput={(e) => {
                setPassword(e.target.value);
                setPasswordsMatch(true); // Reset the error message
              }}
            />
            <button type="button" onClick={handleTogglePassword} class="float-right">
              {showPassword() ? <AiFillEyeInvisible /> : <AiFillEye />}
            </button>
          </label>
          <label htmlFor="c_password" className="text-lg font-semibold font-mono">
            Confirm Password:
            <input
              type={showPassword() ? "text" : "password"}
              required
              name="c_password"
              id="c_password"
              placeholder="********"
              className={`p-1 rounded font-thin text-sm ${passwordsMatch() ? "" : "border-red-500"}`}
              value={confirmPassword()}
              onInput={(e) => {
                setConfirmPassword(e.target.value);
                setPasswordsMatch(true); // Reset the error message
              }}
            />
            {!passwordsMatch() && (
              <div className="text-red-500 text-sm">Passwords do not match.</div>
            )}
          </label>
          <button type="submit" className="bg-gray-400 rounded text-sm p-2">
            Continue
          </button>
        </form>
      </div>
    </>
  );
}
