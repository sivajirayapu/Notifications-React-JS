const Notification = (props) => {
  //  Write your code here.
  const { className, imageUrl, text } = props;
  const classNames = `card-container ${className}`;
  return (
    <div class={classNames}>
      <img class="image" src={imageUrl} />
      <p class="message">{text}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div class="main-bg">
    <h1 class="heading">Notifications</h1>
    <div class="bg-containers">
      <Notification
        className="bg-color1"
        imageUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        text="Information Message"
      />
      <Notification
        className="bg-color2"
        imageUrl="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        text="Success Message"
      />
      <Notification
        className="bg-color3"
        imageUrl="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        text="Warning Message"
      />
      <Notification
        className="bg-color4"
        imageUrl="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        text="Error Message"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
