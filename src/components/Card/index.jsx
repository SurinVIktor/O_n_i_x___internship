import "./Card.css";

export default (props) => {
    const { avatar_url, id, login, html_url } = props.data;
    console.log(props.data);

    return (
      <div className="card" id={id}>
          <img src={avatar_url} alt="User Avatar"/>
          <a target="_blank" href={html_url}><h4>Link: {login}</h4></a>
      </div>
    );
}