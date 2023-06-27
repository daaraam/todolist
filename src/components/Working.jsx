    const Working =({box,deleteBtnHandler,completeBtnHandler})=>{
    return(
    <div className="todo-wrap">
        {box.map((item) =>
          item.done ? <div key={item}></div> : 
            <div className="todo-list" key={item.id}>
              <div className="todo-container">
                <h2 className="todo-title">{item.title}</h2>
                <div className="todo-text">{item.detail}</div>

                <div className="button-group">
                  <button
                    onClick={() => deleteBtnHandler(item.id)}
                    className="delete-btn"
                  >
                    삭제하기
                  </button>
                  <button
                    onClick={() => completeBtnHandler(item.id)}
                    className="complete-btn"
                  >
                    {item.done ? "취소" : "완료"}
                  </button>
                </div>
              </div>
            </div>
        )}
      </div>)
}

export default Working