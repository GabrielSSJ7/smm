import Axios from "axios";

import { actionTypes } from "../../../config/types";

export default class Inputs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chooseCat: false,
      catSelected: (
        <div id="element-choose-cat">
          <div id="text-choose-page">
            <p>Escolha uma categoria</p>
          </div>
          <div id="arrow-choose-page">
            <i
              className="fas fa-chevron-down"
              onClick={this.chooseCat.bind(this)}
            />
          </div>
        </div>
      ),
      title: "",
      description: "",
      keyword: "",
      keywords: [],
      categoriesList: []
    };
  }
  componentDidMount() {
    Axios.get(`${actionTypes.URL}loadCats`).then(res => {
      this.setState({ categoriesList: res.data });
    });
  }
  render() {
    return (
      <>
        <div className="row" id="row-title">
          <div id="div-input-title">
            <input
              id="input-title"
              className="form-control"
              placeholder="Título"
              onChange={e => {
                this.props.changeNewPostTitle(e.target.value);
                this.setState({ title: e.target.value });
              }}
              value={this.state.title}
            />
          </div>
        </div>
        <div className="row">
          <textarea
            onChange={e => {
              this.setState({ description: e.target.value });
              this.props.changeNewPostDescription(e.target.value)
            }}
            value={this.state.description}
            rows={3}
            placeholder="Descrição (opcional)"
            className="form-control"
          />
        </div>
        <div className="row">
          <div className="col-md-6 " style={{ paddingLeft: 0 }}>
            <input
              className="form-control"
              placeholder="Keywords"
              onChange={e => this.setState({ keyword: e.target.value })}
              value={this.state.keyword}
              onKeyDown={this._handleKeyDown.bind(this)}
            />
          </div>
          <div
            className="col-md-6 div-keywords"
            style={{
              paddingRight: 0,
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap"
            }}
          >
            {this._renderKeywords()}
          </div>
        </div>
        <div className="row">{this._renderCategories()}</div>
      </>
    );
  }

  _renderKeywords() {
    const keywords = this.state.keywords;
    if (keywords.length > 0) {
      const element = [];
      keywords.forEach((e, i) => {
        element.push(
          <div className="keyword-line" key={i}>
            <span>{e}</span>
            <span
              onClick={() => this._removeKeyword(i)}
              className="btn btn-default"
              style={{ color: "white", cursor: "pointer" }}
            >
              x
            </span>
          </div>
        );
      });

      return element;
    } else {
      return <p style={{ color: "lightgrey" }}>Nenhuma keyword escolhida (Clique Enter para adicionar)</p>;
    }
  }

  _removeKeyword(index) {
    let keywords = this.state.keywords;

    keywords.splice(index, 1);

    this.setState({ keywords });
  }

  _handleKeyDown(e) {
    if (e.key === "Enter" || e.key == " ") {
      if (this.state.keyword != "") {
        const keywords = this.state.keywords;
        keywords.push(this.state.keyword.trim());
        console.log(keywords);
        this.props.changeNewPostKeywords(keywords)
        this.setState({ keywords, keyword: "" });
      }
    }
  }

  _renderCategories() {
    if (this.state.chooseCat) {
      return (
        <div>
          <div id="element-choose-cat-focus">
            <div id="text-choose-page">
              <input
                id="input-filter-categories"
                placeholder="Pesquise"
                onChange={e =>
                  this.setState({ inputFilterCategories: e.target.value })
                }
                value={this.state.inputFilterCategories}
              />
            </div>
            <div id="arrow-choose-page">
              <i
                className="fas fa-chevron-down"
                onClick={this.chooseCat.bind(this)}
              />
            </div>
          </div>
          <div id="list-cats">{this.renderListCats()}</div>
        </div>
      );
    } else {
      return this.state.catSelected;
    }
  }

  renderListCats() {
    const cats = this.state.categoriesList;
    let element = [];
    if (this.state.inputFilterCategories == "") {
      cats.forEach((e, i) => {
        element.push(
          <div onClick={() => this._clickCat(e)} className="cat">
            {e}
          </div>
        );
      });

      return element;
    } else {
      const regex = new RegExp(this.state.inputFilterCategories, "i");
      const filterCats = cats.filter((e, i) => {
        if (regex.test(e)) {
          return e;
        }
      });

      const sortCats = filterCats.sort((a, b) => {
        return a.localeCompare(b);
      });

      sortCats.forEach(e => {
        element.push(
          <div onClick={() => this._clickCat(e)} className="cat">
            {e}
          </div>
        );
      });

      return element;
    }
  }

  _clickCat(e) {
    this.setState({
      catSelected: (
        <div id="element-choose-cat">
          <div id="text-choose-page">
            <p>{e}</p>
          </div>
          <div id="arrow-choose-page">
            <i
              className="fas fa-chevron-down"
              onClick={this.chooseCat.bind(this)}
            />
          </div>
        </div>
      ),
      chooseCat: false,
      inputFilterCategories: e
    });
    this.props.changeNewPostCategories([e]);
  }

  chooseCat() {
    if (this.state.chooseCat) {
      this.setState({ chooseCat: false });
    } else {
      this.setState({ chooseCat: true });
    }
  }
}
