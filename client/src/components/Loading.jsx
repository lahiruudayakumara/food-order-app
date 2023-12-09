import style from "./loading.module.css";

const Loading = () => {
  return (
    <div className="relative top-0 left-0 w-screen h-screen flex flex-col items-center justify-center bg-white z-[101]">
     <div className={style.luk_loading_dots}></div>
    </div>
  )
}

export default Loading
