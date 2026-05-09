import { useForm } from "react-hook-form";

export const Register = ({ onTabChange }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful, isSubmitted },
  } = useForm({
    defaultValues: { email: "", password: "", role: "ADMIN", username: "" },
    mode: "all",
  });

  const onSubmit = async (data) => {
    try {
      const response = await fetch(
        `https://api.freeapi.app/api/v1/users/register`,
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

      console.log("Register Data", result);

      if (result.success) {
        alert("User Register Successfully");
        reset();
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  if (isSubmitSuccessful) {
    return (
      <div className="success-container">
        <div className="success-card">
          <div className="success-card-icon">✓</div>
          <h2>Registration Successful!</h2>
          <p>Your account has been created successfully. Welcome aboard!</p>
          <button onClick={() => onTabChange("login")}>
            Continue to Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="form-wrapper">
      {isSubmitted && (
        <p className="status-message loading">Creating your account...</p>
      )}
      <div className="form-container">
        <h2>Create Account</h2>
        <p>Join us today and get started</p>

        <form onSubmit={handleSubmit(onSubmit)}>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              {...register("email", {
                required: "email is required",
              })}
              id="email"
              type="email"
              name="email"
              placeholder="your.email@example.com"
            />
            {errors.email && <span>{errors.email.message}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 3,
                  message: "Minimum 3 required",
                },
                maxLength: {
                  value: 10,
                  message: "Maximum 10 required",
                },
              })}
              id="password"
              type="password"
              name="password"
              placeholder="Enter a strong password"
            />
            {errors.password && <span>{errors.password.message}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="role">Role</label>
            <select
              {...register("role", {
                required: "Role is required",
                minLength: {
                  value: 3,
                  message: "Minimum 3 required",
                },
                maxLength: {
                  value: 10,
                  message: "Maximum 10 required",
                },
              })}
              id="role"
              name="role"
            >
              <option value="User">User</option>
              <option value="ADMIN">ADMIN</option>
              <option value="Moderator">Moderator</option>
              <option value="Developer">Developer</option>
            </select>
            {errors.role && <span>{errors.role.message}</span>}
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

          <button type="submit" className="submit-btn">
            Create Account
          </button>
        </form>

        <div className="form-footer">
          Already have an account?{" "}
          <span
            onClick={() => onTabChange("login")}
            style={{ color: "#667eea", fontWeight: "600", cursor: "pointer" }}
          >
            Sign in here
          </span>
        </div>
      </div>
    </div>
  );
};
