import "./Card.css";

export default (props) => {
    const { avatar_url, id, login, html_url } = props.data;

    const handleOnFocus = (e) => {
        let elements = document.querySelectorAll(".card");
        [].forEach.call(elements, function(el) {
            el.classList.remove("active");
        });
        e.target.parentNode.classList.add("active");
    };

    return (
      <div className="card" id={id}>
          <img src={avatar_url} alt="User Avatar"/>
          <a target="_blank" href={html_url} onFocus={handleOnFocus}><h4>Link: {login}</h4></a>
      </div>
    );
}
