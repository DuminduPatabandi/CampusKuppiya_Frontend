import {SortArea, Need} from '../../components'
import styles from '../../style'


const Sort = () => {

  const currentUser = JSON.parse(localStorage.getItem("currentUser"))
  return (

    <div className="user">
      {currentUser ? (
        <div className="home bg-slate-500">
          <div className= {` bg-white py-3 w-full`}>
            <div className="w-full">
                <SortArea/>
            </div>
          </div>
        </div>
        ) : (
          <>
          <Need/>
          </>
      )}
      
    </div>

  )
}

export default Sort