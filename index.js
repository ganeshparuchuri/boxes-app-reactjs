const Box = (props) => {
  //  Write your code here.
  const { className, text } = props;
  return (
    <div className={`${className}`}>
      <p className="paragraph">{text}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="bg_container">
    <h1 className="heading">Boxes</h1>
    <div className="container">
      <Box className="Box_container" text="Small" />
      <Box className="Box_container Box_container1" text="Mediuml" />
      <Box className="Box_container Box_container2" text="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
