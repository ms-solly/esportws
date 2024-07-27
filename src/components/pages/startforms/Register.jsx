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
    <div class="min-h-screen flex flex-col items-center justify-center bg-gray-900">
      
      <h1 class="text-center text-2xl font-bold font-serif py-4 text-white">Register</h1>
      <div class="rounded-lg shadow-md w-full max-w-md">
        <form name="Rgst" class="bg-white p-8 rounded-lg shadow-md w-full max-w-md" onSubmit={handleSubmit}>
          <div class="mb-4">
            <label for="email" class="block text-lg font-semibold font-mono mb-2">
              Email:
            </label>
            <input
              type="email"
              required
              name="email"
              id="emailid"
              autoComplete="on"
              class="w-full p-2  border-b-red-500  border-b-2   rounded font-thin text-sm  placeholder:none focus:outline-none focus:border-t-red-500 focus:border-b-0 focus:border-t-2   " 
              placeholder="Enter your E-mail"
            />
          </div>
          <div class="mb-4">
            <label for="password" class="block text-lg font-semibold font-mono mb-2">
              Password:
            </label>
            <div class="relative">
              <input
                type={showPassword() ? "text" : "password"}
                required
                name="password"
                id="password"
                placeholder="Enter your Password"
                class="w-full p-2  border-b-red-500  border-b-2   rounded font-thin text-sm  placeholder:none focus:outline-none focus:border-t-red-500 focus:border-b-0 focus:border-t-2  "
                value={password()}
                onInput={(e) => {
                  setPassword(e.target.value);
                  setPasswordsMatch(true); // Reset the error message
                }}
              />
              <button type="button" onClick={handleTogglePassword} class="absolute right-2 top-1/2 transform -translate-y-1/2">
                {showPassword() ? <AiFillEyeInvisible /> : <AiFillEye />}
              </button>
            </div>
          </div>
          <div class="mb-6">
            <label for="c_password" class="block text-lg font-semibold font-mono mb-2">
              Confirm Password:
            </label>
            <div class="relative">
              <input
                type={showPassword() ? "text" : "password"}
                required
                name="c_password"
                id="c_password"
                placeholder="********"
                class={`w-full p-2  border-b-red-500  border-b-2   rounded font-thin text-sm  placeholder:none focus:outline-none focus:border-t-red-500 focus:border-b-0 focus:border-t-2   ${passwordsMatch() ? "" : "border-red-500"}`}
                value={confirmPassword()}
                onInput={(e) => {
                  setConfirmPassword(e.target.value);
                  setPasswordsMatch(true); // Reset the error message
                }}
              />
              <button type="button" onClick={handleTogglePassword} class="absolute right-2 top-1/2 transform -translate-y-1/2">
                {showPassword() ? <AiFillEyeInvisible /> : <AiFillEye />}
              </button>
            </div>
            {!passwordsMatch() && (
              <div class="text-red-500 text-sm mt-1">Passwords do not match.</div>
            )}
          </div>
          <button type="submit" class="w-full bg-gray-400 text-white rounded text-sm p-2 hover:bg-gray-500 transition duration-300">
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}
