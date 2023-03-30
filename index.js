const Box = (props) => {
  const {name, type} = props;
  return <p className = `box ${type}`>{name}</p>
};

const element = (
  <div className="box-container">
  <h1 className = "main-head">Boxes</h1>
    <Box name="Small" type="small" />
    <Box name="Medium" type="medium" />
    <Box name="Large" type="large" />
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
