import "./SingUp.css";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import Steps from "../../assets/images/sing-up/undraw_fill-forms_npwp.svg";

type Inputs = {
  email: string;
  password: string;
};

export function SingUp() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <div className="sing-up">
      <h1 className="sing-up__title">
        Bun venit! Hai să trecem repede peste partea asta.
      </h1>
      <p className="sing-up__description">
        Știm, nimănui nu-i place să completeze formulare… nici nouă. Dar
        promitem că e scurt, nedureros și îl faci o singură dată!
      </p>
      <img className="sing-up__image" src={Steps} alt="steps" />

      <form className="sing-up__form" onSubmit={handleSubmit(onSubmit)}>
        <label className="sing-up__label">UserName</label>
        <input
          type="text"
          defaultValue="some_email@gmail.com"
          {...register("email", { required: true })}
        />
        <label className="sing-up__label">Password</label>
        <input
          type="password"
          defaultValue="Password123!"
          {...register("password", { required: true })}
        />
        <label className="sing-up__label">Confirm Password</label>
        <input
          type="password"
          defaultValue="Password123!"
          {...register("password", { required: true })}
        />

        <input className="btn btn-full" type="submit" />
      </form>
    </div>
  );
}
