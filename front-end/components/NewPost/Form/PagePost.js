import { Button, Image } from "react-bootstrap";
export default class PagePost extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      choosePage: false,
      chooseInput: "",
      pageSelected: (
        <div id="element-choose-page">
          <div id="img-choose-page">
            {/* <Image
              src="https://emgroupuk.com/wp-content/uploads/2018/06/profile-icon-9.png"
              fluid
            /> */}
          </div>
          <div id="text-choose-page">
            <p>Escolha uma página</p>
          </div>
          <div id="arrow-choose-page">
            <i
              className="fas fa-chevron-down"
              onClick={this.choosePage.bind(this)}
            />
          </div>
        </div>
      )
    };
  }

  componentDidMount(){
    
  }

  render() {

    return (
      <div className="row" id="row-choose-page">
        {this.renderChoosePage()}
      </div>
    );
  }

  renderChoosePage() {
    if (this.state.choosePage) {
      //true
      return (
        <div id="">
          <div
            id="element-choose-page"
            style={{ position: "relative" }}
            className="with-input-choose-list"
          >
            <div id="img-choose-page">
              <Image
                src="https://emgroupuk.com/wp-content/uploads/2018/06/profile-icon-9.png"
                fluid
              />
            </div>
            <div id="text-choose-page">
              <input
                value={this.state.chooseInput}
                onChange={e => {
                  this.setState({ chooseInput: e.target.value });
                  this.props.fetchPagesForPost(e.target.value);
                }}
                id="input-choose-page"
                placeholder="Digite o nome da página"
              />
            </div>

            <div id="arrow-choose-page">
              <i
                className="fas fa-chevron-up"
                onClick={this.choosePage.bind(this)}
              />
            </div>
          </div>
          {this.renderListChoosePage()}
        </div>
      );
    } else {
      //false
      return <div>{this.state.pageSelected}</div>;
    }
  }

  renderListChoosePage() {
    if (this.state.chooseInput == "") {
      return (
        <div id="list-choose-page">
          <span
            style={{
              marginLeft: 15,
              color: "grey",
              fontSize: 13,
              marginTop: 10
            }}
          >
            Seu perfil
          </span>
          <div
            id="your-profile"
            onClick={() => {
                console.log('====================================');
                console.log(this.props.localStorage);
                console.log('====================================');
              this.selectPage(
                {
                  midia: this.props.localStorage.foto,
                  nome: this.props.localStorage.nick,
                  id: this.props.localStorage.id
                },
                true
              )
            }}
          >
            <div
              id="your-pic"
              className="post-div-circle"
              style={{ borderRadius: "100%", backgroundImage: `url(${this.props.localStorage.foto})` }}
            >
              {/* <Image src={this.props.localStorage.foto} /> */}
            </div>
            <span style={{ marginLeft: 10 }}>
              <strong>{this.props.localStorage.nick}</strong>
            </span>
          </div>

          <span
            style={{
              marginLeft: 15,
              color: "grey",
              fontSize: 13,
              marginTop: 10
            }}
          >
            Páginas que você segue
          </span>
          <div id="pages-you-follow">{this.renderSubscribedList()}</div>
        </div>
      );
    } else {
      return (
        <div id="list-choose-page">
          <span
            style={{
              marginLeft: 15,
              color: "grey",
              fontSize: 13,
              marginTop: 10
            }}
          >
            Sua pesquisa
          </span>
          <div id="pages-you-follow">{this.renderSearchPages()}</div>
        </div>
      );
    }
  }

  selectPage(element, v) {
    this.setState({
      isYourProfile: v,
      pageSelected: (
        <div id="element-choose-page">
          <div
            className="post-div-circle-selected"
            style={{ backgroundImage: `url(${element.midia})` }}
          >
            {/* <Image src={element.midia} /> */}
          </div>
          <div id="text-choose-page">
            <p>{element.nome}</p>
          </div>
          <div id="arrow-choose-page">
            <i
              className="fas fa-chevron-down"
              onClick={this.choosePage.bind(this)}
            />
          </div>
        </div>
      ),
      choosePage: false
    });
    console.log(element.id)
    this.props.changeNewPostIdUserPage(element.id);
    this.props.changeNewPostIsYourProfile(v);
    this.props.fetchPagesForPost(this.state.chooseInput);
  }

  renderSubscribedList() {
    const elementList = [];

    this.props.pagesSubscribed.forEach(element => {
      elementList.push(
        <div
          className="page-item"
          onClick={() => this.selectPage(element, false)}
          key={element.id}
        >
          <div className="post-div-circle" style={{ backgroundImage: `url(${element.midia})` }}>
            {/* <Image src={element.midia} /> */}
          </div>
          <span style={{ marginLeft: 10 }}>{element.nome}</span>
        </div>
      );
    });

    return elementList;
  }

  renderSearchPages() {
    const elementList = [];
    if (this.props.pagesForPost.length > 0) {
      this.props.pagesForPost.forEach(element => {
        elementList.push(
          <div
            className="page-item"
            onClick={() => this.selectPage(element, false)}
            key={element.id}
          >
            <div className="post-div-circle" style={{ backgroundImage: `url(${element.midia})` }}>
              {/* <Image src={element.midia} /> */}
            </div>
            <span style={{ marginLeft: 10 }}>{element.nome}</span>
          </div>
        );
      });
    } else {
      elementList.push(
        <p
          style={{ color: "grey", marginLeft: 15, fontWeight: "bold" }}
          key="nothing"
        >
          Nenhum item foi encontrado
        </p>
      );
    }

    return elementList;
  }

  choosePage() {
    if (this.state.choosePage) {
      this.setState({ choosePage: false });
    } else {
      this.setState({ choosePage: true });
    }
  }
}
