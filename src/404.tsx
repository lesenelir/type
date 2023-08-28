import {useNavigate} from "react-router-dom"

function ErrorPage() {
  const navigate = useNavigate()

  return (
    <div className={'flex flex-col justify-center items-center w-full h-screen'}>
      <p className={'m-2'}>ErrorPage</p>

      <button className={`
        bg-blue-200 p-2 rounded-lg hover:bg-blue-300  
        transition duration-700 ease-in-out
      `}
        onClick={() => navigate(-1)}
      >
        Back
      </button>
    </div>
  )
}

export default ErrorPage
