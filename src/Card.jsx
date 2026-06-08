import "./Card.css";
function Card({ data }) {
  return (
    <>
      {data.map((data) => (
        <div className="card" key={data.key}>
          <h1>{data.am}</h1>
          <p>{data.en}</p>
        </div>
      ))}
    </>
  );
}
export default Card;
