function Course({ id, content, title, price, removeOneCourse }) {
  return (
    <div className="card">
      <div className="cardTitlePrice">
        <h2 className="cardTitle">{title}</h2>
        <p className="cardContent">{content}</p>
        <h4 className="cardPrice">{price} USD</h4>
      </div>
      <button className="cardDeleteBtn" onClick={() => removeOneCourse(id)}>
        Delete
      </button>
    </div>
  );
}

export default Course;
