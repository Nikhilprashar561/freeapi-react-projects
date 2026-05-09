import { useForm } from "react-hook-form";

export const Login = ({ onTabChange }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ defaultValues: { password: "", username: "" }, mode: "all" });

  const onSubmit = async (data) => {
    try {
      const response = await fetch(
        `https://api.freeapi.app/api/v1/users/login`,
        {
          method: "POST",
          headers: {
            accept: "application/json",
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        },
      );

      const result = await response.json();
      if (!result.success) {
        alert(result.message);
      }
      console.log("data", result);
      if (result.success) {
        alert(result.message);
      }
      reset();
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div className="form-wrapper">
      <div className="form-container">
        <h2>Login Account</h2>
        <p>Join us today and get started</p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              {...register("password", { required: "Password is required" })}
              id="password"
              type="password"
              name="password"
              placeholder="Enter a strong password"
            />
            {errors.password && <span>{errors.password.message}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              {...register("username", {
                required: "Username is required",
                minLength: {
                  value: 3,
                  message: "Minimum 3 required",
                },
                maxLength: {
                  value: 10,
                  message: "Maximum 10 required",
                },
              })}
              id="username"
              type="text"
              name="username"
              placeholder="Enter your username"
            />
            {errors.username && <span>{errors.username.message}</span>}
          </div>

          <button type="submit" className="submit-btn" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>

        <div className="form-footer">
          Don't have an account?{" "}
          <span
            onClick={() => onTabChange("register")}
            style={{ color: "#e73333", fontWeight: "600", cursor: "pointer" }}
          >
            Sign in here
          </span>
        </div>
      </div>
    </div>
  );
};
