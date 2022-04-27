import './WorkInProgress.css'

function WorkInProgress() {
    return (
      <div className="WorkInProgress">
        <img src={require('./wip.png')} className="WIPimg"/>
        <p>This page is not finished yet ! Come back later !</p>
      </div>
    );
  }
  
  export default WorkInProgress;