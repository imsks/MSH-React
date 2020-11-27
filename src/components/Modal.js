import React from "react";
import { connect } from "react-redux";
import { addLanguageData } from "../store/actions/userActions";
import i18n from "../i18n/index";

class Modal extends React.Component {
  constructor(props) {
    super(props);

    // console.log(this.props.isModalOpen)
    this.state = {
      modalOpened: this.props.isModalOpen,
    };

    this.modalToggle = this.modalToggle.bind(this);
  }

  componentDidMount = () => {
    switch (this.props.currLang) {
      case "eng-mun":
        document.getElementById("eng-mun").checked = true;
        break;
      case "hin-mun":
        document.getElementById("hin-mun").checked = true;
        break;
      case "eng-kur":
        document.getElementById("eng-kur").checked = true;
        break;
      case "hin-kur":
        document.getElementById("hin-kur").checked = true;
        break;
      case "eng-san":
        document.getElementById("eng-san").checked = true;
        break;
      case "hin-san":
        document.getElementById("hin-san").checked = true;
        break;
    }
  };

  modalOpen = (flag) => {
    console.log(flag);
  };

  modalToggle = () => {
    this.setState({ modalOpened: !this.state.modalOpened });
  };

  changeLang = (e) => {
    localStorage.setItem("languageData", e.target.value);

    // Change Language in DB
    const payload = {
      _id: this.props.id,
      languageData: e.target.value,
    };
    this.props.addLanguageData(payload);
  };

  render() {
    // console.log(this.props)
    const { id, message } = this.props;

    // TODO: Create a success alert for language added into DB
    // console.log(message);

    const coverClass = this.state.modalOpened
      ? "modal-cover modal-cover-active"
      : "modal-cover";
    const containerClass = this.state.modalOpened
      ? "modal-container modal-container-active"
      : "modal-container";
    return (
      <div>
        <a className="navigation__link" onClick={this.modalToggle}>
          {i18n.t("Language")}
        </a>

        <div className={containerClass}>
          <div className="modal-header">
            <h1>{i18n.t("Choose Your Language")}</h1>
          </div>
          <div className="modal-body">
            <div className="modal-choose-language">
              <div className="modal-choose-language-radio">
                <input
                  type="radio"
                  id="eng-mun"
                  name="gender"
                  value="eng-mun"
                  className="modal-radio"
                  onChange={this.changeLang}
                />
                <label htmlFor="eng-mun" className="modal-radio-label">
                  Mundari
                </label>

                <input
                  type="radio"
                  id="hin-mun"
                  name="gender"
                  value="hin-mun"
                  className="modal-radio"
                  onChange={this.changeLang}
                />
                <label htmlFor="hin-mun" className="modal-radio-label">
                  मुंडारी
                </label>

                <input
                  type="radio"
                  id="eng-kur"
                  name="gender"
                  value="eng-kur"
                  className="modal-radio"
                  onChange={this.changeLang}
                />
                <label htmlFor="eng-kur" className="modal-radio-label">
                  Kuruk
                </label>

                <input
                  type="radio"
                  id="hin-kur"
                  name="gender"
                  value="hin-kur"
                  className="modal-radio"
                  onChange={this.changeLang}
                />
                <label htmlFor="hin-kur" className="modal-radio-label">
                  कुरुख
                </label>

                <input
                  type="radio"
                  id="eng-san"
                  name="gender"
                  value="eng-san"
                  className="modal-radio"
                  onChange={this.changeLang}
                />
                <label htmlFor="eng-san" className="modal-radio-label">
                  Santhali
                </label>

                <input
                  type="radio"
                  id="hin-san"
                  name="gender"
                  value="hin-san"
                  className="modal-radio"
                  onChange={this.changeLang}
                />
                <label htmlFor="hin-san" className="modal-radio-label">
                  संताली
                </label>
              </div>
            </div>
          </div>
          <div className="modal-footer"></div>
        </div>

        <div className={coverClass} onClick={this.modalToggle}></div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const data = JSON.parse(localStorage.getItem("currentUser"));
  const id = data && data._id;

  return {
    id,
    message: state.utils,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addLanguageData: (payload) => dispatch(addLanguageData(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
