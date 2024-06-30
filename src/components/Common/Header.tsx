import "../../css/style.css";

export default function Header() {
  return (
    <div className="container flex justify-between mx-auto">
      <div className="sm: pt-[40px] flex flex-col space-y-[15px]">
        <div>
          <div>
            <img src="images/logo.png" alt="logo"/>
          </div> 
        </div>
        <div>
          <p className="text-black">Онлайн тренировки для занятий дома</p>
        </div>
      </div>

      <div className="rounded-buttonRadius bg-mainColor text-black rounded hover:mainHover">
        Войти
      </div>
    </div>
  );
}
