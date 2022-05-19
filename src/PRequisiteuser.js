const PRequisiteuser = ({
    letter,
    range2,
  }) => {
    return (
      <div className="message">
        <p className={letter}>Must be in the right form</p>
        <p className={range2}>Must be 5 to 15 Letter</p>
      </div>
    );
  };
  
  export default PRequisiteuser;
