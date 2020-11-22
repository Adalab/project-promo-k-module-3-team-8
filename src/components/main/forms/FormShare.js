import React from "react";

class FormShare extends React.Component {
  render() {
    const tweet =
      "Las chicas de Not a Name me han ayudado a crear esta tarjeta. @callmeferre @LuciCodes @EstiBv @LorenaMat90 @edurnevila";
    return (
      <>
        <form className="share ">
          <i className="far fa-id-card share__icon"></i>
          <input
            className="share__text"
            type="button"
            value="Crear Tarjeta"
            onClick={this.props.sendRequest}
          />
        </form>

        <div
          className={`share-url ${this.props.data.apiSuccess ? "" : "hidden"}`}
        >
          <div className="share-url__container">
            <h3 className="share-url__title">La tarjeta ha sido creada:</h3>
            <a
              className="share-url__link"
              target="_blank"
              rel="noreferrer"
              href={this.props.data.apiCardUrl}
            >
              {this.props.data.apiSuccess
                ? this.props.data.apiCardUrl
                : this.props.data.apiError}
            </a>
            <a
              className="share-url__link--share"
              target="_blank"
              rel="noreferrer"
              href={`https://twitter.com/intent/tweet?text=${tweet}&url=${this.props.data.apiCardUrl}`}
            >
              <i className="fab fa-twitter share-url__link--twitter"></i>
              Compartir en twitter{" "}
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default FormShare;
