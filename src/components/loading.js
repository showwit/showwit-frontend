import "./loading.css";

const Loading = () => {
  return (
    <div className="loading-overlay">
      <div className="loading-overlay-inside">
        <div class="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
