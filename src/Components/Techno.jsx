function TechSqaure(props) {
  return (
    <section className="TechSquare">
        <section className="TechImageBorder">
            <img className="TechImage" src={props.TechImage} alt={props.TechName} />
        </section>

        <h1>{props.TechName}</h1>
    </section>
  );
}

export default TechSqaure;